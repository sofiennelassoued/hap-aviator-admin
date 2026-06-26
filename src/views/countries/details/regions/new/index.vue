<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/countries">Countries</router-link></li>
      <li class="breadcrumb-item">Regions</li>
      <li class="breadcrumb-item active" aria-current="page">New</li>
    </ol>
  </nav>
  <div class="container">
    <form @submit.prevent="handleOnSubmit">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="card">
            <div class="card-body">
              <label for="input-label" class="form-label">Label* <small><a
                    href="https://en.wikipedia.org/wiki/List_of_states_of_Saudi_Arabia" target="_blank">Learn
                    more</a></small></label>
              <input type="text" class="form-control" id="input-label" aria-describedby="text-label"
                placeholder="Ex: Riyadh" required v-model="label">
              <div id="help-label" class="form-text">Provide the region name</div>
              <label for="input-position" class="form-label mt-3">Position*</label>
              <input type="number" class="form-control" id="input-position" aria-describedby="text-position"
                placeholder="Ex: 2" required v-model.number="position">
              <div id="help-position" class="form-text">Provide the region position</div>
              <div class="form-check form-switch mt-3">
                <input class="form-check-input" type="checkbox" role="switch" id="switch-enabled" v-model="enabled">
                <label class="form-check-label" for="switch-enabled">Region is <span>{{ enabled ? 'enabled' :
                  'disabled' }}</span> by default</label>
              </div>
              <div>
                <button type="submit" class="btn btn-primary mt-4" :disabled="loading">
                  <span v-if="!loading">Submit</span>
                  <div class="spinner-grow text-light spinner-grow-sm" role="status" v-else>
                  </div>
                </button>
                <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { createRegion } from '@/domain/regions';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const label = ref()
const position = ref()
const loading = ref<boolean>(false)
const error = ref<string>('')
const enabled = ref<boolean>(false)
const handleOnSubmit = () => {
  const fn = async () => {
    try {
      const id = route.params.id as string
      if (!id) {
        throw "ID is not provided"
      }
      loading.value = true
      error.value = ""
      const metadata = {
        label: label.value,
        position: position.value,
        enabled: enabled.value,
        countryId: id,
        createdAt: new Date().toISOString()
      }
      const metadata2 = {
        label: label.value,
        countryId: id,
      }
      const { data } = await createRegion(metadata2)
      loading.value = false
      Swal.fire({
        title: "Region created",
        text: "What do you want to do next?",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "View details",
        cancelButtonText: "View all",
      }).then(({ isConfirmed, isDismissed }) => {
        if (isConfirmed && data?.adminCreateRegion.id) {
          router.push(data?.adminCreateRegion.id);
        } else if (isDismissed) {
          router.push({
            path: '/countries/' + id + '/regions'
          })
        }
      });
    } catch (e) {
      console.log(e)
      loading.value = false
      // @ts-ignore
      error.value = e.message
    }
  }
  fn()
}
</script>

<style scoped></style>
