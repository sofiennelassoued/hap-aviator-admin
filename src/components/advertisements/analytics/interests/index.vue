<template>
  <div class="card m-h">
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5>Interests
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
  const ids = payload.map((p) => p.id)
  ids.push("unknown")
  const source = isViews.value === true ? views : visits
  let arr = new Array(ids.length + 1).fill(0);
  console.log(arr)
  ids.forEach((i, j) => {
    console.log(i)
    console.log(source[i]
    )
    arr[j] = source[i]
  });
  console.log(arr)
  arr = arr.map(i => i === undefined ? 0 : i)
  return arr
}
onMounted(() => {
  if (el.value) {
    const series = process()
    const labels = payload.map((p) => p.label)
    labels.push("Unknown")
    chart.value = new ApexCharts(el.value, { ...OPTIONS, labels, series });
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
