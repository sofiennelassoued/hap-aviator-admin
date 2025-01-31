<template>
  <!-- Breadcrumb -->
  <div class="d-flex justify-content-between">
    <nav aria-label="breadcrumb" class="main-breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item"><router-link to="/countries">Countries</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Governorates</li>
      </ol>
    </nav>
  </div>
  <div class="album py-5 bg-body-tertiary" v-if="!loading && items.length > 0">
    <div class="container">
      <div class="row">
        <div class="card p-3">
          <div class="d-flex justify-content-between">
            <h3>Governorates
              <router-link to="governorates/new">
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
                <th scope="col">ID</th>
                <th scope="col">Label</th>
                <th scope="col">Position</th>
                <th scope="col">Region ID</th>
                <th scope="col">Enabled</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.label }}</td>
                <td>{{ item.position }}</td>
                <td>
                  <router-link type="button" class="btn btn-sm btn-simple mx-2"
                    :to="'/countries/' + item.countryId + '/regions/' + item.regionId">View region</router-link>
                </td>
                <td>
                  <span class="badge bg-success" v-if="item.enabled === true">Yes</span>
                  <span class="badge bg-danger" v-else-if="item.enabled === false">No</span>
                </td>
                <td>
                  <router-link type="button" class="btn btn-sm btn-outline-primary mx-2"
                    :to="'/countries/' + item.countryId + '/governorates/' + item.id">View</router-link>
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
      <router-link type="button" class="btn btn-sm btn-outline-primary mx-2"
        :to="'/countries/' + id + '/governorates/new'" v-if="id">Create</router-link>
    </div>
  </div>
  <div class="vh-100 d-flex justify-content-center align-items-center" v-if="loading">
    <div class="text-center">
      <div class="spinner-border" role="status">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Search from '@/components/miscs/forms/search/index.vue';
import { getGovernorates } from '@/domain/governorates';
import { type DocumentData } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const loading = ref(false)
const items = ref<DocumentData>([])
const id = ref()
onMounted(() => {
  id.value = route.params.id as string
  const fn = async () => {
    try {
      loading.value = true
      items.value = await getGovernorates(id.value)
      loading.value = false
    } catch (error) {
      loading.value = false
      console.log(error)
    }
  }
  fn()
})
const handleOnFiltered = (i: DocumentData[]) => {
  items.value = i
}
</script>

<style lang="css" scoped>
.image {
  width: 64px;
}
</style>
