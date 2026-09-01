import React from "react";
import Career from "@components/career/Career";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";

export default function index() {
  return (
    <>
      <Navbar />

      <Section>
        <Sidebarr />

        <Career />
      </Section>
    </>
  );
}
