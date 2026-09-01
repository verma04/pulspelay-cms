import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "./Items";
import { useRouter } from "next/router";
import { useGetAllClient } from "../../apollo/actions";
import Loading from "@components/Loading/Loading";
import Link from "next/link";
function Concierge() {
  const { loading, data, error } = useGetAllClient();

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

              <h4>Clients</h4>
            </div>

            <div className="right">
              <button
                id="submit"
                onClick={() => router.push("/clients/add-client")}
              >
                Add
              </button>

              <Link href="/seo/clients">
                <button style={{ marginLeft: "1rem" }} id="submit">
                  Manage Seo
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* @ts-ignore */}
        {loading ? <Loading /> : <Item data={data} loading={loading} />}
      </div>
    </Section>
  );
}

export default Concierge;
