import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "./Items";
import moment from "moment";
import { useRouter } from "next/router";
import { useGetKnownUser } from "@apolloo/actions";
import GeneratePDF from "./ReportGenerator";
import { CSVLink, CSVDownload } from "react-csv";
import AppLoading from "@components/Loading/AppLoading";
import Link from "next/link";

function Concierge() {
  const { data, loading } = useGetKnownUser();

  const router = useRouter();

  const [active, setActive] = React.useState("box");
  if (loading) {
    return <AppLoading />;
  }

  const date = Date().split(" ");

  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];

  const arr = [];

  console.log(data);

  return (
    <Section>
      <div className="flex">
        <div className="flex-2">
          <div className="top">
            <div className="left">
              <h3> HOME</h3>

              <h4>Vist</h4>
            </div>

            <div className="right">
              <Link href="/website-views-logs">
                <button
                  style={{ marginRight: "1rem" }}
                  className="btn btn-primary"
                >
                  All View Logs
                </button>
              </Link>
              <button
                style={{ marginRight: "1rem" }}
                className="btn btn-primary"
                onClick={() => GeneratePDF(arr)}
              >
                Download Pdf
              </button>
              <CSVLink data={arr} filename={`report_${dateStr}.csv`}>
                <button>Download CSV</button>
              </CSVLink>
            </div>
          </div>
        </div>

        <Item active={active} data={data} loading={loading} />
      </div>
    </Section>
  );
}

export default Concierge;
