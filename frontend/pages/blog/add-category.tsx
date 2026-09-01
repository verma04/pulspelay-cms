import React from "react";
import Clients from "@components/clients/Clients";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";
import { Section } from "@components/comman/Style";
import Resources from "@components/blog/category/add";
import { useBlogCategory } from "@apolloo/actions";
const Home: NextPage = withauth(() => {
  const { data, error, loading } = useBlogCategory();

  console.log(data, "sds");

  console.log(data);
  if (loading) {
    return null;
  }
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <Resources data={data?.getAllBlogCategory} />
      </Section>
    </>
  );
}, "admin");

export default Home;
