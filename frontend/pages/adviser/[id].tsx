import React from "react";
import Clients from "@components/clients/Clients";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import Resources from "@components/testimonials/editItems/Add";
import { usegetTest } from "@apolloo/actions";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";
import EditAwards from "@components/awards/editAwards/EditAwards";
import { GetAwardsById } from "@apolloo/actions/rewards";
import EditAdviser from "@components/adviser/editAwards/EditAdviser";
import { getAdviserById } from "@apolloo/actions/adviser";
const Home: NextPage = withauth(() => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const { loading, error, data } = getAdviserById({
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

        <EditAdviser resources={data.getAdviserById} />
      </Section>
    </>
  );
}, "Testimonials");

export default Home;
