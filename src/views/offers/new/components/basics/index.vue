<template>

  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Basics</h3>
        <div class="form-group col-md-6">
          <label for="input-title">Offer title</label>
          <input type="text" class="form-control" id="input-title" placeholder="Ex: Pizza 4 seasons">
        </div>
        <div class="form-group col-md-6">
          <label for="input-category">Offer category</label>
          <category-picker :selected="selectedCategory" @select="handleOnSelectCategory" />
        </div>
        <div class="form-group col-md-12">
          <label for="input-description">Offer description</label>
          <textarea class="form-control" id="input-description" placeholder="Ex: Lorem ipsum"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryPicker from "./category-picker/index.vue"
defineProps({
  selectedCategory: String
})
const emit = defineEmits(['category-select'])
const handleOnSelectCategory = (v: string) => {
  console.log(v)
}
</script>

<style scoped></style>
