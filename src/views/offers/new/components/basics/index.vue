<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Basics</h3>
        <div class="form-group col-md-6">
          <label for="input-title">Offer title *</label>
          <input type="text" class="form-control" id="input-title" placeholder="Ex: Pizza 4 seasons" required
            v-model="title">
        </div>
        <div class="form-group col-md-6">
          <label for="input-category">Offer category *</label>
          <category-picker :selected="props.category" required @select="handleOnSelectCategory" />
        </div>
        <div class="form-group col-md-12">
          <label for="input-description">Offer description *</label>
          <textarea class="form-control" id="input-description" placeholder="Ex: Lorem ipsum"
            required v-model="description"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import CategoryPicker from "./category-picker/index.vue"
const props = defineProps(['title', 'description', 'category'])
const title = ref()
const description = ref()
const category = ref()
onMounted(() => {
  title.value = props.title
  description.value = props.description
  category.value = props.category
})
const emit = defineEmits(['category-select'])
const handleOnSelectCategory = (v: string) => {
  category.value = v
}
defineExpose({ title, description, category })
</script>

<style scoped></style>
