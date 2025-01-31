<template>
  <select class="form-select" aria-label="Select offer category" required @change="handleOnChange">
    <option disabled :selected="!selected">Select offer category</option>
    <option :key="i.id" :value="i.id" :selected="selected === i.id" v-for="i in items">{{ i.label }}</option>
  </select>
</template>

<script setup lang="ts">
import { getCategories } from '@/domain/categories';
import { type DocumentData } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
const { selected } = defineProps(['selected'])
const loading = ref(false)
const items = ref<DocumentData>([])
onMounted(() => {
  const fn = async () => {
    try {
      loading.value = true
      items.value = await getCategories()
      loading.value = false
    } catch (error) {
      loading.value = false
      console.log(error)
    }
  }
  fn()
})
const emit = defineEmits(['select'])
const handleOnChange = (e: Event) => {
  emit('select', (e.target as HTMLInputElement).value)
}
</script>

<style scoped></style>
