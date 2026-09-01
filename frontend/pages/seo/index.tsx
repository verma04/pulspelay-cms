import withauth from "@/hocwithauth";
import React from "react";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import SeoPages from "@components/seoPages/SeoPages";
const index = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />
        <SeoPages />
      </Section>
    </>
  );
};

export default withauth(index, "page seo");
