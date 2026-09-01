import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import type { NextPage } from "next";
import withauth from "../../../hoc/withauth";
import Edit from "@components/clients/editItems/Add";

import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import { useGetOneClient, useGetSingleBlog } from "@apolloo/actions";
import Seo from "../../../components/seo/form";
const Home: NextPage = withauth(() => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const { loading, error, data } = useGetSingleBlog({ variables: { id: id } });

  if (loading) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <Seo
          category={"blog"}
          id={id}
          head={data.getSingleBlog?.blogTitle}
          seo={data.getSingleBlog?.seo}
          section={"Blog"}
        />
      </Section>
    </>
  );
}, "blog");

export default Home;
