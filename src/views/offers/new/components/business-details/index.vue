<template>
  <div class="card">
    <div class="card-body">
      <div class="row">
        <h3>Business Details</h3>
        <div class="form-group col-md-6">
          <label for="input-business-name">Business name</label>
          <input type="text" class="form-control" id="input-business-name" placeholder="Ex: Happy Pizzas" v-model="name">
        </div>
        <div class="form-group col-md-6">
          <label for="input-business-representative">Business representative</label>
          <input type="text" class="form-control" id="input-business-representative" placeholder="Ex: Bob Black" v-model="representative">
        </div>
        <div class="form-group col-md-6">
          <div class="d-flex justify-content-between align-items-center">
            <label for="input-location">Business location</label>
            <small><a target="_blank" v-if="location" :href="location">Visit</a></small>
          </div>
          <input type="text" class="form-control" id="input-location"
            placeholder="Ex: https://www.google.com/maps/place/Eiffel+Tower/data=!4m2!3m1!1s0x0:0x8ddca9ee380ef7e0?sa=X&ved=1t:2428&ictx=111"
            v-model="location">
          <div id="help-input-location" class="form-text">Put Google Maps address</div>
        </div>
        <div class="form-group col-md-6">
          <label for="input-address">Business postal address</label>
          <textarea class="form-control" id="input-address" placeholder="Ex: 123 Abc St, XYZ, UVW - 12345" v-model="address"></textarea>
        </div>
        <div class="form-group col-md-6">
          <label for="input-email">Business contact email</label>
          <input type="text" class="form-control" id="input-email" placeholder="Ex: contact@happy-pizzas.com" v-model="email">
        </div>
        <div class="form-group col-md-6">
          <label for="input-phone">Business contact phone</label>
          <input type="text" class="form-control" id="input-phone" placeholder="Ex: +1 234 567 890" v-model="phone">
        </div>
        <div class="mt-4"></div>
        <opening-hours />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OpeningHours from './opening-hours.vue'
const name = ref()
const representative = ref()
const location = ref()
const address = ref()
const email = ref()
const phone = ref()
</script>

<style scoped></style>
