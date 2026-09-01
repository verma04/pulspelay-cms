import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";


import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import {

  useSeoPages,
} from "@apolloo/actions";
import Seo from "../../components/seo/form";
const Home: NextPage = withauth(() => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const { loading, error, data } = useSeoPages({ variables: { name: id } });

  if (loading) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <Seo
          category={"page"}
          id={data.seoPages.id}
          head={data.seoPages.name}
          seo={data.seoPages.seo}
          section={"Blog"}
        />
      </Section>
    </>
  );
}, "page seo");

export default Home;
