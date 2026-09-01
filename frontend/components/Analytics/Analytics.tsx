import React from "react";
import { Section } from "./Style";
import Graph from "./Graphq";
import PieChart from "./PieChart";
import Image from "next/image";
import { useRouter } from "next/router";
import BrowserChart from "./BrowserChart";

import { DateRangePicker } from "react-date-range";
import {
  useDeviceUser,
  getViews,
  getCities,
  getCountryCode,
  getPages,
  getOs,
} from "@apolloo/actions";

import moment from "moment";
import dynamic from "next/dynamic";
import { red } from "@mui/material/colors";

const CountryMap = dynamic(() => import("./CountryMap"), {
  ssr: false,
});
const Cities = dynamic(() => import("./Cities"), {
  ssr: false,
});

const Os = dynamic(() => import("./Os"), {
  ssr: false,
});

function Analytics() {
  const [dateRange, setDateRange] = React.useState({
    startDate: new Date().setDate(new Date().getDate() - 7),
    endDate: new Date(),
    key: "selection",
  });
  const { data, loading } = useDeviceUser();
  const { data: data1, loading: loading1 } = getViews({
    variables: {
      gte: moment(dateRange.startDate).format(),
      lte: moment(dateRange.endDate).format(),
    },
  });
  const { data: data3, loading: loading3 } = getCountryCode({
    variables: {
      gte: moment(dateRange.startDate).format(),
      lte: moment(dateRange.endDate).format(),
    },
  });
  const { data: data2, loading: loading2 } = getCities({
    variables: {
      gte: moment(dateRange.startDate).format(),
      lte: moment(dateRange.endDate).format(),
    },
  });
  const { data: data4, loading: loading4 } = getPages({
    variables: {
      gte: moment(dateRange.startDate).format(),
      lte: moment(dateRange.endDate).format(),
    },
  });

  const { data: data5, loading: loading5 } = getOs({
    variables: {
      gte: moment(dateRange.startDate).format(),
      lte: moment(dateRange.endDate).format(),
    },
  });

  const handleSelect = (ranges) => {
    setDateRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    });
  };
  const router = useRouter();
  const [calender, setcalender] = React.useState(false);
  return (
    <>
      <Section>
        <div className="calender">
          {calender ? (
            <>
              <DateRangePicker
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                direction="horizontal"
                ranges={[dateRange]}
                onChange={handleSelect}
              />
              <div onClick={() => setcalender(false)} className="close">
                x
              </div>
            </>
          ) : (
            <div onClick={() => setcalender(true)} className="calender-list">
              <div className="list">
                <li> {moment(dateRange.startDate).format("LL")}</li>
                <li>{moment(dateRange.endDate).format("LL")}</li>
              </div>
            </div>
          )}
        </div>

        <div
          style={{
            width: "100%",

            marginTop: "8rem",
            height: "80vh",
          }}
        >
          {/* @ts-ignore */}
          {loading3 ? null : <CountryMap set={data3?.getCountryCode} />}
        </div>
        <div className="flex">
          <div className="flex-2">
            <div className="flex-2-list">
              {/* @ts-ignore */}
              {loading2 ? null : <Cities data={data2?.getCities} />}
            </div>

            <div className="flex-2-list">
              {/* @ts-ignore */}
              {loading4 ? null : <Cities data={data4?.getPages} />}
            </div>

            <div className="flex-2-list">
              {loading ? null : <BrowserChart data={data?.getAllDeivceInfo} />}
            </div>

            <div className="flex-2-list">
              {loading ? null : <PieChart data={data?.getAllDeivceInfo} />}
            </div>
          </div>

          <div className="flex-3">
            <div className="flex-3-left">
              {loading1 ? null : <Graph data={data1?.getViews} />}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Analytics;
