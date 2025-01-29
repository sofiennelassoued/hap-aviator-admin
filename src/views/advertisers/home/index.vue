<template>
  <!-- Breadcrumb -->
  <div class="d-flex justify-content-between align-items-center">
    <nav aria-label="breadcrumb" class="main-breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Advertisers</li>
      </ol>
    </nav>
    <div>
      <search :items="allItems" @filtered="handleOnFiltered" />
    </div>
  </div>
  <div class="album py-5 bg-body-tertiary" v-if="!loading && items.length > 0">
    <div class="container">
      <div class="row">
        <div class="card p-3">
          <div class="d-flex justify-content-between">
            <h3>Advertisers</h3>
            <div>
              <search :items="allItems" @filtered="handleOnFiltered" />
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Logo</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <th scope="row"><img class="image" :src="item.image" /></th>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>
                  <router-link type="button" class="btn btn-sm btn-outline-primary mx-2"
                    :to="'/advertisers/' + item.id">View</router-link>
                  <router-link type="button" class="btn btn-sm btn-outline-secondary"
                    :to="'/advertisements/new?partner=' + item.id">Create advertisement</router-link>
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
    </div>
  </div>
  <div class="vh-100 d-flex justify-content-center align-items-center" v-if="loading">
    <div class="text-center">
      <div class="spinner-border" role="status">
      </div>
    </div>
  </div>
  <fab link="/advertisers/new" />
</template>

<script setup>
import Fab from '@/components/miscs/buttons/fab/index.vue';
import Search from '@/components/miscs/forms/search/index.vue';
import { getAdvertisers } from '@/domain/advertisers';
import { onMounted, ref } from 'vue';
const loading = ref(false)
const allItems = ref([])
const items = ref([])
onMounted(() => {
  const fn = async () => {
    try {
      loading.value = true
      allItems.value = await getAdvertisers()
      items.value = allItems.value;
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
  height: 32px;
  width: 32px;
  border-radius: 16px;
}
</style>
