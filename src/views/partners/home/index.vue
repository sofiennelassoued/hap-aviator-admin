<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Partners</li>
    </ol>
  </nav>
  <div class="album py-5 bg-body-tertiary" v-if="!loading && items.length > 0">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="item in items" :key="item.id">
          <div class="card shadow-sm">
            <div class="d-flex justify-content-center full-width mt-2">
              <img class="image" :src="item.image" />
            </div>
            <div class="card-body">
              <p class="card-text h5">{{ item.name }}</p>
              <p class="card-text">{{ item.email }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <router-link type="button" class="btn btn-sm btn-outline-secondary"
                    :to="'/partners/' + item.id">View</router-link>
                  <router-link type="button" class="btn btn-sm btn-outline-secondary"
                    :to="'/offers/new?partner=' + item.id">Create offer</router-link>
                </div>
                <small class="text-body-secondary"><a :href="item.link" target="_blank">Visit</a></small>
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
    </div>
  </div>
</template>

<script setup>
import { getPartners } from '@/domain/partners';
import { onMounted, ref } from 'vue';
const loading = ref(false)
const items = ref([])
onMounted(() => {
  const fn = async () => {
    try {
      loading.value = true
      items.value = await getPartners()
      loading.value = false
    } catch (error) {
      loading.value = false
      console.log(error)
    }
  }
  fn()
})
</script>

<style lang="css" scoped>
.image {
  height: 128px;
  width: 128px;
  border-radius: 64px;
}
</style>