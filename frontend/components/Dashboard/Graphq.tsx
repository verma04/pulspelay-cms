// import moment from "moment";
// import React, { PureComponent } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DateRangePicker } from "react-date-range";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   Cell,
// } from "recharts";

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

// const Graphq: React.FC<Data> = ({ data }) => {
//   const [age, setAge] = React.useState(7);

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };
//   const arr = [];

//   const func = async () => {
//     let i;
//     for (i = 0; i < age; i++) {
//       var date = moment().subtract(i, "days").format("L");

//       arr.push({ date, count: 0 });
//     }

//     await arr.forEach((element, index) => {
//       console.log(element.date);
//       const set = data.filter(
//         (t) => moment(t.createdAt).format("L") === element.date
//       );

//       console.log(set.length, index);

//       arr[index].count = set.length;
//     });
//   };

//   func();

//   console.log(arr);

//   return (
//     <>
//       <Box sx={{ minWidth: 120, marginBottom: "1rem" }}>
//         <FormControl fullWidth>
//           <InputLabel id="demo-simple-select-label">Time</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={age}
//             label="Time"
//             onChange={handleChange}
//           >
//             <MenuItem value={7}>Last 7 Days</MenuItem>
//             <MenuItem value={30}>Last 30 days</MenuItem>
//             <MenuItem value={70}>Last 90 days</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>

//       <ResponsiveContainer width="90%" height="90%">
//         <LineChart
//           width={500}
//           height={300}
//           data={arr.reverse()}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="count" stroke="#8884d8" />
//         </LineChart>
//       </ResponsiveContainer>
//     </>
//   );
// };

// export default Graphq;
import React from "react";
import moment from "moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
      text: "Chart.js Line Chart",
    },
  },
};

export default function App({ data }) {
  const [age, setAge] = React.useState(7);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const arr = [];

  const func = async () => {
    let i;
    for (i = 0; i < age; i++) {
      var date = moment().subtract(i, "days").format("L");

      arr.push({ date, count: 0 });
    }

    await arr.forEach((element, index) => {
      const set = data.filter(
        (t) => moment(t.createdAt).format("L") === element.date
      );

      arr[index].count = set.length;
    });
  };

  func();

  const content = {
    labels: arr.map((t) => t.date),
    datasets: [
      {
        label: "Visit",
        data: arr.map((t) => t.count),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(255, 159, 64, 1)",
      },
    ],
  };
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  const handleSelect = (ranges) => {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };

  return (
    <>
      <Box sx={{ minWidth: 120, marginBottom: "1rem" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Time</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Time"
            onChange={handleChange}
          >
            <MenuItem value={7}>Last 7 Days</MenuItem>
            <MenuItem value={30}>Last 30 days</MenuItem>
            <MenuItem value={70}>Last 90 days</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <Line options={options} data={content} />
    </>
  );
}
