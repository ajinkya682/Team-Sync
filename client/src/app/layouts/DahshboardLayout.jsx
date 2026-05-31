import React from "react";
import { Outlet } from "react-router";

const DahshboardLayout = () => {
  return (
    <div>
      <h1>this is for navbar</h1>
      <Outlet />
    </div>
  );
};

export default DahshboardLayout;
