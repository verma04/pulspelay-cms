import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import Navbar from "../components/Layout/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import Sidebarr from "../components/Layout/Sidebarr/Sidebarr";
import { Section } from "../components/comman/Style";
import Dashboard from "../components/Dashboard/Dashboard";

import withAuth from "../hoc/withauth";

const Home = () => {
  return (
    <>
      <Navbar />

      <Section>
        <Sidebarr />

        <Dashboard />
      </Section>
    </>
  );
};

export default withAuth(Home, "home");
