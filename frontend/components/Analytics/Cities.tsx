import React from "react";
import ReactApexChart from "react-apexcharts";
const Cities = ({ data }) => {
  const series = [
    {
      data: data.slice(0, 10).map((t) => t.value),
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    annotations: {
      xaxis: [
        {
          x: 500,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "X annotation",
          },
        },
      ],
      yaxis: [
        {
          y: "July",
          y2: "September",
          label: {
            text: "Y annotation",
          },
        },
      ],
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: data.slice(0, 10).map((t) => t.name),
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    yaxis: {
      reversed: true,
      axisTicks: {
        show: true,
      },
    },
  };

  return (
    <div className="chart">
      {/* @ts-ignore */}
      <ReactApexChart
        // @ts-ignore
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default Cities;
