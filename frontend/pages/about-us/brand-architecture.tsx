import React from "react";
import Career from "@components/capabilities/Capabities";
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
        sdsdd
      </Section>
    </>
  );
}, "about-us");

export default Home;
