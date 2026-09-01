import React from "react";
import Clients from "@components/clients/Clients";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import Resources from "@components/resources/editItems/Add";
import { useGetOneResources } from "@apolloo/actions";
import { useRouter } from "next/router";
export default function index() {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);
  const { loading, error, data } = useGetOneResources({
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

        <Resources resources={data.getResourcesById} />
      </Section>
    </>
  );
}
