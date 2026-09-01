import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useDashBoardList } from "@apolloo/actions";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function View() {
  const { data, loading } = useDashBoardList();

  const content = {
    labels: [
      "Work",
      "Services",
      "Solutions",
      "Blog",
      "News",
      "Resources",
      "Members",
    ],
    datasets: [
      {
        label: "Count",
        data: [
          data && data?.getDashBoardList?.Work,
          data && data?.getDashBoardList?.Services,

          data && data?.getDashBoardList?.Solutions,
          data && data?.getDashBoardList?.Blog,
          data && data?.getDashBoardList?.News,
          data && data?.getDashBoardList?.Resources,
          data && data?.getDashBoardList?.Members,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <>{!loading && <Radar data={content} />}</>;
}
