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
          <media ref="media" :count="MEDIA_COUNT" :progresses="progresses" />
          <basics ref="basics" />
          <pricing ref="pricing" />
          <validity-and-availability ref="validityAndAvailability" />
          <business-details ref="businessDetails" />
          <conditions-and-limitations ref="conditionsAndLimitations" />
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
import { useRoute, useRouter } from 'vue-router';
import Basics from '@/views/offers/new/components/basics/index.vue'
import Pricing from '@/views/offers/new/components/pricing/index.vue'
import ValidityAndAvailability from '@/views/offers/new/components/validity-and-availability/index.vue'
import ConditionsAndLimitations from '@/views/offers/new/components/conditions-and-limitations/index.vue'
import BusinessDetails from '@/views/offers/new/components/business-details/index.vue'
import Media from '@/views/offers/new/components/media/index.vue'
const router = useRouter()
const route = useRoute()
const MEDIA_COUNT = 4

// Components
const media = ref()
const basics = ref()
const pricing = ref()
const validityAndAvailability = ref()
const businessDetails = ref()
const conditionsAndLimitations = ref()

const loading = ref<boolean>(false)
const error = ref<string>('')
const progresses = ref<number[]>([])
const partnerId = route.query.partner
const handleOnSubmit = () => {
  const fn = async () => {
    try {
      if (!route.query.partner) {
        throw new Error('The partner ID is not provided')
      }
      if (!media.value || !media.value.media) {
        throw new Error('Media are not provided')
      }
      const metadata: any = {}
      loading.value = true
      error.value = ""
      const offerMedia = []
      const entries = media.value.media.entries()
      let j = 0;
      for (const [i, m] of entries) {
        if (m && m.blob) {
          j = j + 1
          const result = await upload(IMAGES_STORAGE_BUCKET + '/offers/' + "uid-" + j, m.blob, async (e, s) => {
            if (e) error.value
            if (s) progresses.value[i] = (s.bytesTransferred / s.totalBytes) * 100;
          })
          if (result) {
            offerMedia.push(result)
          }
        }
      }
      metadata['partnerId'] = partnerId
      if (offerMedia && offerMedia.length > 0) {
        metadata['media'] = offerMedia
      }
      if (basics.value) {
        const { title, description, category } = basics.value
        if (title) metadata['title'] = title
        if (description) metadata['description'] = description
        if (category) metadata['category'] = category
      }
      if (pricing.value) {
        const { points, type, discount } = pricing.value
        metadata['pricing'] = {}
        if (points) metadata['pricing']['points'] = points
        if (type) metadata['pricing']['type'] = type
        if (discount) metadata['pricing']['discount'] = discount
      }
      if (validityAndAvailability.value) {
        const { startDate, endDate, quota, priority } = validityAndAvailability.value
        metadata['validity'] = {}
        if (startDate) metadata['validity']['startDate'] = startDate
        if (endDate) metadata['validity']['endDate'] = endDate
        if (quota) metadata['validity']['quota'] = quota
        if (priority) metadata['validity']['priority'] = priority
      }
      if (businessDetails.value) {
        const { name, representative, location, address, email, phone, hours, country, cities } = businessDetails.value
        metadata['business'] = {}
        if (name) metadata['business']['name'] = name
        if (representative) metadata['business']['representative'] = representative
        if (location) metadata['business']['location'] = location
        if (address) metadata['business']['address'] = address
        if (country) metadata['business']['country'] = country
        if (cities) metadata['business']['cities'] = cities
        if (email) metadata['business']['email'] = email
        if (phone) metadata['business']['phone'] = phone
        if (hours) metadata['business']['hours'] = hours
      }
      if (conditionsAndLimitations.value) {
        const { conditions, limitations } = conditionsAndLimitations.value
        metadata['conditions'] = {}
        if (conditions) metadata['conditions']['conditions'] = conditions
        if (limitations) metadata['conditions']['limitations'] = limitations
      }
      await createOffer("uid", metadata)
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
          router.push("uid");
        }
      });
    } catch (e) {
      console.log(e)
      loading.value = false
      // @ts-ignore
      error.value = e.message
    }
  }
  fn()
}
</script>

<style scoped></style>
