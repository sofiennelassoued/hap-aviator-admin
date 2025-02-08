<template>
  <div class="card w-100">
    <div class="card-body">
      <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
        <div class="mb-3 mb-sm-0">
          <h5 class="card-title fw-semibold">Reach of the month</h5>
        </div>
        <div>
          <select class="form-select" v-if="patterns && patterns.length > 0" @change="handleOnChange">
            <option :value="p" v-for="p in patterns.slice().reverse()">{{ new Date(p +
              '-01').toLocaleString("default", { month: "long" }) }} {{ p.split("-")[0] }}</option>
          </select>
        </div>
      </div>
      <div ref="el"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { getDaysInMonth } from '@/utils/dates';
import ApexCharts from 'apexcharts';
import { onMounted, ref, watch } from 'vue';
import { generateDatePatterns, OPTIONS } from '.';
const { views, visits, createdAt } = defineProps(['views', "visits", "createdAt"])

const pattern = ref(new Date().toISOString().substring(0, 8))
const patterns = ref([])
const el = ref(null);
const chart = ref();
const process = () => {
  const [y, m] = pattern.value.split('-')
  const days = getDaysInMonth(Number(m) - 1, Number(y))
  const viewsData: unknown[] = []
  const visitsData: unknown[] = []
  days.forEach(d => {
    const dateString = `${y}-${m}-${d.toString().padStart(2, "0")}`
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
    patterns.value = generateDatePatterns(createdAt.substring(0, 8) + "01")
    const series = process()
    chart.value = new ApexCharts(el.value, { ...OPTIONS, series });
    chart.value.render();
  }
})
watch(() => [views, visits], () => {
  const series = process()
});
const handleOnChange = (e: Event) => {
  pattern.value = (e.target as HTMLInputElement).value
  const series = process()
  chart.value.updateSeries(series)
}
</script>

<style scoped></style>
