import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "@components/List/List";
import { useRouter } from "next/router";
import { useGetAllBlog, useGetUser } from "../../apollo/actions";
import Loading from "@components/Loading/Loading";
import List from "./List";

function Career() {
  const { loading, data, error } = useGetAllBlog();

  const router = useRouter();

  const [active, setActive] = React.useState("box");

  const { data: { getUser } = {} } = useGetUser();

  return (
    <Section>
      <div className="flex">
        <div className="flex-2">
          <div className="top">
            <div className="left">
              <h3> HOME</h3>

              <h4>Blog</h4>
            </div>
            <div className="right">
              {getUser?.role?.toLowerCase()?.includes("admin") && (
                <button
                  id="submit"
                  onClick={() => router.push("/blog/add-category")}
                >
                  Manage Category
                </button>
              )}
            </div>

            <div className="right">
              <button id="submit" onClick={() => router.push("/blog/add-blog")}>
                Add
              </button>
            </div>
          </div>

          <p
            style={{
              textAlign: "left",
              width: "100%",
              marginBottom: "1rem",
              fontSize: "0.8rem",
              color: "#236df6",
            }}
          >
            {!getUser?.role?.toLowerCase()?.includes("admin") && (
              <>
                * Kindly reach out to the administrator to submit your blog.
                Upon approval, it will be featured in the PulsePlayDigital blog
                section
              </>
            )}
          </p>

          {loading ? (
            <Loading />
          ) : (
            <List active={active} data={data.getAllBlog} />
          )}

          <div className="bottom"></div>
        </div>
      </div>
    </Section>
  );
}

export default Career;
