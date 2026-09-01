import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "./Items";
import { useRouter } from "next/router";
import { useTagImage } from "../../apollo/actions";
function Concierge() {
  const { loading, data, error } = useTagImage();

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

              <h4>Images</h4>
            </div>

            <div className="right">
              <button id="submit" onClick={() => router.push("/tag/add")}>
                Add
              </button>
            </div>
          </div>
        </div>

        <Item active={active} data={data} loading={loading} />
      </div>
    </Section>
  );
}

export default Concierge;
