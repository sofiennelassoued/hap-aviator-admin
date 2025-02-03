<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/gifts">Gifts</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Details</li>
    </ol>
  </nav>
  <!-- /Breadcrumb -->
  <div class="row gutters-sm" v-if="!loading && payload">
    <div class="col-md-4 mb-3">
      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-column align-items-center text-center">
            <img :src="payload.image" alt="Admin" width="150">
            <div class="mt-3">
              <h4>{{ payload.label }}</h4>
            </div>
            <button class="btn btn-danger" @click="handleOnClickDelete">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Country</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {{ payload.countryId }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Status</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {{ payload.status }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Label</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {{ payload.label }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Type</h6>
            </div>
            <div class="col-sm-9">
              {{ payload.type }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Payload</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {{ payload.payload }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Points</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {{ payload.points }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Hearts</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {{ payload.hearts }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Description</h6>
            </div>
            <div class="col-sm-9 text-secondary">
              {{ payload.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="vh-100 d-flex justify-content-center align-items-center" v-if="loading">
    <div class="text-center">
      <div class="spinner-border" role="status">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { deleteGift, getGiftMetadata } from '@/domain/gifts';
import Swal from 'sweetalert2';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
const loading = ref(false)
const payload = ref()
const id = ref()
onMounted(() => {
  id.value = route.params.id as string
  const fn = async () => {
    try {
      loading.value = true
      payload.value = await getGiftMetadata(id.value)
      loading.value = false
    } catch (error) {
      loading.value = false
      console.log(error)
    }
  }
  fn()
})
const handleOnClickDelete = () => {
  const fn = async () => {
    try {
      loading.value = true
      await deleteGift(id.value)
      Swal.fire("Delete!", "Gift deleted successfully", "success");
      router.push('/gifts')
    } catch (e) {
      loading.value = false
      // @ts-ignore
      error.value = e.message
    }
  }
  if (confirm('Are you sure to delete the gift?')) {
    fn()
  }
}
</script>

<style scoped></style>
