const OPTIONS = {
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
      data: null,
    },
    {
      type: "line",
      name: "Visits",
      chart: {
        foreColor: "#111c2d99",
      },
      data: null,
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
    zoom: {
      enabled: false,
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
const generateDatePatterns = () => {
  const year = new Date().getFullYear();
  const obj = {};
  const patterns = [];
  for (let index = 0; index < 12; index++) {
    const d = new Date();
    d.setMonth(index);
    const month = d.toLocaleString("default", { month: "long" });
    patterns.push({
      label: `${month} ${year}`,
      pattern: year + "-" + ("0" + (index + 1)).slice(-2),
    });
  }
  return patterns;
};
export { OPTIONS, generateDatePatterns };
