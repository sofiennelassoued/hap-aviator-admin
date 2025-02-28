<template>
  <!-- Breadcrumb -->
  <nav aria-label="breadcrumb" class="main-breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item"><router-link to="/ameneties">Ameneties</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Create</li>
    </ol>
  </nav>
  <div class="container">
    <form @submit.prevent="handleOnSubmit">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="card">
            <div class="card-body">
              <label for="input-label" class="form-label">Label*</label>
              <input type="text" class="form-control" id="input-label" aria-describedby="text-label"
                placeholder="Ex: Air conditioning" required v-model="label">
              <div id="help-label" class="form-text">Provide the amenety label</div>
              <label for="input-position" class="form-label mt-3">Position*</label>
              <input type="number" class="form-control" id="input-position" aria-describedby="text-position"
                placeholder="Ex: 2" required v-model.number="position">
              <div id="help-position" class="form-text">Provide the amenety position</div>
              <label for="input-icon" class="form-label mt-3">Icon*</label>
              <input type="text" class="form-control" id="input-icon" aria-describedby="text-icon"
                placeholder="Ex: air-conditioner" required v-model="icon">
              <div id="help-icon" class="form-text">Provide the amenety icon</div>
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
    </form>
  </div>
</template>

<script setup lang="ts">
import { createAmenetyMetadata } from '@/domain/ameneties';
import Swal from 'sweetalert2';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const position = ref()
const icon = ref()
const label = ref()
const loading = ref<boolean>(false)
const error = ref<string>('')
const handleOnSubmit = () => {
  const fn = async () => {
    try {
      loading.value = true
      error.value = ""
      const metadata = {
        label: label.value,
        position: position.value,
        icon: icon.value,
        createdAt: new Date().toISOString()
      }
      const result = await createAmenetyMetadata(metadata)
      loading.value = false
      Swal.fire({
        title: "Amenety created",
        text: "What do you want to do next?",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "View details",
        cancelButtonText: "View all",
      }).then(({ isConfirmed, isDismissed }) => {
        if (isConfirmed) {
          router.push(result.id);
        } else if (isDismissed) {
          router.push({
            name: 'ameneties'
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
