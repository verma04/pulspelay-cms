import React from "react";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";
import Add from "@components/solutions/AddItems/Add";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
const Home: NextPage = withauth(() => {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <Add />
      </Section>
    </>
  );
}, "Solutions");

export default Home;
