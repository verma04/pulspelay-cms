import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "./Items";
import { useRouter } from "next/router";
import { useGetAllTeam } from "../../apollo/actions";
import { Button } from "@mui/material";
import Drag from "../comman/listView/dragImages";
import Link from "next/link";
function Concierge() {
  const { loading, data, error } = useGetAllTeam();

  const router = useRouter();

  const [active, setActive] = React.useState("box");
  const [edit, usEdit] = React.useState(false);

  return (
    <Section>
      <div className="flex">
        <div className="flex-2">
          <div className="top">
            <div className="left">
              <h3> HOME</h3>

              <h4>Teams</h4>
            </div>

            <div className="right">
              <button
                id="submit"
                onClick={() => router.push("/teams/add-team-member")}
              >
                Add
              </button>

              <Link href="/seo/teams">
                <button style={{ marginLeft: "1rem" }} id="submit">
                  Manage Seo
                </button>
              </Link>
            </div>
          </div>
        </div>
        {console.log(process.env.LIVE_URL, "sdsd")}
        <>
          {loading ? null : (
            <Item active={active} data={data} loading={loading} />
          )}
        </>
      </div>
    </Section>
  );
}

export default Concierge;
