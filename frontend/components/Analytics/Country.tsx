// import React, { PureComponent } from "react";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data1 = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// interface getAllDeivceInfo {
//   country_code: String;
//   country_name: String;
//   city: String;
//   postal: String;
//   latitude: String;
//   longitude: String;
//   IPv4: String;
//   state: String;
//   name: String;
//   version: String;
//   os: String;
//   type: String;
//   createdAt: Object;
// }

// interface Data {
//   data: [getAllDeivceInfo];
// }

// const Country: React.FC<Data> = ({ data }) => {
//   const set = data.filter(
//     (value, index, self) =>
//       index === self.findIndex((t) => t.country_name === value.country_name)
//   );
//   var result = set.map((t) => ({
//     name: t.country_name,
//     value: 0,
//     color: "#0088FE",
//   }));

//   result.forEach((element) => {
//     const filter = data.filter((t) => t.country_name === element.name);

//     console.log(filter, "sdd");

//     const objIndex = result.findIndex((set) => set.name === element.name);

//     result[objIndex].value = filter.length;
//   });

//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <BarChart
//         width={1000}
//         height={300}
//         data={result}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Bar dataKey="value" fill="#8884d8" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// };

// export default Country;

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Countries Vise Website Visit",
    },
  },
};

function App({ data }) {
  const set = data.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.country_name === value.country_name)
  );
  var result = set.map((t) => ({
    name: t.country_name,
    value: 0,
    color: "#0088FE",
  }));

  result.forEach((element) => {
    const filter = data.filter((t) => t.country_name === element.name);

    const objIndex = result.findIndex((set) => set.name === element.name);

    result[objIndex].value = filter.length;
  });
  const content = {
    labels: result.map((t) => t.name),
    datasets: [
      {
        fill: true,
        label: "Number of Visit",
        data: result.map((t) => t.value),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={content} />;
}

export default App;
