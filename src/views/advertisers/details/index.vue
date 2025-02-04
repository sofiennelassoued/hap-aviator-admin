<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/advertisers">Advertisers</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Profile</li>
    </ol>
  </nav>
  <!-- /Breadcrumb -->
  <div class="row gutters-sm" v-if="!loading && payload">
    <div class="col-md-5 mb-3">
      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-column align-items-center text-center">
            <img :src="payload.image" alt="Admin" class="" width="150">
            <div class="mt-3">
              <h4>{{ payload.name }}</h4>
              <router-link class="btn btn-primary" :to="'/advertisements?advertiser=' + id">View advertisements</router-link>
              <span class="mx-1"></span>
              <router-link class="btn btn-secondary" :to="'/advertisements/new?advertiser=' + id">Create advertisement</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-7">
      <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Name</h6>
            </div>
            <div class="col-sm-9">
              {{ payload.name }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Email</h6>
            </div>
            <div class="col-sm-9">
              <a class="text-primary" :href="'mailto:' + payload.email">{{ payload.email }}</a>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Link</h6>
            </div>
            <div class="col-sm-9">
              <a :href="payload.link" target="_blank" class="text-primary">{{ payload.link }}</a>
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
import { getAdvertiserMetadata } from '@/domain/advertisers';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const loading = ref(false)
const payload = ref()
const id = ref()
onMounted(() => {
  id.value = route.params.id as string
  const fn = async () => {
    try {
      loading.value = true
      payload.value = await getAdvertiserMetadata(id.value)
      loading.value = false
    } catch (error) {
      loading.value = false
      console.log(error)
    }
  }
  fn()
})
</script>

<style scoped></style>
