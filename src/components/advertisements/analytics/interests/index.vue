<template>
  <div class="card m-h">
    <div class="card-body">
      <h5>Interests</h5>
      <div ref="el"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ApexCharts from 'apexcharts'

const { payload } = defineProps(['payload'])
const labels = [
  'Art',
  'Culture',
  'Food',
  'Health',
  'Sport',
  'Tech',
  'Travel',
  'Unknown'
]
const options = {
  series: payload,
  chart: {
    type: 'polarArea',
  },
  stroke: {
    colors: ['#fff']
  },
  fill: {
    opacity: 0.8
  },
  labels,
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};
const el = ref(null)
onMounted(() => {
  if (el.value) {
    const chart = new ApexCharts(el.value, options);
    chart.render();
  }
})
</script>

<style scoped>
.m-h {
  height: 320px;
}
</style>
