import React from "react";
import Clients from "@components/contactFrom/contactForm";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import type { NextPage } from "next";
import withauth from "../hoc/withauth";
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
}, "contact");

export default Home;
