import { useDeviceUser } from "@apolloo/actions";
const data = [
  { name: "Group A", value: 400, color: "#0088FE" },
  { name: "Group B", value: 300, color: "#00C49F" },
  { name: "Group C", value: 300, color: "#FFBB28" },
  { name: "Group D", value: 200, color: "#FF8042" },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

import React from "react";

interface getAllDeivceInfo {
  country_code: String;
  country_name: String;
  city: String;
  postal: String;
  latitude: String;
  longitude: String;
  IPv4: String;
  state: String;
  name: String;
  version: String;
  os: String;
  type: String;
  createdAt: String;
}

interface Data {
  data: [getAllDeivceInfo];
}
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieCharts: React.FC<Data> = ({ data }) => {
  const { data: data1, loading } = useDeviceUser();

  const set = data?.filter(
    (value, index, self) => index === self.findIndex((t) => t.os === value.os)
  );

  var result = set?.map((t) => ({ name: t.os, value: 0, color: "#0088FE" }));

  const arr = [];

  result?.forEach((element) => {
    const filter = data?.filter((t) => t.os === element.name);

    const fin = (filter.length / data.length) * 1000;

    const objIndex = result?.findIndex((set) => set.name === element.name);

    result[objIndex].value = filter.length;

    result[objIndex].color = COLORS[objIndex];
  });

  const content = {
    labels: result?.map((t) => t.name),
    datasets: [
      {
        label: "Operating System",
        data: result?.map((t) => t.value),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Pie data={content} />
    </>
  );
};

export default PieCharts;
