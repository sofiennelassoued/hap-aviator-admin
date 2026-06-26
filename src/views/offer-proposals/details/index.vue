<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/offers">Offers</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Details</li>
    </ol>
  </nav>
  <div class="container" v-if="!loading && payload">
    <div class="row">
      <div class="col-md-12">
        <media ref="media" :media="payload.media" />
        <div class="details">
          <basics ref="basics" v-bind="payload" :category="payload.categoryId" />
          <pricing ref="pricing" v-bind="payload.pricing" />
          <validity-and-availability ref="validityAndAvailability" v-bind="payload.validity" />
          <business-details ref="businessDetails" v-bind="payload.business" :country="payload.countryId" :subregion="payload.subregionId" />
          <conditions-and-limitations ref="conditionsAndLimitations" v-bind="payload.conditions" />
        </div>
        <div>
          <button class="btn btn-danger" @click="handleOnClickDelete">Delete</button>
        </div>
      </div>
    </div>
  </div>
  <div class="error" v-if="error">{{ error }}</div>
</template>

<script setup lang="ts">
import { deleteOffer, getOfferMetadata } from '@/domain/offers';
import Basics from '@/views/offers/details/components/basics/index.vue';
import BusinessDetails from '@/views/offers/details/components/business-details/index.vue';
import ConditionsAndLimitations from '@/views/offers/details/components/conditions-and-limitations/index.vue';
import Media from '@/views/offers/details/components/media/index.vue';
import Pricing from '@/views/offers/details/components/pricing/index.vue';
import ValidityAndAvailability from '@/views/offers/details/components/validity-and-availability/index.vue';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const loading = ref(false)
const error = ref(false)
const payload = ref()
const id = ref()
onMounted(() => {
  id.value = route.params.id as string
  const fn = async () => {
    try {
      loading.value = true
      payload.value = await getOfferMetadata(id.value)
      loading.value = false
    } catch (e) {
      loading.value = false
      // @ts-ignore
      error.value = e.message
      console.log(error)
    }
  }
  fn()
})
const handleOnClickDelete = () => {
  const fn = async () => {
    try {
      loading.value = true
      await deleteOffer(id.value)
      Swal.fire("Delete!", "Offer deleted successfully", "success");
      router.push('/offers')
    } catch (e) {
      loading.value = false
      // @ts-ignore
      error.value = e.message
    }
  }
  fn()
}
</script>

<style scoped>
.details {
  pointer-events: none;
}
</style>
