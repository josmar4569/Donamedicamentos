import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Politicas } from "./pages/politicas";
import { QuienesSomos } from "./pages/quienesSomos";
import { Catalogo } from "./pages/catalogo";
import { Donaciones } from "./pages/donaciones";
import { Contacto } from "./pages/contacto";
import { Patrocinantes } from "./pages/patrocinantes";
import { MisionVision } from "./pages/misionVision";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
            <Route element={<Politicas />} path="/politicas" />
            <Route element={<QuienesSomos />} path="/quienesSomos" />
            <Route element={<Catalogo />} path="/catalogo" />
            <Route element={<Donaciones />} path="/donaciones" />
            <Route element={<Contacto />} path="/contacto" />
            <Route element={<Patrocinantes />} path="/patrocinantes" />
            <Route element={<MisionVision />} path="/misionVision" />
            <Route element={<Demo />} path="/demo" />
            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
