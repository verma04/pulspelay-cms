import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/react-hooks";
import type { NextPage } from "next";
import withauth from "../../../hoc/withauth";
import Edit from "@components/clients/editItems/Add";

import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import { useGetOneClient } from "@apolloo/actions";
import Seo from "../../../components/seo/form";
const Home: NextPage = withauth(() => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const { loading, error, data } = useGetOneClient({ variables: { id: id } });

  if (loading) {
    return null;
  }

 
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <Seo
          category={"Work"}
          id={id}
          head={data?.getSingleClients?.projectName}
          seo={data?.getSingleClients?.seo}
          section={"clients"}
        />
      </Section>
    </>
  );
}, "work");

export default Home;
