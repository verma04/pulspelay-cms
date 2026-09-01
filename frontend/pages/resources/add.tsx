import React from "react";
import Clients from "@components/clients/Clients";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import Resources from "@components/resources/add/Add";

export default function index() {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <Resources />
      </Section>
    </>
  );
}
