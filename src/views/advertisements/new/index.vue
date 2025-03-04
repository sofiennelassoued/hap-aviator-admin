<template>
  <div class="container">
    <form @submit.prevent="handleOnSubmit">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <image-picker v-if="mediaType === 'image'" :preview="url" @loaded="handleOnLoaded"
                @reset="handleOnReset" />
              <video-picker v-if="mediaType === 'video'" :preview="url" @loaded="handleOnLoaded"
                @reset="handleOnReset" />
              <div class="progress mt-2" v-if="progress">
                <div class="progress-bar" role="progressbar" :style="'width: ' + progress + '%;'"
                  :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">{{ Math.round(progress) }}%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <div class="mb-3">
                <label for="input-title" class="form-label">Title</label>
                <input type="text" class="form-control" id="input-title" aria-describedby="text-title"
                  placeholder="Ex: Black Friday Campaign" required v-model="title">
                <div id="help-title" class="form-text">Add a descriptive title that you can remember</div>
              </div>
              <div class="mb-3">
                <label for="input-title" class="form-label">Media type</label>
                <div>
                  <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn"
                      :class="mediaType === 'image' ? 'btn-secondary' : 'btn-outline-secondary'"
                      @click="handleOnMediaTypeClick('image')">Image</button>
                    <button type="button" class="btn"
                      :class="mediaType === 'video' ? 'btn-secondary' : 'btn-outline-secondary'"
                      @click="handleOnMediaTypeClick('video')">Video</button>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="input-title" class="form-label">Action</label>
                <input type="text" class="form-control" id="input-title" aria-describedby="text-title"
                  placeholder="Ex: Take your chance" required v-model="action">
                <div id="help-title" class="form-text">Add a engaging action</div>
              </div>
              <div class="mb-3">
                <label for="input-title" class="form-label">Link</label>
                <input type="text" class="form-control" id="input-title" aria-describedby="text-title"
                  placeholder="Ex: https://www.example.com/my-product" required v-model="link">
                <div id="help-title" class="form-text">Add the URL of the action</div>
              </div>
              <button type="submit" class="btn btn-primary mt-4" :disabled="loading">
                <span v-if="!loading">Submit</span>
                <div class="spinner-grow text-light spinner-grow-sm" role="status" v-else>
                </div>
              </button>
              <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import ImagePicker from '@/components/miscs/image-picker/index.vue';
import VideoPicker from '@/components/miscs/video-picker/index.vue';
import { ADVERTISEMENTS_DATABASE_COLLECTION, IMAGES_STORAGE_BUCKET } from '@/constants';
import { createAdvertisement } from '@/domain/advertisements';
import { generateId } from '@/domain/firebase';
import { upload } from '@/domain/storage';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const url = ref<string>('')
const blob = ref<Blob | null>(null)
const title = ref('')
const mediaType = ref<'image' | 'video'>('image')
const action = ref('')
const link = ref('')
const loading = ref<boolean>(false)
const error = ref<string>('')
const progress = ref<number>(0)
const handleOnSubmit = () => {
  const fn = async () => {
    if (blob.value) {
      try {
        loading.value = true
        error.value = ""
        const id = await generateId(ADVERTISEMENTS_DATABASE_COLLECTION)
        const u = await upload(IMAGES_STORAGE_BUCKET + '/advertisements/' + id, blob.value, async (e, s) => {
          if (e) error.value
          if (s) progress.value = (s.bytesTransferred / s.totalBytes) * 100;
        })
        if (u) {
          const payload = {
            mediaType: mediaType.value,
            title: title.value,
            action: action.value,
            link: link.value,
            url: u,
            createdAt: new Date().toISOString()
          }
          await createAdvertisement(id, payload)
          loading.value = false
          Swal.fire({
            title: "Advertisement created",
            text: "What do you want to do next?",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "View details",
            cancelButtonText: "View all",
          }).then((result) => {
            if (result.isConfirmed) {
              router.push(id);
            } else if (result.isDismissed) {
              router.push({
                name: 'advertisements'
              })
            }
          });
        }
      }
      catch (e) {
        console.log(e)
        loading.value = false
        // @ts-ignore
        error.value = e.message
      }
    }
  }
  fn()
}
const handleOnLoaded = (i: string) => {
  if (i) {
    url.value = i
    blob.value = base64ToBlob(i)
  }
}
const handleOnReset = () => {
  url.value = ''
  blob.value = null
}
const base64ToBlob = (base64: string): Blob => {
  const [metadata, base64Data] = base64.split(",");
  const mimeType = metadata.match(/:(.*?);/)?.[1] || "image/jpeg";
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Uint8Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  return new Blob([byteNumbers], { type: mimeType });
}

const handleOnMediaTypeClick = (v: 'image' | 'video') => {
  mediaType.value = v
}
</script>

<style scoped></style>
