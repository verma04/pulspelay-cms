import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "./Items";
import { useRouter } from "next/router";
import { getAllNewsLetter } from "../../apollo/actions";
import { useRemoveUserSession } from "@apolloo/actions";
function NewsLetter() {
  const [add, { data: data2, error: err2, loading: loading3 }] =
    useRemoveUserSession();
  const { loading, data, error } = getAllNewsLetter();

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

              <h4>News Letter</h4>
            </div>
          </div>
        </div>

        <Item
          // @ts-ignore
          add={add}
          loading3={loading3}
          active={active}
          data={data}
          loading={loading}
        />
      </div>
    </Section>
  );
}

export default NewsLetter;
