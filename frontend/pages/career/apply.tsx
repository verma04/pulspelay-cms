import React from "react";
import Clients from "@components/careerForm/careerForm";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";

export default function index() {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />
        <Clients />
      </Section>
    </>
  );
}
