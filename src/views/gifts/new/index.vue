<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/Gifts">Gifts</router-link></li>
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
                  :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">{{ Math.round(progress) }}%</div>
              </div>
              <image-cropper v-if="tempImage" :image="tempImage" :aspect-ratio="CROPPER_ASPECT_RATIO.Ratio_1_1"
                @cropped="handleOnCropped" />
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <label for="input-country" class="form-label">Country*</label>
                  <country-picker :selected="country" @select="handleOnSelectCountry" />
                  <div id="help-country" class="form-text">Country</div>
                </div>
                <div class="col-md-6">
                  <label for="input-status" class="form-label">Status*</label>
                  <status-picker :selected="status" @select="handleOnSelectStatus" />
                  <div id="help-status" class="form-text">Status</div>
                </div>
              </div>
              <label for="input-label" class="form-label">Label*</label>
              <input type="text" class="form-control" id="input-label" aria-describedby="text-label"
                placeholder="Ex: 5 USD coupon" required v-model="label">
              <div id="help-label" class="form-text">Gift card descriptive label</div>
              <div class="row mt-2">
                <div class="col-md-3">
                  <label for="input-type" class="form-label">Type*</label>
                  <type-picker :selected="type" @select="handleOnSelectType" />
                  <div id="help-type" class="form-text">Type</div>
                </div>
                <div class="col-md-9">
                  <label for="input-payload" class="form-label">Payload*</label>
                  <input type="text" class="form-control" id="input-payload" aria-describedby="text-payload"
                    placeholder="Ex: ABC-DEFGHIJ-1234" v-model="payload">
                  <div id="help-payload" class="form-text">Payload</div>
                </div>
                <div class="col-md-6">
                  <label for="input-points" class="form-label">Points</label>
                  <input type="text" class="form-control" id="input-points" aria-describedby="text-points"
                    placeholder="Ex: 300" v-model="points">
                  <div id="help-points" class="form-text">Points</div>
                </div>
                <div class="col-md-6">
                  <label for="input-hearts" class="form-label">Hearts</label>
                  <input type="text" class="form-control" id="input-hearts" aria-describedby="text-hearts"
                    placeholder="Ex: 5" v-model="hearts">
                  <div id="help-hearts" class="form-text">Hearts</div>
                </div>
                <div class="col-md-6">
                  <label for="input-description" class="form-label">Description</label>
                  <textarea type="text" class="form-control" id="input-description" aria-describedby="text-description"
                    placeholder="Ex: Gift card for Example subscription" v-model="description"></textarea>
                  <div id="help-description" class="form-text">Description</div>
                </div>
                <div class="col-md-6">
                  <label for="input-about" class="form-label">About</label>
                  <input type="text" class="form-control" id="input-about" aria-describedby="text-about"
                    placeholder="Ex: https://www.example.com/gifts/example-gift" v-model="about">
                  <div id="help-about" class="form-text">About</div>
                </div>
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
import CountryPicker from '@/components/miscs/forms/country-picker/index.vue';
import { CROPPER_ASPECT_RATIO } from '@/components/miscs/image-cropper/index.config';
import ImageCropper from '@/components/miscs/image-cropper/index.vue';
import ImagePicker from '@/components/miscs/image-picker/index.vue';
import { GIFTS_DATABASE_COLLECTION, IMAGES_STORAGE_BUCKET } from '@/constants';
import { generateId } from '@/domain/firebase';
import { createGift } from '@/domain/gifts';
import { upload } from '@/domain/storage';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import StatusPicker from './status-picker/index.vue';
import TypePicker from './type-picker/index.vue';
const router = useRouter()
const image = ref<string>('')
const imageBlob = ref<Blob | null>(null)
const tempImage = ref<string>('')
const country = ref()
const status = ref()
const label = ref()
const type = ref()
const payload = ref()
const points = ref()
const hearts = ref()
const description = ref()
const about = ref()
const loading = ref<boolean>(false)
const error = ref<string>('')
const progress = ref<number>(0)
const handleOnSubmit = () => {
  const fn = async () => {
    if (imageBlob.value) {
      try {
        loading.value = true
        error.value = ""
        const id = await generateId(GIFTS_DATABASE_COLLECTION)
        const u = await upload(IMAGES_STORAGE_BUCKET + '/gifts/' + id, imageBlob.value, async (e, s) => {
          if (e) error.value
          if (s) progress.value = (s.bytesTransferred / s.totalBytes) * 100;
        })
        if (u) {
          const metadata = {
            countryId: country.value,
            status: status.value,
            label: label.value,
            type: type.value,
            payload: payload.value,
            description: description.value,
            about: about.value,
            image: u,
            createdAt: new Date().toISOString()
          }
          // @ts-ignore
          if (points.value) metadata["points"] = points.value
          // @ts-ignore
          if (hearts.value) metadata["hearts"] = hearts.value
          await createGift(id, metadata)
          loading.value = false
          Swal.fire({
            title: "Gift created",
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
                name: 'gifts'
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
const handleOnSelectCountry = (v: string) => {
  country.value = v
}
const handleOnSelectStatus = (v: string) => {
  status.value = v
}
const handleOnSelectType = (v: string) => {
  type.value = v
}
</script>

<style scoped></style>
