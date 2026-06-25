<template>
  <div class="card">
    <div class="card-body">
      <div v-if="!loading && payload">
        <h1>{{ payload.label }}</h1>
        <p>ID: {{ regionId }}</p>
        <p>Position: {{ payload.position }}</p>
        <p>Enabled:
          <span class="badge bg-success" v-if="payload.enabled === true">Yes</span>
          <span class="badge bg-danger" v-else-if="payload.enabled === false">No</span>
        </p>
        <p>Country ID: {{ countryId }} <router-link :to="'/countries/' + countryId">View</router-link>
        </p>
        <button class="btn btn-danger" @click="handleOnClickDelete">Delete</button>
      </div>
      <div class="vh-100 d-flex justify-content-center align-items-center" v-if="loading">
        <div class="text-center">
          <div class="spinner-border" role="status">
          </div>
        </div>
      </div>
      <div class="alert alert-danger my-1" v-if="error">{{ error }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { deleteRegion, findRegion } from '@/domain/regions';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const loading = ref(false)
const error = ref('')
const payload = ref()
const countryId = ref()
const regionId = ref()
onMounted(() => {
  countryId.value = route.params.countryId as string
  regionId.value = route.params.regionId as string
  const fn = async () => {
    try {
      loading.value = true
      const { data } = await findRegion({ id: regionId.value })
      if (data?.findRegion)
        payload.value = data.findRegion
      loading.value = false
    } catch (e) {
      loading.value = false
      // @ts-ignore
      error.value = e.message
      console.log(e)
    }
  }
  fn()
})
const handleOnClickDelete = () => {
  const fn = async () => {
    try {
      loading.value = true
      await deleteRegion()
      Swal.fire("Delete!", "Region deleted successfully", "success");
      router.push('/countries/' + countryId + '/regions')
    } catch (e) {
      loading.value = false
      // @ts-ignore
      error.value = e.message
    }
  }
  if (confirm('Are you sure to delete the category?')) {
    fn()
  }
}
</script>

<style scoped>
.image {
  width: 128px;
}
</style>
