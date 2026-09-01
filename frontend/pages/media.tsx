import React from "react";
import type { NextPage } from "next";
import withauth from "../hoc/withauth";
import Add from "@components/blog/News/Add";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import Media from "@components/media/Media";
const Home: NextPage = withauth(() => {
  return (
    <>
      <Navbar />

      <Section>
        <Sidebarr />
        <Media />
      </Section>
    </>
  );
}, "media");

export default Home;
