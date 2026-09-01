import React from "react";
import Clients from "@components/LoginSession/LoginSession";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";

import type { NextPage } from "next";
import withauth from "../hoc/withauth";

import HireUs from "@components/HireUs/HireUs";
const Home: NextPage = withauth(() => {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />
        <HireUs />
      </Section>
    </>
  );
}, "Hire Us");

export default Home;
