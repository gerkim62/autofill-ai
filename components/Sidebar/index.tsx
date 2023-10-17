"use client";

import { useEffect, useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  FaUser,
  FaCode,
  FaCalendar,
  FaBook,
  FaBars,
  FaTimes,
  FaBullhorn,
  FaListUl,
  FaFileDownload,
  FaSearch,
  FaFileUpload,
  FaComments,
  FaCogs,
  FaTasks,
  FaDownload,
  FaRocket,
  FaInfo,
  FaInfoCircle,
} from "react-icons/fa";
import React from "react";
import Link from "next/link";
const LG_SCREEN_BREAKPOINT = 1024;
import Logo from "@/components/Logo";
import { Url } from "url";
import { SidebarItem } from "./SidebarItem";

const Sidebar = () => {
  const sidebarItems: SidebarItem[] = [
    {
      label: "About",
      path: "/about",
      icon: FaInfoCircle,
    },

    {
      label: "Install",
      path: "/install",
      icon: FaDownload,
    },
    {
      label: "Setup",
      path: "/setup",
      icon: FaCogs,
    },
    {
      label: "Usage",
      path: "/usage",
      icon: FaRocket,
    },
    {
      label: "Suggestions",
      path: "/suggestions",
      icon: FaComments,
    },
  ];

  const [sidebarShowing, setSidebarShowing] = useState(false);
  let [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    setIsLgScreen(
      window.matchMedia(`(min-width: ${LG_SCREEN_BREAKPOINT}px)`).matches
    );

    const mediaQuery = window?.matchMedia(
      `(min-width: ${LG_SCREEN_BREAKPOINT}px)`
    );

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsLgScreen(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    // Clean up the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return (
    <>
      {sidebarShowing && (
        // overlay div
        <div
          onClick={() => setSidebarShowing(false)}
          className="w-full h-full fixed bg-gray-500/50 z-50 lg:hidden"
        ></div>
      )}
      <button
        style={{ zIndex: 100 }}
        className="fixed left-4 top-2 z-10 border-2 p-1 lg:hidden"
        onClick={() => setSidebarShowing((prev) => !prev)}
      >
        {sidebarShowing ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      <div className="w-screen h-[60px] fixed top-0 z-[49] backdrop-blur-sm shadow-sm"></div>

      <Link
        href={"/"}
        className="z-[100] lg:hidden fixed right-4 top-4 text-lg font-bold "
      >
        Autofill AI
      </Link>

      <div
        style={{ zIndex: 100 }}
        className="lg:relative z-10 w-[270px] hidden lg:block"
      ></div>

      <div
        style={{ zIndex: 100 }}
        className={`fixed z-10 lg:bottom-0 lg-w-[270px] ${
          !isLgScreen && !sidebarShowing ? "bg-transparent" : ""
        }`}
      >
        <ProSidebar
          onBackdropClick={() => {
            setSidebarShowing(false);
          }}
          width={sidebarShowing || isLgScreen ? "270px" : "0"}
          // width="unset"
          toggled={false}
          className={`h-screen lg:h-[95vh] overflow-y-auto 
          overflow-x-hidden bg-white !lg:w-[270px]  ${
            sidebarShowing ? "!w-[270px]" : "!w-[0]"
          }`}
        >
          <Menu>
            <MenuItem
              onClick={() => setSidebarShowing(false)}
              component={<Link href={"/"}></Link>}
              className=""
            >
              <Logo />
            </MenuItem>
            {sidebarItems.map((item, index) => (
              <SidebarItem
                key={index}
                item={item}
                setSidebarShowing={setSidebarShowing}
              />
            ))}
          </Menu>
        </ProSidebar>
      </div>
    </>
  );
};
Sidebar.displayName = "Sidebar";
export default Sidebar;
