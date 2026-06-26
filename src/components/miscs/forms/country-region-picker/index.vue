<template>
  <select class="form-select" aria-label="Select country region" :disabled="disabled" :required="required"
    @change="handleOnChange">
    <option disabled :selected="!selected">Select country region</option>
    <option :key="i.id" :value="i.id" :selected="selected === i.id" v-for="i in items">{{ i.label }}</option>
  </select>
</template>

<script setup lang="ts">
import { listRegions } from '@/domain/regions';
import { type DocumentData } from 'firebase/firestore';
import { onMounted, ref, watch } from 'vue';
const { countryId, selected, disabled, required } = defineProps(['countryId', 'selected', 'disabled', 'required'])
const loading = ref(false)
const items = ref<DocumentData>([])
const retrieve = async () => {
  try {
    loading.value = true
    const { data } = await listRegions({})
    if (data?.listRegions.items)
      items.value = data?.listRegions.items
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
  emit('select', (e.target as HTMLInputElement).value)
}
</script>

<style scoped></style>
