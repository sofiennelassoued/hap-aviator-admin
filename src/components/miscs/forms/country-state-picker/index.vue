<template>
  <select class="form-select" aria-label="Select country state" :disabled="disabled" :required="required"
    @change="handleOnChange">
    <option disabled :selected="!selected">Select country state</option>
    <option :key="i.id" :disabled="i.enabled === false" :value="i.id" :selected="selected === i.id" v-for="i in items">
      {{ i.label }}</option>
  </select>
</template>

<script setup lang="ts">
import { getStates } from '@/domain/states';
import { type DocumentData } from 'firebase/firestore';
import { onMounted, ref, watch } from 'vue';
const { countryId, selected, disabled, required } = defineProps(['countryId', 'selected', 'disabled', 'required'])
const loading = ref(false)
const items = ref<DocumentData>([])
const retrieve = async () => {
  try {
    loading.value = true
    items.value = await getStates(countryId)
    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error)
  }
}
onMounted(() => {
  if (countryId) {
    retrieve()
  }
})
watch(() => countryId, (newValue, oldValue) => {
  if (countryId) {
    retrieve()
  }
});
const emit = defineEmits(['select'])
const handleOnChange = (e: Event) => {
  const id = ((e.target as HTMLInputElement).value)
  const { regionId } = items.value.find((i: DocumentData) => i.id === id)
  emit('select', { id, regionId })
}
</script>

<style scoped></style>
