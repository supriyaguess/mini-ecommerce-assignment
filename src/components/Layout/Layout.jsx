import React from "react";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout-root">
      <header className="layout-header">
        <h1>Mini E‑Commerce</h1>
      </header>
      <main className="layout-main">{children}</main>
    </div>
  );
};

export default Layout;
