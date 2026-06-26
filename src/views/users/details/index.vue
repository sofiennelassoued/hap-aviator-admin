<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/users">Users</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Profile</li>
    </ol>
  </nav>
  <!-- /Breadcrumb -->
  <div class="row gutters-sm" v-if="!loading && payload">
    <div class="col-md-4 mb-3">
      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-column align-items-center text-center">
            <img :src="payload.image" alt="Avatar" class="rounded-circle" width="150">
            <div class="mt-3">
              <h4>{{ payload.firstName }} {{ payload.lastName }}</h4>
              <button class="btn btn-primary" @click="handleUpdateUserPoints">Assign points</button>
              <span class="mx-1"></span>
              <button class="btn btn-secondary" @click="handleUpdateUserHearts">Assign hearts</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Points</h6>
            </div>
            <div class="col-sm-9">
              {{ payload.points }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Hearts</h6>
            </div>
            <div class="col-sm-9">
              {{ payload.hearts }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">First name</h6>
            </div>
            <div class="col-sm-9">
              {{ payload.firstName }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Last name</h6>
            </div>
            <div class="col-sm-9">
              {{ payload.lastName }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Sex</h6>
            </div>
            <div class="col-sm-9">
              {{ payload.sex }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Birth date</h6>
            </div>
            <div class="col-sm-9">
              {{ payload.birthDate }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Subregion</h6>
            </div>
            <div class="col-sm-9">
              {{ payload.subregionId }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Region</h6>
            </div>
            <div class="col-sm-9">
              {{ payload.regionId }}
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3">
              <h6 class="mb-0">Interests</h6>
            </div>
            <div class="col-sm-9">
              {{ payload.interestsIds }}
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
import { getUserMetadata, updateUserHearts, updateUserPoints } from '@/domain/users';
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
      payload.value = await getUserMetadata(id.value)
      loading.value = false
    } catch (error) {
      loading.value = false
      console.log(error)
    }
  }
  fn()
})
const handleUpdateUserPoints = () => {
  const fn = async () => {
    try {
      loading.value = true
      const points = prompt("Points to assign")
      await updateUserPoints(id.value, Number(points))
      payload.value = await getUserMetadata(id.value)
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  }
  fn()
}
const handleUpdateUserHearts = () => {
  const fn = async () => {
    try {
      loading.value = true
      const points = prompt("Hearts to assign")
      await updateUserHearts(id.value, Number(points))
      payload.value = await getUserMetadata(id.value)
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  }
  fn()
}
</script>

<style scoped></style>
