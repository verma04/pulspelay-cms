import React from "react";

import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";

import { useRouter } from "next/router";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";

import { getProductById } from "@apolloo/actions/products";
import EditProduct from "@components/products/editProduct/EditProduct";
const Home: NextPage = withauth(() => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const { loading, error, data } = getProductById({
    variables: { id: id },
  });

  console.log(data);
  if (loading) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <EditProduct data={data.getProductById} />
      </Section>
    </>
  );
}, "Testimonials");

export default Home;
