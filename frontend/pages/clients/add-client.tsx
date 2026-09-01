import React from "react";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import Add from "@components/clients/add/Add";
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
}, "work");

export default Home;
