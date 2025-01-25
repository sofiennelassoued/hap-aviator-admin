<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <upload />
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <label for="input-title" class="form-label">Title</label>
              <input type="text" class="form-control" id="input-title" aria-describedby="text-title"
                placeholder="Ex: Black Friday Campaign">
              <div id="help-title" class="form-text">Add a descriptive title that you can remember</div>
              <div class="mb-3">
                <label for="input-title" class="form-label">Action</label>
                <input type="text" class="form-control" id="input-title" aria-describedby="text-title"
                  placeholder="Ex: Take your chance">
                <div id="help-title" class="form-text">Add a engaging action</div>
              </div>
              <div class="mb-3">
                <label for="input-title" class="form-label">Link</label>
                <input type="text" class="form-control" id="input-title" aria-describedby="text-title"
                  placeholder="Ex: https://www.example.com/my-product">
                <div id="help-title" class="form-text">Add the URL of the action</div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Upload from '@/components/miscs/forms/upload/index.vue'
const router = useRouter()
const handleSubmit = () => {
  router.push("/")
}
</script>

<style scoped></style>
