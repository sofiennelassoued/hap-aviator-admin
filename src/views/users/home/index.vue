<template>
  <!-- Breadcrumb -->
  <div class="d-flex justify-content-between">
    <nav aria-label="breadcrumb" class="main-breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Users</li>
      </ol>
    </nav>
  </div>
  <div class="album py-5 bg-body-tertiary" v-if="!loading && items.length > 0">
    <div class="container">
      <div class="row">
        <div class="card p-3">
          <div class="d-flex justify-content-between">
            <h1>Users</h1>
            <div>
              <search :items="allItems" @filtered="handleOnFiltered" />
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Avatar</th>
                <th scope="col">ID</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Sex</th>
                <th scope="col">Birth Date</th>
                <th scope="col">Points</th>
                <th scope="col">Hearts</th>
                <th scope="col">Created At</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <th scope="row"><img class="image" :src="item.image" /></th>
                <td>{{ item.id }}</td>
                <td>{{ item.firstName }}</td>
                <td>{{ item.lastName }}</td>
                <td>{{ item.sex }}</td>
                <td>{{ item.birthDate }}</td>
                <td>{{ item.points }}</td>
                <td>{{ item.hearts }}</td>
                <td>{{ item.createdAt }}</td>
                <td>
                  <router-link type="button" class="btn btn-sm btn-outline-primary mx-2"
                    :to="'/users/' + item.id">View</router-link>
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
import { getUsers } from '@/domain/users';
import { onMounted, ref } from 'vue';
const loading = ref(false)
const allItems = ref([])
const items = ref([])
onMounted(() => {
  const fn = async () => {
    try {
      loading.value = true
      allItems.value = await getUsers()
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
