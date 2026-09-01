import React from "react";
import Clients from "@components/clients/Clients";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import withAuth from "@/hocwithauth";

function PortfolioNew() {
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

export default withAuth(PortfolioNew, "work");
