import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import SectionTH from "../components/Section";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web next</title>
      </Head>
      <Nav />
      <Header />
      <SectionTH />
   
    </>
  );
}
