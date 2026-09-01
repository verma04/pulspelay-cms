import React from "react";

import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import withAuth from "@/hocwithauth";
import HomePage from "@components/Home-page/homeKpi/Home-koi";

function PortfolioNew() {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <HomePage />
      </Section>
    </>
  );
}

export default withAuth(PortfolioNew, "home");
