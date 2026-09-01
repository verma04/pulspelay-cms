import React from "react";
import Career from "@components/blog/blog";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";

import withauth from "../../hoc/withauth";
import Awards from "@components/awards/Awards";
import Projects from "@components/products/Projects";

const Home = withauth(() => {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <Projects />
      </Section>
    </>
  );
}, "projects");

export default Home;
