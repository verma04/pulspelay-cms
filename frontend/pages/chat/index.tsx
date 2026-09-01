import Navbar from "@components/Layout/Navbar/Navbar";
import Sidebarr from "@components/Layout/Sidebarr/Sidebarr";
import Chat from "@components/chat/vist";
import { Section } from "@components/comman/Style";
import React from "react";

const index = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Sidebarr />
        <Chat />
      </Section>
    </>
  );
};

export default index;
