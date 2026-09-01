import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";
import Edit from "@components/role/Edit/Add";
import Add from "@components/solutions/AddItems/Add";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import { getRoleById } from "@apolloo/actions";

const Home: NextPage = withauth(() => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const { loading, error, data } = getRoleById({ variables: { id: id } });

  if (loading) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <Edit roleData={data.getRoleById} />
      </Section>
    </>
  );
}, "admin");

export default Home;
