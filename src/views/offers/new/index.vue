<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/offers">Offers</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Create</li>
    </ol>
  </nav>
  <div class="container">
    <form @submit.prevent="handleOnSubmit">
      <div class="row">
        <div class="col-md-12">
          <media />
          <basics />
          <pricing />
          <validity-and-availability />
          <business-details />
          <conditions-and-limitations />
          <button type="submit" class="btn btn-primary mt-3" :disabled="loading">
            <span v-if="!loading">Submit</span>
            <div class="spinner-grow text-light spinner-grow-sm" role="status" v-else>
            </div>
          </button>
          <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { IMAGES_STORAGE_BUCKET } from '@/constants';
import { createOffer } from '@/domain/offers';
import { upload } from '@/domain/storage';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Basics from '@/views/offers/new/components/basics/index.vue'
import Pricing from '@/views/offers/new/components/pricing/index.vue'
import ValidityAndAvailability from '@/views/offers/new/components/validity-and-availability/index.vue'
import ConditionsAndLimitations from '@/views/offers/new/components/conditions-and-limitations/index.vue'
import BusinessDetails from '@/views/offers/new/components/business-details/index.vue'
import Media from '@/views/offers/new/components/media/index.vue'
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
const uid = ""
const handleOnSubmit = () => {
  const fn = async () => {
    if (imageBlob.value) {
      try {
        loading.value = true
        error.value = ""
        upload(IMAGES_STORAGE_BUCKET + '/offers/' + uid, imageBlob.value, async (e, s, u) => {
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
            await createOffer(uid, metadata)
            loading.value = false
            Swal.fire({
              title: "Offer created",
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
                router.push(uid);
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
</script>

<style scoped></style>
