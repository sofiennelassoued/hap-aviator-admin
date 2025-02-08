const COLORS = [
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
  "#ff0000",
];
var OPTIONS = {
  chart: {
    height: 240,
    type: "bar",
    events: {
      click: function (chart, w, e) {
        // console.log(chart, w, e)
      },
    },
  },
  color: COLORS,
  plotOptions: {
    bar: {
      columnWidth: "45%",
      distributed: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["16-25", "26-35", "36-45", "46-55", "+55", "Unknown"],
    labels: {
      style: {
        color: COLORS,
        fontSize: "12px",
      },
    },
  },
};
export { OPTIONS };
