<template>
  <div class="card m-h">
    <div class="card-body">
      <h5>Sex</h5>
      <div ref="el"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import ApexCharts from 'apexcharts'
const { payload } = defineProps(['payload'])
const options = {
  series: payload,
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Females', 'Males', 'Unknown'],
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
