import React from "react";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";
import Add from "@components/blog/News/Add";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import AddAwards from "@components/awards/add/AddAwards";
const Home: NextPage = withauth(() => {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <AddAwards />
      </Section>
    </>
  );
}, "media");

export default Home;
