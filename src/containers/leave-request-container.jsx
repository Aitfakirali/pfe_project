import React from "react";
import { Outlet } from "react-router-dom";

const LeaveRequestContainer = () => {
  return (
    <div className="mt-10 space-y-20">
      <Outlet />
    </div>
  );
};

export default LeaveRequestContainer;
