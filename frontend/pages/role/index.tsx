import React from "react";
import Clients from "@components/clients/Clients";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import withAuth from "@/hocwithauth";
import Role from "@components/role/Role";

function role() {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />

        <Role />
      </Section>
    </>
  );
}

export default withAuth(role, "Role");
