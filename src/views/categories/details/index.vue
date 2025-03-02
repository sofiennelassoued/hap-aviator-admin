<template>
  <div class="card">
    <div class="card-body">
      <div v-if="!loading && payload">
        <h1>{{ payload.label }}</h1>
        <p>Position: {{ payload.position }}</p>
        <div>
          <iconify-icon class="icon-lg" :icon="'mdi:' + payload.icon"></iconify-icon>
        </div>
        <div class="my-3"></div>
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

import { getCategoryMetadata, deleteCategory } from '@/domain/categories';
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
      payload.value = await getCategoryMetadata(id.value)
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
      await deleteCategory(id.value)
      Swal.fire("Delete!", "Category deleted successfully", "success");
      router.push('/categories')
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
.icon-lg {
  font-size: xx-large;
}
</style>
