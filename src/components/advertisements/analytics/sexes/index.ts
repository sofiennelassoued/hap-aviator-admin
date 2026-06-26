const OPTIONS = {
  series: [44, 55, 13],
  colors: ["#F44336", "#2196F3", "#FF9800"],
  chart: {
    width: 380,
    type: "pie",
  },
  labels: ["Females", "Males", "Unknown"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
export { OPTIONS };
