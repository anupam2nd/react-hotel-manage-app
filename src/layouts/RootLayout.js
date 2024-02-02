import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";

export default function RootLayout() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}
