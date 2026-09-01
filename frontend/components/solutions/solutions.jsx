import React from "react";
import { Section } from "../comman/mainStyle";

import { useRouter } from "next/router";
import { useGetAllSolutions } from "../../apollo/actions";
import Loading from "@components/Loading/Loading";
import List from "./List";
import Link from "next/link";
function Career() {
  const { loading, data, error } = useGetAllSolutions();

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

              <h4>Solutions</h4>
            </div>

            <div className="right">
              <button
                id="submit"
                onClick={() => router.push("/solutions/add-solutions")}
              >
                Add
              </button>

              <Link href="/seo/solutions">
                <button style={{ marginLeft: "1rem" }} id="submit">
                  Manage Seo
                </button>
              </Link>
            </div>

          </div>

          {loading ? <Loading /> : <List active={active} data={data} />}

          <div className="bottom"></div>
        </div>
      </div>
    </Section>
  );
}

export default Career;
