<template>
  <!-- Breadcrumb -->
  <div class="d-flex justify-content-between">
    <nav aria-label="breadcrumb" class="main-breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Offer Validations</li>
      </ol>
    </nav>
  </div>
  <div class="album py-5 bg-body-tertiary" v-if="!loading && items.length > 0">
    <div class="container">
      <div class="row">
        <div class="card p-3">
          <div class="d-flex justify-content-between">
            <h1>Offer validations</h1>
            <div>
              <search :items="allItems" @filtered="handleOnFiltered" />
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Offer ID</th>
                <th scope="col">Partner ID</th>
                <th scope="col">User ID</th>
                <th scope="col">Created At</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id" class="ooo">
                <td>{{ item.id }}</td>
                <td><router-link :to="'/offers/' + item.offerId">{{ item.offerId }}</router-link></td>
                <td><router-link :to="'/partners/' + item.partnerId">{{ item.partnerId }}</router-link></td>
                <td><router-link :to="'/users/' + item.userId">{{ item.userId }}</router-link></td>
                <td>{{ item.createdAt }}</td>
                <td>
                  <span class="badge bg-secondary" v-if="item.status === 'pending'">Pending</span>
                  <span class="badge bg-success" v-else-if="item.status === 'validated'">Validated</span>
                  <span class="badge bg-danger" v-else-if="item.status === 'expired'">Expired</span>
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
</template>

<script setup>
import Search from '@/components/miscs/forms/search/index.vue';
import { getOfferValidations } from '@/domain/offer-validations';
import { onMounted, ref } from 'vue';
const loading = ref(false)
const allItems = ref([])
const items = ref([])
onMounted(() => {
  const fn = async () => {
    try {
      loading.value = true
      allItems.value = await getOfferValidations()
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
