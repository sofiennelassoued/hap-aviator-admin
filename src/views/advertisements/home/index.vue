<template>
  <!-- Breadcrumb -->
  <div class="d-flex justify-content-between">
    <nav aria-label="breadcrumb" class="main-breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page" v-if="partner">Advertisements of partner</li>
        <li class="breadcrumb-item active" aria-current="page" v-else>All Advertisements</li>
      </ol>
    </nav>
    <div>
      <search :items="allItems" @filtered="handleOnFiltered" />
    </div>
  </div>
  <div class="album py-5 bg-body-tertiary" v-if="!loading && items.length > 0">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col-md-3" v-for="item in items" :key="item.id">
          <div class="card shadow-sm">
            <img class="media" :src="item.image" />
            <div class="card-body">
              <p class="card-text h5">{{ item.title }}</p>
              <p class="card-text">{{ item.x }}</p>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <div class="btn-group">
                  <router-link type="button" class="btn btn-sm btn-outline-secondary"
                    :to="'/advertisements/' + item.id">View</router-link>
                </div>
                <small class="text-body-secondary"><a :href="item.link" target="_blank">Visit
                    website</a></small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="vh-100 d-flex justify-content-center align-items-center" v-if="!loading && items.length === 0">
    <div class="text-center">
      <p>No items</p>
      <router-link type="button" class="btn btn-sm btn-outline-primary mx-2"
        :to="'/advertisements/new'">Create</router-link>
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
import { getAdvertisements, getAdvertisementsByPartner } from '@/domain/advertisements';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const { partner } = route.query
const loading = ref(false)
const allItems = ref([])
const items = ref([])
onMounted(() => {
  const fn = async () => {
    try {
      loading.value = true
      if (partner) {
        allItems.value = await getAdvertisementsByPartner(partner)
      } else {
        allItems.value = await getAdvertisements()
      }
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
.media {
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}
</style>
