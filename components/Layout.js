import React from "react";
import Nav from "./Nav";
import Header from "./Header";
import SectionTH from "./Section";
import SimpleMap from "./GooglMap"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />
      <SectionTH/>
      <SimpleMap/>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
