import React from "react";
import type { NextPage } from "next";
import withauth from "../../hoc/withauth";
import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import { Section } from "@components/comman/Style";
import Add from "@components/role/add/Add";
import { getAllRole, useGetAllActiveTeam } from "@apolloo/actions";
const Home: NextPage = withauth(() => {
  const { data, loading } = getAllRole();
  const { data: team, loading: load } = useGetAllActiveTeam();
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />
        {!loading && !load && (
          <Add data={data.getAllRole} team={team.getAllActiveTeamMember} />
        )}
      </Section>
    </>
  );
}, "admin");

export default Home;
