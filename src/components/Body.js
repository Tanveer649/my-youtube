import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    // <div className="flex">
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      {/* <MainContainer />
      <WatchPage /> */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};
// 👉 Sidebar is always rendered because it is outside of the <Outlet>.
// 👉 The <Outlet> is what changes depending on the route (/ shows MainContainer, /watch shows WatchPage, etc.).

// So the sidebar is fixed, and only the main content inside <Outlet> swaps based on the route.

export default Body;
