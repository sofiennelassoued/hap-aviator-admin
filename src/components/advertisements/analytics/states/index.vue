<template>
  <div class="card m-h">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5>States
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

const { payload, views, visits } = defineProps(['payload', 'views', 'visits'])
const isViews = ref(true)
const el = ref(null)
const chart = ref();
const process = () => {
  let meta: unknown[] = []
  const source = isViews.value === true ? views : visits
  Object.keys(payload).forEach(k => {
    let obj = {
      x: payload[k].label,
      y: source[payload[k].id] ?? 0
    }
    meta.push(obj)
  });
  if (source.unknown) {
    meta.push({
      x: "Unknown",
      y: source["unknown"]
    })
  }
  return [{ data: meta }]
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
const handleOnClickToggleIsViews = () => {
  isViews.value = !isViews.value
  const series = process()
  chart.value.updateSeries(series)
}
</script>

<style scoped>
.m-h {
  height: 320px;
}
</style>
