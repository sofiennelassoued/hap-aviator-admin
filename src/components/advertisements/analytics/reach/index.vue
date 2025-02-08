<template>
  <div class="card w-100">
    <div class="card-body">
      <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
        <div class="mb-3 mb-sm-0">
          <h5 class="card-title fw-semibold">Reach of the month</h5>
        </div>
        <div>
          <select class="form-select" v-if="patterns && patterns.length > 0" @change="handleOnChange">
            <option :value="p.pattern" v-for="p in patterns">{{ p.label }}</option>
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
import { generateDatePatterns, OPTIONS } from '.';
const { views, visits } = defineProps(['views', "visits"])

const pattern = ref(null)
const patterns = ref([])
const el = ref(null);
const chart = ref();
const process = () => {
  const days = getDaysInMonth(new Date().getMonth(), new Date().getFullYear())
  const viewsData: unknown[] = []
  const visitsData: unknown[] = []
  days.forEach(d => {
    const dateString = `${pattern.value}-01`
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
    patterns.value = generateDatePatterns()
    const series = process()
    chart.value = new ApexCharts(el.value, { ...OPTIONS, series });
    chart.value.render();
  }
})
watch(() => [views, visits], () => {
  const series = process()
  chart.value.updateSeries(series)
});
const handleOnChange = (e: Event) => {
  pattern.value = (e.target as HTMLInputElement).value
  const series = process()
  chart.value.updateSeries(series)
}
</script>

<style scoped></style>
