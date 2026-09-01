import React from "react";
import { Section } from "../comman/mainStyle";

import { useRouter } from "next/router";
import Message from "./Message/Message";
import GeneratePDF from "./ReportGenerator";
import { CSVLink, CSVDownload } from "react-csv";
import AppLoading from "@components/Loading/AppLoading";
import Link from "next/link";
import useAxios from "axios-hooks";

function Chat() {
  const [{ data, loading, error }, refetch] = useAxios(
    `https://chatapi.pulseplaydigital.ai/admin/getAllUser`
  );

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

              <h4>Chat </h4>
            </div>

            <div className="right">
              <Link href="/prompt">
                <button
                  style={{ marginRight: "1rem" }}
                  className="btn btn-primary"
                >
                  Manage Prompt
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Message data={data} />
      </div>
    </Section>
  );
}

export default Chat;
