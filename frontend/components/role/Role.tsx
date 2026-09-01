import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "./Items";
import { useRouter } from "next/router";
import { getAllRole } from "../../apollo/actions";
import Loading from "@components/Loading/Loading";
import Error from "@components/Error/Error";
function Role() {
  const { loading, data, error } = getAllRole();

  console.warn(error);

  const router = useRouter();

  const [active, setActive] = React.useState("box");

  return (
    <Section>
      {error ? (
        <Error />
      ) : (
        <div className="flex">
          <div className="flex-2">
            <div className="top">
              <div className="left">
                <h3> HOME</h3>

                <h4>User Role</h4>
              </div>

              <div className="right">
                <button
                  id="submit"
                  onClick={() => router.push("/role/add-role")}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          {/* @ts-ignore */}
          {loading ? <Loading /> : <Item data={data} loading={loading} />}
        </div>
      )}
    </Section>
  );
}

export default Role;
