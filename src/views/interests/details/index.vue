<template>
  <div class="card">
    <div class="card-body">
      <div v-if="!loading && payload">
        <h1>{{ payload.label }}</h1>
        <p>Position: {{ payload.position }}</p>
        <p>Icon: {{ payload.icon }}</p>
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

import { getInterestMetadata, deleteInterest } from '@/domain/interests';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const loading = ref(false)
const error = ref('')
const payload = ref()
const id = ref()
onMounted(() => {
  id.value = route.params.id as string
  const fn = async () => {
    try {
      loading.value = true
      payload.value = await getInterestMetadata(id.value)
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
      await deleteInterest(id.value)
      Swal.fire("Delete!", "Interest deleted successfully", "success");
      router.push('/interests')
    } catch (e) {
      loading.value = false
      // @ts-ignore
      error.value = e.message
    }
  }
  if (confirm('Are you sure to delete the interest?')) {
    fn()
  }
}
</script>

<style scoped></style>
