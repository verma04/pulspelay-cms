import React from "react";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";

import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";

import AddProduct from "@components/products/add/AddProduct";
const Home: NextPage = withauth(() => {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <AddProduct />
      </Section>
    </>
  );
}, "media");

export default Home;
