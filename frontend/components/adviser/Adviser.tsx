import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "@components/List/List";
import { useRouter } from "next/router";
import { useGetAllBlog } from "../../apollo/actions";
import Loading from "@components/Loading/Loading";
import List from "./List";

import { getAllAdviser } from "@apolloo/actions/adviser";

function Adviser() {
  const { loading, data, error } = getAllAdviser();

  const router = useRouter();

  const [active, setActive] = React.useState("box");

  return (
    <Section>
      <div className="flex">
        <div className="flex-2">
          <div className="top">
            <div className="left">
              <h3> HOME</h3>

              <h4>Adviser</h4>
            </div>
            <div className="right">

            </div>

            <div className="right">
              <button id="submit" onClick={() => router.push("/adviser/add-adviser")}>
                Add
              </button>
            </div>
          </div>

          {loading ? (
            <Loading />
          ) : (
            <List active={active} data={data?.getAllAdviser} />
          )}

          <div className="bottom"></div>
        </div>
      </div>
    </Section>
  );
}

export default Adviser;
