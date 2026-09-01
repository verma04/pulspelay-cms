import React from "react";
import { Section } from "../comman/mainStyle";
import List from "./list";
import { useRouter } from "next/router";
import { useGetAllServices } from "../../apollo/actions";
import Loading from "@components/Loading/Loading";
import Link from "next/link";
import useAxios from "axios-hooks";
function Prompt() {
  const [{ data, loading, error }, refetch] = useAxios(
    `https://chatapi.pulseplaydigital.ai/admin/getPrompt`
  );

  console.warn(error);

  const router = useRouter();

  const [active, setActive] = React.useState("box");

  return (
    <Section>
      <div className="flex">
        <div className="flex-2">
          <div className="top">
            <div className="left">
              <h3> HOME</h3>

              <h4>Prompt</h4>
            </div>

            <div className="right">
              <Link href="/prompt/add">
                <button
                  style={{ marginRight: "1rem" }}
                  className="btn btn-primary"
                >
                  Add Prompt
                </button>
              </Link>
            </div>
          </div>

          {/* @ts-ignore */}
          {loading ? <Loading /> : <List loading={loading} data={data} />}

          <div className="bottom"></div>
        </div>
      </div>
    </Section>
  );
}

export default Prompt;
