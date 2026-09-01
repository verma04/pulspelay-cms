import React from "react";
import ReactApexChart from "react-apexcharts";
const Os = () => {
  const series = [
    {
      series: [44, 55, 41, 17, 15],
    },
  ];

  const options = {
    chart: {
      type: "donut",
    },
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

  return <div className="chart"></div>;
};

export default Os;
