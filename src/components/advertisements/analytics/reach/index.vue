<template>
  <div class="card w-100">
    <div class="card-body">
      <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
        <div class="mb-3 mb-sm-0">
          <h5 class="card-title fw-semibold">Reach of the month</h5>
        </div>
        <div>
          <select class="form-select">
            <option :value="2024">2024</option>
            <option :value="2023">2023</option>
            <option :value="2022">2022</option>
            <option :value="2021">2021</option>
          </select>
        </div>
      </div>
      <div ref="el"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref, watch } from 'vue';
import ApexCharts from 'apexcharts'
import { getDaysInMonth } from '@/utils/dates';
import { OPTIONS } from '.';
const { views, visits } = defineProps(['views', "visits"])

const el = ref(null);
const chart = ref();
const process = () => {
  const days = getDaysInMonth(new Date().getMonth(), new Date().getFullYear())
  const viewsData = []
  const visitsData = []
  days.forEach(d => {
    const date = new Date()
    const year = date.getFullYear()
    const month = ('0' + (new Date().getMonth() + 1)).slice(-2)
    const day = ('0' + d).slice(-2)
    const dateString = `${year}-${month}-${day}`
    viewsData.push({
      x: d,
      y: views[dateString] ?? 0
    })
    visitsData.push({
      x: d,
      y: visits[dateString] ?? 0
    })
  });
  const series = [{ ...OPTIONS.series[0], data: viewsData }, { ...OPTIONS.series[1], data: visitsData }]
  return series
}
onMounted(() => {
  if (el.value) {
    const series = process()
    chart.value = new ApexCharts(el.value, { ...OPTIONS, series });
    chart.value.render();
  }
})
watch(() => [views, visits], () => {
  const series = process()
  chart.value.updateSeries(series)
});
</script>

<style scoped></style>
