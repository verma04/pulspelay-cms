import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "./Items";
import { useRouter } from "next/router";
import { useGetAllTest } from "../../apollo/actions";
import Link from "next/link";
function Concierge() {
  const { loading, data, error } = useGetAllTest();

  console.warn(error);

  const router = useRouter();

  const [active, setActive] = React.useState("box");

  console.log(data);

  return (
    <Section>
      <div className="flex">
        <div className="flex-2">
          <div className="top">
            <div className="left">
              <h3> HOME</h3>

              <h4>testimonials</h4>
            </div>

            <div className="right">
              <button
                id="submit"
                onClick={() => router.push("/testimonials/add")}
              >
                Add
              </button>
              <Link href="/seo/testimonials">
                <button style={{ marginLeft: "1rem" }} id="submit">
                  Manage Seo
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* @ts-ignore */}
        {loading ? null : <Item data={data} loading={loading} />}
      </div>
    </Section>
  );
}

export default Concierge;
