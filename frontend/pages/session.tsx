import React from "react";

import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";

import type { NextPage } from "next";
import withauth from "../hoc/withauth";
import LoginSession from "@components/LoginSession/LoginSession";
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />
        <LoginSession />
      </Section>
    </>
  );
};

export default withauth(Home, "home");
