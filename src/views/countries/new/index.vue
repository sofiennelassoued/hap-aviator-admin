<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/countries">Countries</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Create</li>
    </ol>
  </nav>
  <div class="container">
    <form @submit.prevent="handleOnSubmit">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="card">
            <div class="card-body">
              <label for="input-label" class="form-label">Label*</label>
              <input type="text" class="form-control" id="input-label" aria-describedby="text-label"
                placeholder="Ex: Saudi Arabia" required v-model="label">
              <label for="input-label" class="form-label mt-3">Initials* <small><a
                    href="https://www.nationsonline.org/oneworld/country_code_list.htm" target="_blank">Learn
                    more</a></small></label>
              <input type="text" class="form-control" id="input-initials" aria-describedby="text-initials"
                placeholder="Ex: sau" min="3" max="3" required v-model="initials">
              <div id="help-initials" class="form-text">Provide the country initial (3 letters)</div>
              <label for="input-position" class="form-label mt-3">Position* <small><a
                    href="https://en.wikipedia.org/wiki/List_of_national_flags_of_sovereign_states" target="_blank">Get
                    flag</a></small></label>
              <input type="number" class="form-control" id="input-position" aria-describedby="text-position"
                placeholder="Ex: 2" required v-model.number="position">
              <div id="help-position" class="form-text">Provide the country position</div>
              <div class="form-check form-switch mt-3">
                <input class="form-check-input" type="checkbox" role="switch" id="switch-enabled" v-model="enabled">
                <label class="form-check-label" for="switch-enabled">Country is <span>{{ enabled ? 'enabled' :
                    'disabled'}}</span> by default</label>
              </div>

              <label for="input-flag" class="form-label mt-3">Flag*</label>
              <image-picker :preview="image" @loaded="handleOnLoaded" @reset="handleOnReset" />
              <div class="progress mt-2" v-if="progress">
                <div class="progress-bar" role="progressbar" :style="'width: ' + progress + '%;'"
                  :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">{{ Math.round(progress) }}%</div>
              </div>
              <div>
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
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import ImagePicker from '@/components/miscs/image-picker/index.vue';
import { IMAGES_STORAGE_BUCKET } from '@/constants';
import { createCountryMetadata } from '@/domain/countries';
import { upload } from '@/domain/storage';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const image = ref<string>('')
const imageBlob = ref<Blob | null>(null)
const label = ref()
const initials = ref()
const position = ref()
const loading = ref<boolean>(false)
const error = ref<string>('')
const progress = ref<number>(0)
const enabled = ref<boolean>(false)
const handleOnSubmit = () => {
  const fn = async () => {
    try {
      loading.value = true
      error.value = ""
      const u = await upload(IMAGES_STORAGE_BUCKET + '/countries/' + initials, imageBlob.value, async (e, s) => {
        if (e) error.value
        if (s) progress.value = (s.bytesTransferred / s.totalBytes) * 100;
      })
      if (u) {
        const id = initials.value.toLowerCase()
        const metadata = {
          label: label.value,
          initials: initials.value.toLowerCase(),
          position: position.value,
          enabled: enabled.value,
          flag: u,
          id,
          createdAt: new Date().toISOString()
        }
        await createCountryMetadata(id, metadata)
        loading.value = false
        Swal.fire({
          title: "Country created",
          text: "What do you want to do next?",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "View details",
          cancelButtonText: "View all",
        }).then(({ isConfirmed, isDismissed }) => {
          if (isConfirmed) {
            router.push(id);
          } else if (isDismissed) {
            router.push({
              name: 'countries'
            })
          }
        });
      }
    } catch (e) {
      console.log(e)
      loading.value = false
      // @ts-ignore
      error.value = e.message
    }
  }
  fn()
}
const handleOnLoaded = (i: string) => {
  if (i) {
    image.value = i
    imageBlob.value = base64ToBlob(i)
  }
}
const handleOnReset = () => {
  image.value = ''
  imageBlob.value = null
}
const base64ToBlob = (base64: string): Blob => {
  const [metadata, base64Data] = base64.split(",");
  const mimeType = metadata.match(/:(.*?);/)?.[1] || "image/png";
  const byteCharacters = atob(base64Data);
  const byteNumbers = new Uint8Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  return new Blob([byteNumbers], { type: mimeType });
}
</script>

<style scoped></style>
