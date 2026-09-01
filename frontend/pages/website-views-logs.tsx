import React from "react";
import Clients from "@components/website-vist/vist";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import withauth from "../hoc/withauth";
import type { NextPage } from "next";
const Home: NextPage = withauth(() => {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />
        <Clients />
      </Section>
    </>
  );
}, "visit");
export default Home;
