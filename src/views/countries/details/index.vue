<template>
  <!-- Breadcrumb -->
  <div class="d-flex justify-content-between">
    <nav aria-label="breadcrumb" class="main-breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item"><router-link to="/countries">Countries</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Details</li>
      </ol>
    </nav>
  </div>
  <div class="card">
    <div class="card-body">
      <div v-if="!loading && payload">
        <h1>{{ payload.label }}</h1>
        <p>ID: {{ payload.id }}</p>
        <p>Code: {{ payload.code }}</p>
        <p>Position: {{ payload.position }}</p>
        <p>Enabled:
          <span class="badge bg-success" v-if="payload.enabled === true">Yes</span>
          <span class="badge bg-danger" v-else-if="payload.enabled === false">No</span>
        </p>
        <p>Flag: <img :src="payload.flag" class="image" /></p>
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
  <div class="card" v-if="!loading && payload">
    <div class="card-body">
      <h3>Actions</h3>
      <div class="row">
        <div class="col">
          <div>
            <router-link :to="'/countries/' + payload.id + '/subregions'"><a>View subregions</a></router-link>
          </div>
          <div class="mt-3">
            <router-link :to="'/countries/' + payload.id + '/subregions/new'"><a>Create subregion</a></router-link>
          </div>
        </div>
        <div class="col">
          <div>
            <router-link :to="'/countries/' + payload.id + '/regions'"><a>View regions</a></router-link>
          </div>
          <div class="mt-3">
            <router-link :to="'/countries/' + payload.id + '/regions/new'"><a>Create region</a></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { deleteCountry, findCountry } from '@/domain/countries';
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
      const { data } = await findCountry({ id: id.value })
      payload.value = data?.findCountry
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
      await deleteCountry({ id: id.value })
      Swal.fire("Delete!", "Country deleted successfully", "success");
      router.push('/countries')
    } catch (e) {
      loading.value = false
      // @ts-ignore
      error.value = e.message
    }
  }
  if (confirm('Are you sure to delete the country?')) {
    fn()
  }
}
</script>

<style scoped>
.image {
  width: 128px;
}
</style>
