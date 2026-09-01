import React from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";
import Edit from "@components/career/editItems/Edit";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import { useGetOneCarrer } from "@apolloo/actions";

const Home: NextPage = withauth(() => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const { loading, error, data } = useGetOneCarrer({
    variables: { id: id },
  });

  if (loading) {
    return null;
  }

  console.log(data);

  return (
    <>
      <Navbar />

      <Section>
        <Sidebarr />
        <Edit career={data.getOneSlugCarrer} />
      </Section>
    </>
  );
}, "career");

export default Home;
