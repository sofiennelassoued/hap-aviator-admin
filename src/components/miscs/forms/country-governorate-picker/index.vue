<template>
  <select class="form-select" aria-label="Select country governorate" :disabled="disabled" :required="required"
    @change="handleOnChange">
    <option disabled :selected="!selected">Select country governorate</option>
    <option :key="i.id" :value="i.id" :selected="selected === i.id" v-for="i in items">{{ i.label }}</option>
  </select>
</template>

<script setup lang="ts">
import { getGovernorates } from '@/domain/governorates';
import { type DocumentData } from 'firebase/firestore';
import { onMounted, ref, watch } from 'vue';
const { countryId, selected, disabled, required } = defineProps(['countryId', 'selected', 'disabled', 'required'])
const loading = ref(false)
const items = ref<DocumentData>([])
const retrieve = async () => {
  try {
    loading.value = true
    items.value = await getGovernorates(countryId)
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
