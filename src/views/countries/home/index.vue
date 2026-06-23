<template>
  <!-- Breadcrumb -->
  <div class="d-flex justify-content-between">
    <nav aria-label="breadcrumb" class="main-breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Countries</li>
      </ol>
    </nav>
  </div>
  <div class="album py-5 bg-body-tertiary" v-if="!loading && items.length > 0">
    <div class="container">
      <div class="row">
        <div class="card p-3">
          <div class="d-flex justify-content-between">
            <h3>Countries
              <router-link to="countries/new">
                <button class="btn btn-secondary btn-sm">Create</button>
              </router-link>
            </h3>
            <div>
              <search :items="items" @filtered="handleOnFiltered" />
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Flag</th>
                <th scope="col">ID</th>
                <th scope="col">Label</th>
                <th scope="col">Position</th>
                <th scope="col">Enabled</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <th scope="row"><img class="image" :src="item.flag" /></th>
                <td>{{ item.id }}</td>
                <td>{{ item.label }}</td>
                <td>{{ item.position }}</td>
                <td>
                  <span class="badge bg-success" v-if="item.enabled === true">Yes</span>
                  <span class="badge bg-danger" v-else-if="item.enabled === false">No</span>
                </td>
                <td>
                  <router-link type="button" class="btn btn-sm btn-outline-primary mx-2"
                    :to="'/countries/' + item.id">View</router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="vh-100 d-flex justify-content-center align-items-center" v-if="!loading && items.length === 0">
    <div class="text-center">
      <p>No items</p>
      <router-link type="button" class="btn btn-sm btn-outline-primary mx-2" :to="'/countries/new'">Create</router-link>
    </div>
  </div>
  <div class="vh-100 d-flex justify-content-center align-items-center" v-if="loading">
    <div class="text-center">
      <div class="spinner-border" role="status">
      </div>
    </div>
  </div>
</template>

<script setup>
import Search from '@/components/miscs/forms/search/index.vue';
import { listCountries } from '@/domain/countries';
import { onMounted, ref } from 'vue';
const loading = ref(false)
const items = ref([])
onMounted(() => {
  const fn = async () => {
    try {
      loading.value = true
      items.value = await listCountries()
      loading.value = false
    } catch (error) {
      loading.value = false
      console.log(error)
    }
  }
  fn()
})
const handleOnFiltered = (i) => {
  items.value = i
}
</script>

<style lang="css" scoped>
.image {
  width: 64px;
}
</style>
