import React from "react";
import { Section } from "../comman/mainStyle";
import List from "./list";
import { useRouter } from "next/router";
import { useGetAllServices } from "../../apollo/actions";
import Loading from "@components/Loading/Loading";
import Link from "next/link";
function Career() {
  const { loading, data, error } = useGetAllServices();

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

              <h4>Services</h4>
            </div>

            <div className="right">
              <button
                id="submit"
                onClick={() => router.push("/services/add-services")}
              >
                Add
              </button>
              <Link href="/seo/services">
                <button style={{ marginLeft: "1rem" }} id="submit">
                  Manage Seo
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

export default Career;
