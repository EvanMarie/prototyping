import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { chartConfig } from "./chartDefaults";

interface Post {
  id: number;
  title: string;
  // include other properties from the API if necessary
}

interface SeriesData {
  name: string;
  data: number[];
}

function ChartComponent() {
  const [series, setSeries] = useState<SeriesData[]>([]);
  const [categories, setCategories] = useState<number[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => {
        const chartData = data.map((post) => post.title.length);
        const chartCategories = data.map((post) => post.id);

        setSeries([
          {
            name: "Post Title Length",
            data: chartData,
          },
        ]);

        setCategories(chartCategories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const specificOptions: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: categories,
      labels: {
        rotate: -90,
        style: {
          colors: "white",
          fontSize: "10px",
        },
      },
    },
  };

  const options = { ...chartConfig, ...specificOptions };
  return (
    <div className="bg-col-700 w-[95vw] h-[90vh]">
      <Chart options={options as any} series={series} type="bar" width="100%" />
    </div>
  );
}

export default ChartComponent;
