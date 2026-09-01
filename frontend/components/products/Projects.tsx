import React from "react";
import { Section } from "../comman/mainStyle";
import Item from "@components/List/List";
import { useRouter } from "next/router";
import { useGetAllBlog } from "../../apollo/actions";
import Loading from "@components/Loading/Loading";
import List from "./List";
import { GetAllAwards } from "@apolloo/actions/rewards";
import { getAllProduct } from "@apolloo/actions/products";

function Projects() {
  const { loading, data, error } = getAllProduct();

  const router = useRouter();

  const [active, setActive] = React.useState("box");

  return (
    <Section>
      <div className="flex">
        <div className="flex-2">
          <div className="top">
            <div className="left">
              <h3> HOME</h3>

              <h4>Products</h4>
            </div>
            <div className="right"></div>

            <div className="right">
              <button id="submit" onClick={() => router.push("/products/add")}>
                Add
              </button>
            </div>
          </div>

          {loading ? (
            <Loading />
          ) : (
            <List active={active} data={data?.getAllProduct} />
          )}

          <div className="bottom"></div>
        </div>
      </div>
    </Section>
  );
}

export default Projects;
