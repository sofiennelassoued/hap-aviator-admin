<template>
  <div class="card m-h">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5>Ages
          <small v-show="isViews">(Views)</small>
          <small v-show="!isViews">(Visits)</small>
        </h5>
        <div class="cursor-pointer" @click="handleOnClickToggleIsViews">Toggle</div>
      </div>
      <div ref="el"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref, watch } from 'vue';
import ApexCharts from 'apexcharts'
import { OPTIONS } from '.';
const { views, visits } = defineProps(['views', 'visits'])
const isViews = ref(true)
const el = ref(null)
const chart = ref();
const isDisplayed = ref(false)
const process = () => {
  isDisplayed.value = false
  chart.value = null
  const arr = [0, 0, 0, 0, 0, 0]
  let source = isViews.value === true ? views : visits
  Object.keys(source).forEach(i => {
    const k = Number(i)
    if (k >= 16 && k <= 25) {
      arr[0] = source[i]
    } else if (k >= 26 && k <= 35) {
      arr[1] = source[i]
    } else if (k >= 36 && k <= 45) {
      arr[2] = source[i]
    } else if (k >= 46 && k <= 55) {
      arr[3] = source[i]
    } else if (k >= 55) {
      arr[4] = source[i]
    } else if (i === 'unknown') {
      arr[5] = source[k]
    }
  })
  setTimeout(() => {
    isDisplayed.value = true
    chart.value = new ApexCharts(el.value, { ...OPTIONS, series: [{ data: arr }] });
    chart.value.render();
  }, 500);
}
onMounted(() => {
  if (el.value) {
    process()
  }
})
watch(() => [views, visits], () => {
  process()
});
const handleOnClickToggleIsViews = () => {
  isViews.value = !isViews.value
  process()
}
</script>

<style scoped>
.m-h {
  height: 320px;
}
</style>
