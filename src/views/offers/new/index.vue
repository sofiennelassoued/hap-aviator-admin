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
    <form @submit.prevent="handleOnSubmit" v-if="partner">
      <div class="row">
        <div class="col-md-12">
          <basics ref="basics" />
          <pricing ref="pricing" />
          <validity-and-availability ref="validityAndAvailability" />
          <business-details :name="name" :representative="representative" :email="contactEmail" :phone="phone"
            ref="businessDetails" />
          <business-social :website="website" :instagram="instagram" :facebook="facebook" :whatsapp="whatsapp"
            ref="businessSocial" />
          <conditions-and-limitations ref="conditionsAndLimitations" />
          <media ref="media" :count="MEDIA_COUNT" :progresses="progresses" />
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
import { IMAGES_STORAGE_BUCKET, OFFERS_DATABASE_COLLECTION } from '@/constants';
import { generateId } from '@/domain/firebase';
import { createOffer } from '@/domain/offers';
import { getPartnerMetadata } from '@/domain/partners';
import { upload } from '@/domain/storage';
import Basics from '@/views/offers/new/components/basics/index.vue';
import BusinessDetails from '@/views/offers/new/components/business-details/index.vue';
import ConditionsAndLimitations from '@/views/offers/new/components/conditions-and-limitations/index.vue';
import Media from '@/views/offers/new/components/media/index.vue';
import Pricing from '@/views/offers/new/components/pricing/index.vue';
import BusinessSocial from '@/views/offers/new/components/social/index.vue';
import ValidityAndAvailability from '@/views/offers/new/components/validity-and-availability/index.vue';
import Swal from 'sweetalert2';
import { onMounted, ref, toRaw } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const MEDIA_COUNT = 4

// Components
const media = ref()
const basics = ref()
const pricing = ref()
const validityAndAvailability = ref()
const businessDetails = ref()
const businessSocial = ref()
const conditionsAndLimitations = ref()

const loading = ref<boolean>(false)
const error = ref<string>('')
const progresses = ref<number[]>([])
const partnerId = route.query.partner
const partner = ref()
// Business details
const name = ref()
const representative = ref()
const contactEmail = ref()
const phone = ref()
const website = ref()
// Business social
const instagram = ref()
const facebook = ref()
const whatsapp = ref()

onMounted(() => {
  const fn = async () => {
    try {
      if (partnerId) {
        partner.value = await getPartnerMetadata(partnerId?.toString())
        name.value = partner.value.name;
        representative.value = partner.value.representative;
        contactEmail.value = partner.value.contactEmail;
        phone.value = partner.value.phone;
        website.value = partner.value.website;
        instagram.value = partner.value.instagram;
        facebook.value = partner.value.facebook;
        whatsapp.value = partner.value.whatsapp
      }
    } catch (error) {
      console.log(error)
    }
  }
  fn()
})
const handleOnSubmit = () => {
  const fn = async () => {
    try {
      if (!route.query.partner) {
        throw new Error('The partner ID is not provided')
      }
      if (!media.value || !media.value.media) {
        throw new Error('Media are not provided')
      }
      loading.value = true
      error.value = ""
      const id = await generateId(OFFERS_DATABASE_COLLECTION)
      const payload: any = {}
      const offerMedia = []
      const entries = media.value.media.entries()
      let j = 0;
      for (const [i, m] of entries) {
        if (m && m.blob) {
          j = j + 1
          const result = await upload(IMAGES_STORAGE_BUCKET + '/offers/' + id + "-" + j, m.blob, async (e, s) => {
            if (e) error.value
            if (s) progresses.value[i] = (s.bytesTransferred / s.totalBytes) * 100;
          })
          if (result) {
            offerMedia.push(result)
          }
        }
      }
      if (offerMedia && offerMedia.length > 0) {
        payload['media'] = offerMedia
      }
      if (basics.value) {
        const { title, description, category } = basics.value
        if (title) payload['title'] = title
        if (description) payload['description'] = description
        if (category) payload['categoryId'] = category
      }
      if (pricing.value) {
        const { points, price, type, discount } = pricing.value
        payload['pricing'] = {}
        if (points) payload['pricing']['points'] = points
        if (price) payload['pricing']['price'] = price
        if (type) payload['pricing']['type'] = type
        if (discount) payload['pricing']['discount'] = discount
      }
      if (validityAndAvailability.value) {
        const { startDate, endDate, quota, priority } = validityAndAvailability.value
        payload['validity'] = {}
        if (startDate) payload['validity']['startDate'] = startDate
        if (endDate) payload['validity']['endDate'] = endDate
        if (quota) payload['validity']['quota'] = quota
        if (priority) payload['validity']['priority'] = priority
      }
      if (businessDetails.value) {
        const { name, representative, city, zip, address, location, email, phone, hours, country, governorate } = businessDetails.value
        payload['business'] = {}
        if (name) payload['business']['name'] = name
        if (representative) payload['business']['representative'] = representative
        if (location) payload['business']['location'] = location
        if (address) payload['business']['address'] = address
        if (country) payload['business']['countryId'] = country
        if (governorate) {
          payload['business']['governorateId'] = governorate.id
          payload['business']['regionId'] = governorate.regionId
        }
        if (email) payload['business']['email'] = email
        if (phone) payload['business']['phone'] = phone
        if (hours) payload['business']['hours'] = toRaw(hours)
      }
      if (businessSocial.value) {
        const { website, instagram, facebook, whatsapp } = businessSocial.value
        payload['social'] = {}
        if (website) payload['social']['website'] = website
        if (instagram) payload['social']['instagram'] = instagram
        if (facebook) payload['social']['facebook'] = facebook
        if (whatsapp) payload['social']['whatsapp'] = whatsapp
      }
      if (conditionsAndLimitations.value) {
        const { conditions, limitations } = conditionsAndLimitations.value
        payload['conditions'] = {}
        if (conditions) payload['conditions']['conditions'] = conditions
        if (limitations) payload['conditions']['limitations'] = limitations
      }
      payload['partnerId'] = partnerId
      payload["id"] = id
      payload["createdAt"] = new Date().toISOString()
      await createOffer(id, payload)
      loading.value = false
      Swal.fire({
        title: "Offer created",
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
            name: 'offers'
          })
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
