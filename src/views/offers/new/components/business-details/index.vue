<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Business Details</h3>
        <div class="form-group col-md-6">
          <label for="input-business-name">Business name *</label>
          <input type="text" class="form-control" id="input-business-name" placeholder="Ex: Happy Pizzas"
            v-model="name">
        </div>
        <div class="form-group col-md-6">
          <label for="input-business-representative">Business representative</label>
          <input type="text" class="form-control" id="input-business-representative" placeholder="Ex: Bob Black"
            v-model="representative">
        </div>
        <div class="form-group col-md-6">
          <label for="input-email">Business country</label>
          <country-picker :required="true" :selected="country" @select="handleOnCountrySelect" />
        </div>
        <div class="form-group col-md-6">
          <label for="input-phone">Business state</label>
          <country-state-picker :required="true" :country-id="country" :selected="state"
            @select="handleOnStateSelect" />
        </div>
        <div class="form-group col-md-6">
          <label for="input-business-city">City *</label>
          <input type="text" class="form-control" id="input-business-city" placeholder="Ex: Happy Town" v-model="city">
        </div>
        <div class="form-group col-md-6">
          <label for="input-business-zip">Zip code</label>
          <input type="text" class="form-control" id="input-business-zip" placeholder="Ex: 12345" v-model="zip">
        </div>
        <div class="form-group col-md-6">
          <label for="input-address">Business postal address *</label>
          <textarea class="form-control" id="input-address" placeholder="Ex: 123 Abc St, XYZ, UVW - 12345"
            v-model="address" required></textarea>
        </div>
        <div class="form-group col-md-6 mt-2">
          <div class="d-flex justify-content-between align-items-center">
            <label for="input-location">Business location *</label>
            <small><a target="_blank" v-if="location" :href="location">Visit</a></small>
          </div>
          <input type="text" class="form-control" id="input-location"
            placeholder="Ex: https://www.google.com/maps/place/Eiffel+Tower/data=!4m2!3m1!1s0x0:0x8ddca9ee380ef7e0?sa=X&ved=1t:2428&ictx=111"
            v-model="location" required>
          <div id="help-input-location" class="form-text">Put Google Maps address</div>
        </div>
        <div class="form-group col-md-6">
          <label for="input-email">Business contact email</label>
          <input type="email" class="form-control" id="input-email" placeholder="Ex: contact@happy-pizzas.com"
            v-model="email">
        </div>
        <div class="form-group col-md-6">
          <label for="input-phone">Business contact phone</label>
          <input type="text" class="form-control" id="input-phone" placeholder="Ex: +1 234 567 890" v-model="phone">
        </div>
        <div class="form-group col-md-6">
          <label for="input-phone">Ameneties</label>
          <ameneties-picker :required="true" :selected="ameneties"
            @select="handleOnAmenetiesSelect" />
        </div>
        <div class="mt-4"></div>
        <opening-hours ref="openingHours" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CountryStatePicker from '@/components/miscs/forms/country-state-picker/index.vue'
import CountryPicker from '@/components/miscs/forms/country-picker/index.vue';
import AmenetiesPicker from '@/components/miscs/forms/ameneties-picker/index.vue';
import OpeningHours from './opening-hours/index.vue';
const props = defineProps(['name', 'representative', 'city', 'zip', 'address', 'location', 'email', 'phone', 'country', 'state', 'ameneties'])

// Components
const openingHours = ref()

const name = ref()
const representative = ref()
const country = ref()
const state = ref()
const city = ref()
const zip = ref()
const address = ref()
const location = ref()
const email = ref()
const phone = ref()
const ameneties = ref()
const hours = ref()
onMounted(() => {
  name.value = props.name
  representative.value = props.representative
  city.value = props.city
  zip.value = props.zip
  address.value = props.address
  location.value = props.location
  email.value = props.email
  phone.value = props.phone
  ameneties.value = props.ameneties
  if (openingHours && openingHours.value && openingHours.value.hours)
    hours.value = openingHours.value.hours

  // TODO: Update this to use the correct country
  const SELECTED_COUNTRY = 'sau'
  country.value = SELECTED_COUNTRY

  // TODO: Update this to use the correct state
  state.value = props.state
})
const handleOnCountrySelect = (v: string) => {
  country.value = v
}
const handleOnStateSelect = (v: string) => {
  state.value = v
}
const handleOnAmenetiesSelect = (v: string[]) => {
  ameneties.value = v
}
defineExpose({ name, representative, city, zip, address, location, email, phone, hours, country, state })
</script>

<style scoped></style>
