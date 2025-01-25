<template>
  <div class="card m-h">
    <div class="card-body">
      <h5>Age</h5>
      <div ref="el"></div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import ApexCharts from 'apexcharts'

const { payload } = defineProps(['payload'])
const color = ["#ff0000", "#ff0000", "#ff0000", "#ff0000", "#ff0000", "#ff0000", "#ff0000"]
var options = {
  series: [{
    data: payload
  }],
  chart: {
    height: 240,
    type: 'bar',
    events: {
      click: function (chart, w, e) {
        // console.log(chart, w, e)
      }
    }
  },
  color,
  plotOptions: {
    bar: {
      columnWidth: '45%',
      distributed: true,
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [
      '16-25',
      '26-35',
      '36-45',
      '46-55',
      '+55',
    ],
    labels: {
      style: {
        color, fontSize: '12px'
      }
    }
  }
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
