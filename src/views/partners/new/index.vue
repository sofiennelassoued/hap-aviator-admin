<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/partners">Partners</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Create</li>
    </ol>
  </nav>
  <div class="container">
    <form @submit.prevent="handleOnSubmit">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <image-picker :preview="image" @loaded="handleOnLoaded" @reset="handleOnReset" />
              <div class="progress mt-2" v-if="progress">
                <div class="progress-bar" role="progressbar" :style="'width: ' + progress + '%;'"
                  :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">{{ progress }}%</div>
              </div>
              <cropper v-if="tempImage" :image="tempImage" :aspect-ratio="CROPPER_ASPECT_RATIO.Ratio_1_1"
                @cropped="handleOnCropped" />
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <label for="input-title" class="form-label">Email</label>
              <input type="text" class="form-control" id="input-email" aria-describedby="text-email"
                placeholder="Ex: contact@happy-pizza.com" required v-model="email">
              <div id="help-email" class="form-text">Provide the establishment email or the representative email</div>
              <label for="input-password" class="form-label">Password</label>
              <input type="password" class="form-control" id="input-password" aria-describedby="text-password"
                placeholder="Input password" required v-model="password">
              <div id="help-password" class="form-text">Type a strong password</div>
              <label for="input-name" class="form-label">Name</label>
              <input type="text" class="form-control" id="input-name" aria-describedby="text-name"
                placeholder="Ex: Pizza Example" required v-model="name">
              <div id="help-name" class="form-text">Establishment name</div>
              <label for="input-social-link" class="form-label">Social link</label>
              <input type="text" class="form-control" id="input-social-link" aria-describedby="text-social-link"
                placeholder="Ex: https://www.example.com" required v-model="link">
              <div id="help-social-link" class="form-text">Website, Instagram, Facebook...</div>
              <button type="submit" class="btn btn-primary" :disabled="loading">
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
import { CROPPER_ASPECT_RATIO } from '@/components/miscs/cropper/index.config';
import Cropper from '@/components/miscs/cropper/index.vue';
import { IMAGES_STORAGE_BUCKET } from '@/constants';
import { createPartnerIdentity, createPartnerMetadata } from '@/domain/partners';
import { upload } from '@/domain/storage';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ImagePicker from './image-picker/index.vue';
const router = useRouter()
const image = ref<string>('')
const imageBlob = ref<Blob | null>(null)
const tempImage = ref<string>('')
const email = ref()
const password = ref()
const name = ref()
const link = ref()
const loading = ref<boolean>(false)
const error = ref<string>('')
const progress = ref<number>(0)
const handleOnSubmit = () => {
  const fn = async () => {
    if (imageBlob.value) {
      try {
        loading.value = true
        error.value = ""
        const { user } = await createPartnerIdentity(email.value,
          password.value)
        upload(IMAGES_STORAGE_BUCKET + '/partners/' + user.uid, imageBlob.value, async (e, s, u) => {
          if (e) error.value
          if (s) progress.value = (s.bytesTransferred / s.totalBytes) * 100;
          if (u) {
            const metadata = {
              email: email.value,
              name: name.value,
              link: link.value,
              image: u,
              createdAt: new Date().toISOString()
            }
            await createPartnerMetadata(user.uid, metadata)
            loading.value = false
            Swal.fire({
              title: "Partner created",
              text: "What do you want to do next?",
              icon: "success",
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: "Create offer",
              cancelButtonText: "Close",
              denyButtonText: `View details`
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
              } else if (result.isDenied) {
                router.push(user.uid);
              }
            });
          }
        })
      } catch (e) {
        console.log(e)
        loading.value = false
        // @ts-ignore
        error.value = e.message
      }
    }
  }
  fn()
}
const handleOnCropped = ({ base64, blob, file }: { base64: string; blob: Blob | null, file: Blob | null }) => {
  tempImage.value = ""
  image.value = base64
  imageBlob.value = blob
}
const handleOnLoaded = (i: string) => {
  tempImage.value = i
}
const handleOnReset = () => {
  tempImage.value = ''
  image.value = ''
  imageBlob.value = null
}
</script>

<style scoped></style>
