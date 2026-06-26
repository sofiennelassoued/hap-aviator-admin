<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/organizations">Organizations</router-link></li>
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
              <label for="input-title" class="form-label">Login email*</label>
              <input type="text" class="form-control" id="input-email" aria-describedby="text-email"
                placeholder="Ex: contact@happy-pizza.com / name@hap-organization.com" required v-model="email">
              <div id="help-email" class="form-text">Provide the business email or the representative email</div>
              <label for="input-name" class="form-label">Name*</label>
              <input type="text" class="form-control" id="input-name" aria-describedby="text-name"
                placeholder="Ex: Pizza Example" required v-model="name">
              <div id="help-name" class="form-text">Business name</div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label for="input-social-link" class="form-label">Business representative</label>
                  <input type="text" class="form-control" id="input-business-representative"
                    aria-describedby="text-business-representative" placeholder="Ex: Bob Black"
                    v-model="representative">
                  <div id="help-business-representative" class="form-text">Business manager</div>
                </div>
                <div class="col-md-6">
                  <label for="input-business-website" class="form-label">Business website</label>
                  <input type="text" class="form-control" id="input-business-website"
                    aria-describedby="text-business-representative" placeholder="Ex: https://www.pizzaexample.com"
                    v-model="website">
                  <div id="help-business-website" class="form-text">Business website</div>
                </div>
                <div class="col-md-6">
                  <label for="input-contact-email" class="form-label">Business contact email</label>
                  <input type="text" class="form-control" id="input-business-contact-email"
                    aria-describedby="text-business-representative" placeholder="Ex: contact@pizza-example.com"
                    v-model="contactEmail">
                  <div id="help-business-contact-email" class="form-text">Business contact email</div>
                </div>
                <div class="col-md-6">
                  <label for="input-business-phone" class="form-label">Business phone</label>
                  <input type="text" class="form-control" id="input-business-phone"
                    aria-describedby="text-business-representative" placeholder="Ex: +1 234 567 890" v-model="phone">
                  <div id="help-business-phone" class="form-text">Business phone</div>
                </div>
                <div class="col-md-4">
                  <label for="input-business-instagram" class="form-label">Business Instagram</label>
                  <input type="text" class="form-control" id="input-business-website"
                    aria-describedby="text-business-representative"
                    placeholder="Ex: https://www.instagram.com/@pizzaexample" v-model="instagram">
                  <div id="help-business-instagram" class="form-text">Business Instagram</div>
                </div>
                <div class="col-md-4">
                  <label for="input-business-instagram" class="form-label">Business Facebook</label>
                  <input type="text" class="form-control" id="input-business-instagram"
                    aria-describedby="text-business-representative"
                    placeholder="Ex: https://www.facebook.com/pizzaexample" v-model="facebook">
                  <div id="help-business-facebook" class="form-text">Business Facebook</div>
                </div>
                <div class="col-md-4">
                  <label for="input-business-whatsapp" class="form-label">Business WhatsApp</label>
                  <input type="text" class="form-control" id="input-business-representative"
                    aria-describedby="text-business-representative" placeholder="Ex: +1 234 567 890" v-model="whatsapp">
                  <div id="help-business-whatsapp" class="form-text">Business WhatsApp</div>
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
import { CROPPER_ASPECT_RATIO } from '@/components/miscs/image-cropper/index.config';
import ImageCropper from '@/components/miscs/image-cropper/index.vue';
import ImagePicker from '@/components/miscs/image-picker/index.vue';
import { IMAGES_STORAGE_BUCKET } from '@/constants';
import { createOrganization } from '@/domain/organizations';
import { upload } from '@/domain/storage';
import type { CreateOrganizationInput } from '@/lib';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const image = ref<string>('')
const imageBlob = ref<Blob | null>(null)
const tempImage = ref<string>('')
const email = ref()
const name = ref()
const representative = ref()
const contactEmail = ref()
const phone = ref()
const website = ref()
const instagram = ref()
const facebook = ref()
const whatsapp = ref()
const loading = ref<boolean>(false)
const error = ref<string>('')
const progress = ref<number>(0)
const handleOnSubmit = () => {
  const fn = async () => {
    try {
      loading.value = true
      const payload: CreateOrganizationInput = {
        label: name.value
      }
      const x = await createOrganization(payload)
    } catch (error) {
      loading.value = false
      console.log(error)
    }
  }
  fn()
}
const handleOnSubmit2 = () => {
  const fn = async () => {
    if (imageBlob.value) {
      try {
        loading.value = true
        error.value = ""
        const user = { uid: "" }

        const u = await upload(IMAGES_STORAGE_BUCKET + '/organizations/' + user.uid, imageBlob.value, async (e, s) => {
          if (e) error.value
          if (s) progress.value = (s.bytesTransferred / s.totalBytes) * 100;
        })
        if (u) {
          const metadata = {
            email: email.value,
            name: name.value,
            representative: representative.value,
            contactEmail: contactEmail.value,
            phone: phone.value,
            website: website.value,
            instagram: instagram.value,
            facebook: facebook.value,
            whatsapp: whatsapp.value,
            image: u,
            createdAt: new Date().toISOString()
          }
          await createOrganization(metadata)
          loading.value = false
          Swal.fire({
            title: "Organization created",
            text: "What do you want to do next?",
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "View details",
            cancelButtonText: "View all",
          }).then((result) => {
            if (result.isConfirmed) {
              router.push(user.uid);
            } else if (result.isDismissed) {
              router.push({
                name: 'organizations'
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
</script>

<style scoped></style>
