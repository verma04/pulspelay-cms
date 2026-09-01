import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";
import Edit from "@components/solutions/editItems/Edit";
import Add from "@components/solutions/AddItems/Add";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import { useGetSingleSolutions } from "@apolloo/actions";

const Home: NextPage = withauth(() => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const { loading, error, data } = useGetSingleSolutions({
    variables: { id: id },
  });

  if (loading) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <Edit solutions={data.getSingleSolutions} />
      </Section>
    </>
  );
}, "Solutions");

export default Home;
