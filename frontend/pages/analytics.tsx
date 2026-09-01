import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Layout/Navbar/Navbar";

import Sidebarr from "../components/Layout/Sidebarr/Sidebarr";
import { Section } from "../components/comman/Style";

import withauth from "../hoc/withauth";
import Analytics from "@components/Analytics/Analytics";

const Home: NextPage = withauth(() => {
  return (
    <>
      <Navbar />

      <Section>
        <Sidebarr />

        <Analytics />
      </Section>
    </>
  );
}, "analytics");

export default Home;
