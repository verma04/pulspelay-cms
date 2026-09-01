import React from "react";
import Career from "@components/services/services";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";

import withauth from "../../hoc/withauth";
const Home = withauth(() => {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <Career />
      </Section>
    </>
  );
}, "Services");
export default Home;
