import Header from "./header";
import Sidebar from "./sidebar";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <Router>
      <main className="min-h-screen grid grid-cols-12">
        <Sidebar />
        <section className="col-span-9">
          <Header />
          {children}
        </section>
      </main>
    </Router>
  );
};

export default Layout;
