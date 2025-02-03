<template>
  <select class="form-select" aria-label="Select gift status" @change="handleOnChange">
    <option disabled :selected="!selected">Select gift status</option>
    <option :disabled="i.enabled === false" :key="i.id" :value="i.id" :selected="selected === i.id" v-for="i in items">{{
      i.label }}</option>
  </select>
</template>

<script setup lang="ts">
import { items } from './items';

const { selected } = defineProps(['selected'])
const emit = defineEmits(['select'])
const handleOnChange = (e: Event) => {
  emit('select', (e.target as HTMLInputElement).value)
}
</script>

<style scoped></style>
