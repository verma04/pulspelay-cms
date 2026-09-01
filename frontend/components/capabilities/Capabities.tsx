import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "./Items";
import { useRouter } from "next/router";
import { useAllCapabilities } from "../../apollo/actions";
function Career() {
  const { loading, data, error } = useAllCapabilities();

  const router = useRouter();

  const [active, setActive] = React.useState("box");

  return (
    <Section>
      <div className="flex">
        <div className="flex-2">
          <div className="top">
            <div className="left">
              <h3> HOME</h3>

              <h4>capabilities</h4>
            </div>

            <div className="right">
              <button
                id="submit"
                onClick={() => router.push("/about-us/capabilities/add")}
              >
                Add
              </button>
            </div>
          </div>

          <Item active={active} data={data} loading={loading} />

          <div className="bottom"></div>
        </div>
      </div>
    </Section>
  );
}

export default Career;
