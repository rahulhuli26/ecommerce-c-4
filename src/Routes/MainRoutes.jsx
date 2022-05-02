import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { Men } from "../components/Men";
import { Women } from "../components/Women";
import { Kids } from "../components/Kids";
import { HomeDecor } from "../components/HomeDecor";
import { Navbar } from "../components/Navbar";


const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/products/men"} element={<Men />} />
        <Route path={"/products/women"} element={<Women />} />
        <Route path={"/products/kids"} element={<Kids />} />
        <Route path={"/products/homedecor"} element={<HomeDecor />} />
        <Route path={"/products"} element={<Products />} />
      </Routes>
    </>
  )
};
export { MainRoutes };
