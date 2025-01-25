<template>
  <div class="card w-100">
    <div class="card-body">
      <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
        <div class="mb-3 mb-sm-0">
          <h5 class="card-title fw-semibold">Reach of year</h5>
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

import { onMounted, ref } from 'vue';
import ApexCharts from 'apexcharts'
const { views, interactions } = defineProps(['views', "interactions"])

var options = {
  series: [
    {
      type: "area",
      name: "Views",
      chart: {
        foreColor: "#111c2d99",
        fontSize: 12,
        fontWeight: 500,
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.1,
        },
      },
      data: [
        {
          x: "Aug",
          y: 25,
        },
        {
          x: "Sep",
          y: 25,
        },
        {
          x: "Oct",
          y: 10,
        },
        {
          x: "Nov",
          y: 10,
        },
        {
          x: "Dec",
          y: 45,
        },
        {
          x: "Jan",
          y: 45,
        },
        {
          x: "Feb",
          y: 75,
        },
        {
          x: "Mar",
          y: 70,
        },
        {
          x: "Apr",
          y: 35,
        },
      ],
    },
    {
      type: "line",
      name: "Interactions",
      chart: {
        foreColor: "#111c2d99",
      },
      data: [
        {
          x: "Aug",
          y: 50,
        },
        {
          x: "Sep",
          y: 50,
        },
        {
          x: "Oct",
          y: 25,
        },
        {
          x: "Nov",
          y: 20,
        },
        {
          x: "Dec",
          y: 20,
        },
        {
          x: "Jan",
          y: 20,
        },
        {
          x: "Feb",
          y: 35,
        },
        {
          x: "Mar",
          y: 35,
        },
        {
          x: "Apr",
          y: 60,
        },
      ],
    },
  ],
  chart: {
    height: 360,
    fontFamily: "inherit",
    foreColor: "#adb0bb",
    fontSize: "12px",
    offsetX: -15,
    offsetY: 10,
    animations: {
      speed: 500,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["var(--bs-primary)", "var(--bs-secondary-color)"],
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0,
      inverseColors: false,
      opacityFrom: 0.1,
      opacityTo: 0,
      stops: [100],
    },
  },
  grid: {
    show: true,
    strokeDashArray: 3,
    borderColor: "#90A4AE50",
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    tickAmount: 3,
  },
  legend: {
    show: false,
  },
  tooltip: {
    theme: "dark",
  },
};
const el = ref(null);
onMounted(() => {
  if (el.value) {
    const chart = new ApexCharts(el.value, options);
    chart.render();
  }
})
</script>

<style scoped></style>
