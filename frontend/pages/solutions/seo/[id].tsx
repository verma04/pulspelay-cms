import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Add from "@components/comman/seo/form";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import withauth from "@/hocwithauth";
import { useSolutionSeo, useSolutionEditSeo } from "@apolloo/actions";
const Home: NextPage = withauth(() => {
  const router = useRouter();

  const { data, loading, error } = useSolutionSeo({
    variables: { id: router.query.id },
  });

  const [add, { data: data1, error: err2, loading: loading3 }] =
    useSolutionEditSeo();

  console.log(data);

  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />
        {loading ? null : (
          <Add
            add={add}
            data1={data1}
            section={"solutions"}
            loading={loading3}
            data={data?.getSolutionsSeo}
            query={router.query}
          />
        )}
      </Section>
    </>
  );
}, "Solutions");

export default Home;
