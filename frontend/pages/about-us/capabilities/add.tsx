import React from "react";
import type { NextPage } from "next";
import withauth from "../../../hoc/withauth";
import Add from "@components/capabilities/AddItems/Add";
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
}, "admin");

export default Home;
