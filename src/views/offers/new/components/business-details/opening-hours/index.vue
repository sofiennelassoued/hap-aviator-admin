<template>
  <h6>Opening hours *</h6>
  <template :key="h" v-for="h in Object.keys(hours)">
    <div class="form-group col-md-4">
      <label :for="'input-' + h + '-opening-hour'" class="text-capitalize">{{ h }} opening hour <button
          class="btn btn-simple btn-sm text-info" type="button" @click="handleOnClickFill(h, 'opening')">Fill opening
          hours</button></label>
      <input type="time" :disabled="
        // @ts-ignore
        hours[h].isClosed === true" v-model="
          // @ts-ignore
          hours[h].opening
          " class="form-control" id="input-monday-opening-hour">
    </div>
    <div class="form-group col-md-4">
      <label :for="'input-' + h + '-closing-hour'" class="text-capitalize">{{ h }} closing hour<button
          class="btn btn-simple btn-sm text-info" type="button" @click="handleOnClickFill(h, 'closing')">Fill closing
          hours</button></label>
      <input type="time" :disabled="
        // @ts-ignore
        hours[h].isClosed === true" v-model="
          // @ts-ignore
          hours[h].closing
          " class="form-control" id="input-monday-closing-hour">
    </div>
    <div class="form-group col-md-2">
      <label class="text-capitalize" v-show="
        // @ts-ignore
        hours[h].isClosed === false">{{ h }} is open</label>
      <label class="text-capitalize" v-show="
        // @ts-ignore
        hours[h].isClosed === true">{{ h }} is closed</label>
      <button type="button" class="btn btn-outline-danger btn-sm mt-2" v-show="
        // @ts-ignore
        hours[h].isClosed === false" @click="handleOnClickToggleClosed(h)">
        Set closed</button>
      <button type="button" class="btn btn-outline-success btn-sm mt-2" v-show="
        // @ts-ignore
        hours[h].isClosed === true" @click="handleOnClickToggleClosed(h)">Set open</button>
    </div>
    <div class="form-group col-md-2">
      <label class="text-capitalize">Reset {{ h }}</label>
      <div>
        <button type="button" class="btn btn-outline-warning btn-sm mt-2" @click="handleOnClickReset(h)">Reset</button>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { reactive, toRaw } from 'vue';
const hours = reactive({
  monday: {
    opening: "",
    closing: "",
    isClosed: false
  },
  tuesday: {
    opening: "",
    closing: "",
    isClosed: false
  },
  wednesday: {
    opening: "",
    closing: "",
    isClosed: false
  },
  thursday: {
    opening: "",
    closing: "",
    isClosed: false
  },
  friday: {
    opening: "",
    closing: "",
    isClosed: false
  },
  saturday: {
    opening: "",
    closing: "",
    isClosed: false
  },
  sunday: {
    opening: "",
    closing: "",
    isClosed: false
  },
})
const handleOnClickFill = (day: string, type: 'opening' | 'closing') => {
  Object.keys(hours).forEach(k => {
    // @ts-ignore
    hours[k][type] = hours[day][type]
  })
}
const handleOnClickToggleClosed = (day: string) => {
  // @ts-ignore
  hours[day].isClosed = !hours[day].isClosed
}
const handleOnClickReset = (day: string) => {
  // @ts-ignore
  hours[day].opening = ''
  // @ts-ignore
  hours[day].closing = ''
}
defineExpose({
  hours: toRaw(hours)
})
</script>

<style scoped></style>
