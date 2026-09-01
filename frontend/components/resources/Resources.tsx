import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "./Items";
import { useRouter } from "next/router";
import { useGetAllResources } from "../../apollo/actions";
import Loading from "@components/Loading/Loading";
function Resources() {
  const { loading, data, error } = useGetAllResources();

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

              <h4>Resources</h4>
            </div>

            <div className="right">
              <button
                id="submit"
                onClick={() => router.push("/resources/topics")}
              >
                Manage Topics
              </button>
            </div>
            <div className="right">
              <button
                id="submit"
                onClick={() => router.push("/resources/types")}
              >
                Manage ContentTypes
              </button>
            </div>
            <div className="right">
              <button id="submit" onClick={() => router.push("/resources/add")}>
                Add
              </button>
            </div>
          </div>
        </div>
        {/* @ts-ignore */}
        {loading ? <Loading /> : <Item data={data} loading={loading} />}
      </div>
    </Section>
  );
}

export default Resources;
