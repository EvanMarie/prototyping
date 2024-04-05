import { colors } from "styles";

export const chartConfig = {
  theme: {
    mode: "light",
    palette: "palette10",
    monochrome: {
      enabled: false,
      color: "white",
      shadeTo: "light",
      shadeIntensity: 0.65,
    },
  },
  chart: {
    id: "example-chart",
    type: "line", // bar, line, area, pie, etc.
    height: 350,
    width: "100%",
    foreColor: "white",
    background: "#fff",
    toolbar: {
      show: true,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true,
      },
      autoSelected: "zoom",
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350,
      },
    },
    stroke: {
      show: true,
      colors: "white",
      width: 2,
    },
    dropShadow: {
      enabled: true,
      top: "0.3vh",
      left: "0.3vh",
      blur: 3,
      opacity: 0.5,
    },
  },
  stroke: {
    show: true,
    curve: "smooth", // "straight" or "stepline"
    lineCap: "butt",
    colors: "cyan",
    width: 2,
    dashArray: 0,
  },

  xaxis: {
    type: "category", // or 'datetime', 'numeric'
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    labels: {
      rotate: -45,
      trim: true,
      style: {
        fontSize: "1.2vh",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold",
        colors: "white",
      },
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
      color: "white",
    },
  },
  yaxis: {
    labels: {
      rotate: -45,
      trim: true,
      style: {
        colors: ["white"],
        fontSize: "1vh",
      },
    },
    axisTicks: {
      show: true, // Show the axis ticks
      borderType: "solid",
      color: "white", // Color of the ticks
      width: 6, // Width of the ticks
      offsetX: 0,
      offsetY: 0,
    },
    title: {
      style: {
        color: "white", // Optional: change the color of the label
        fontSize: "1.2vh",
      },
    },
  },
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "center",
  },
  fill: {
    type: "gradient", // "gradient", "pattern", "image"
    // colors: ["#F2E3D5", "#8c3837", "#A16564"],
    opacity: 1,
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50, 100],
      colorStops: [],
    },
    pattern: {
      style: "squares", // "circles", "slantedLines", "verticalLines", "horizontalLines"
      width: 6,
      height: 6,
      strokeWidth: 2,
    },
    image: {
      src: [],
      width: undefined,
      height: undefined,
    },
    // More fill-specific options...
  },
  tooltip: {
    enabled: true,
    shared: true,
    intersect: false,
    followCursor: false,
    theme: "dark",
  },
  grid: {
    show: true,
    borderColor: "#F2E3D5",
    strokeDashArray: 0,
    position: "back",
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
    row: {
      colors: undefined,
      opacity: 0.5,
    },
    column: {
      colors: undefined,
      opacity: 0.5,
    },
    padding: {
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
    },
  },
  dataLabels: {
    enabled: false,
    formatter: function (val: number, opts: any) {
      return val.toString();
    },
    textAnchor: "middle",
    distributed: false,
    offsetX: 0,
    offsetY: 0,
    style: {
      fontSize: "1.2vh",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: ["#ff0000"],
      //   colors: [colors["col-100"]],
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      padding: 4,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: "#fff",
      opacity: 0.9,
      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 1,
        color: "#000",
        opacity: 0.45,
      },
    },
    // More dataLabels-specific options...
  },
  responsive: [
    {
      breakpoint: 1000,
      options: {
        chart: {
          width: "100%",
        },
        legend: {
          position: "bottom",
        },
      },
    },
    // More responsive-specific settings...
  ],
  // Add other global configuration options as needed
};
