import React from "react";
import "./../styles/index.scss";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
    </div>
  );
};

export default Layout;
