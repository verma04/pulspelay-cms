import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";
import Edit from "@components/tagImage/edit/image";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import { useGetOneImage } from "@apolloo/actions";

const Home: NextPage = withauth(() => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const { loading, error, data } = useGetOneImage({ variables: { id: id } });

  if (loading) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <Edit img={data.getAllOneImage} />
      </Section>
    </>
  );
}, "home");

export default Home;
