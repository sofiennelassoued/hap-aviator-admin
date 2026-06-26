<template>
  <div>
    <country-picker @select="handleOnSelectCountry" />
    <country-region-picker :country-id="countryId" :disabled="!countryId" @select="handleOnSelectCountryRegion" />

  </div>
</template>

<script setup lang="ts">
import CountryPicker from "@/components/miscs/forms/country-picker/index.vue"
import CountryRegionPicker from "@/components/miscs/forms/country-region-picker/index.vue"
import { ref } from "vue";
const countryId = ref()
const handleOnSelectCountry = (v: string) => {
  countryId.value = v
}
const handleOnSelectCountryRegion = (v: string) => {
  console.info("Region: ", v)
}
</script>

<style scoped></style>
