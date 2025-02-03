<template>
  <div class="card">
    <div class="card-body">
      <div v-if="!loading && payload">
        <h1>{{ payload.label }}</h1>
        <p>ID: {{ stateId }}</p>
        <p>Position: {{ payload.position }}</p>
        <p>Enabled:
          <span class="badge bg-success" v-if="payload.enabled === true">Yes</span>
          <span class="badge bg-danger" v-else-if="payload.enabled === false">No</span>
        </p>
        <p>Region ID: {{ payload.regionId }} <router-link
            :to="'/countries/' + payload.countryId + '/regions/' + payload.regionId">View</router-link></p>
        <p>Country ID: {{ payload.countryId }} <router-link :to="'/countries/' + payload.countryId">View</router-link>
        </p>
        <button class="btn btn-danger" @click="handleOnClickDelete">Delete</button>
      </div>
      <div class="vh-100 d-flex justify-content-center align-items-center" v-if="loading">
        <div class="text-center">
          <div class="spinner-border" role="status">
          </div>
        </div>
      </div>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { getStateMetadata, deleteState } from '@/domain/states';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const loading = ref(false)
const error = ref('')
const payload = ref()
const countryId = route.params.countryId as string
const stateId = route.params.stateId as string
onMounted(() => {
  const fn = async () => {
    try {
      loading.value = true
      payload.value = await getStateMetadata(stateId)
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
      await deleteState(stateId)
      Swal.fire("Delete!", "State deleted successfully", "success");
      router.push('/countries/' + countryId + '/states')
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
