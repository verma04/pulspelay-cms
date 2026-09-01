import React from "react";
import Clients from "@components/clients/Clients";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import Resources from "@components/resources/types/add";
import { useGetTypes } from "@apolloo/actions";
export default function index() {
  const { data, error, loading } = useGetTypes();

  console.log(data, "sds");
  if (loading) {
    return null;
  }
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <Resources data={data?.getResourcesTypes} />
      </Section>
    </>
  );
}
