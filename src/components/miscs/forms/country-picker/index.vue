<template>
  <select class="form-select" aria-label="Select country" :disabled="disabled" :required="required"
    @change="handleOnChange">
    <option disabled :selected="!selected">Select country</option>
    <option :key="i.id" :value="i.id" :selected="selected === i.id" v-for="i in items">{{ i.label }}</option>
  </select>
</template>

<script setup lang="ts">
import { listCountries } from '@/domain/countries';
import { type DocumentData } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
const { selected, disabled, required } = defineProps(['selected', 'disabled', 'required'])
const loading = ref(false)
const items = ref<DocumentData>([])
onMounted(() => {
  const fn = async () => {
    try {
      loading.value = true
      items.value = await listCountries()
      items.value = items.value.filter((i: DocumentData) => i.enabled === true)
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
