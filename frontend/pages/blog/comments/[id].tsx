import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import withauth from "../../../hoc/withauth";
import Edit from "@components/blog/Comments/add";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { useGetComments } from "@apolloo/actions";
import { Section } from "@components/comman/Style";
const Home: NextPage = withauth(() => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useGetComments({ variables: { id: id } });
  //
  if (loading) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />
        <Edit data={data.getBlogComment} id={id} />;
      </Section>
    </>
  );
}, 'blog');

export default Home;
