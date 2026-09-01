import React from "react";
import Clients from "@components/LoginSession/LoginSession";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";

import type { NextPage } from "next";
import withauth from "../hoc/withauth";
import NewsLetter from "@components/NewsLetter/NewsLetter";
const Home: NextPage = withauth(() => {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />
        <NewsLetter />
      </Section>
    </>
  );
}, "NewsLetter");

export default Home;
