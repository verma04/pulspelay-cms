import React from "react";
import Clients from "@components/user-log/vist";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />
        <Clients id={id} />
      </Section>
    </>
  );
}
