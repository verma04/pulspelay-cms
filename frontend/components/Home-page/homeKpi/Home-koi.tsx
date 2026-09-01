import React from "react";
import { Section } from "../../comman/mainStyle";
import Item from "./Items";
import { useRouter } from "next/router";
import { useGetAllClient } from "../../../apollo/actions";
import Loading from "@components/Loading/Loading";
import Link from "next/link";
import {
  useGetHomeKpi,
  useGetHomeWork,
} from "@apolloo/actions/homePage/homepage";
function HomePage() {
  const { loading, data, error } = useGetHomeKpi();

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

              <h4>Home KPI</h4>
            </div>
          </div>
        </div>
        {/* @ts-ignore */}
        {loading ? <Loading /> : <Item data={data} loading={loading} />}
      </div>
    </Section>
  );
}

export default HomePage;
