import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "./Items";
import { useRouter } from "next/router";
import { useGetAllCarrer } from "../../apollo/actions";
function Career() {
  const { loading, data, error } = useGetAllCarrer();

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

              <h4>Career</h4>
            </div>

            <div className="right">
              <button
                id="submit"
                onClick={() => router.push("/career/apply")}
                style={{ marginRight: "1rem" }}
              >
                Applied List
              </button>
              <button
                id="submit"
                onClick={() => router.push("/career/add-career")}
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
