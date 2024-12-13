import React, { useContext, useEffect, useState } from "react";
import { FiAlignLeft, FiMoon, FiSun } from "react-icons/fi";
import ProfileModal from "./ProfileModal";
import { NavigationContext } from "../../../contentApi/navigationProvider";

const Header = () => {
  const { navigationOpen, setNavigationOpen } = useContext(NavigationContext);
  const [openMegaMenu, setOpenMegaMenu] = useState(false);

  useEffect(() => {
    if (openMegaMenu) {
      document.documentElement.classList.add("nxl-lavel-mega-menu-open");
    } else {
      document.documentElement.classList.remove("nxl-lavel-mega-menu-open");
    }
  }, [openMegaMenu]);

  const handleThemeMode = (type) => {
    if (type === "dark") {
      document.documentElement.classList.add("app-skin-dark");
      localStorage.setItem("skinTheme", "dark");
    } else {
      document.documentElement.classList.remove("app-skin-dark");
      localStorage.setItem("skinTheme", "light");
    }
  };

  useEffect(() => {
    const savedSkinTheme = localStorage.getItem("skinTheme");
    handleThemeMode(savedSkinTheme);
  }, []);

  return (
    <header className="nxl-header">
      <div className="header-wrapper d-flex justify-content-between align-items-center">
        {/* Header Left */}
        <div className="header-left d-flex align-items-center gap-4">
          {/* Mobile Menu Toggle */}
          <a
            href="#"
            className="nxl-head-mobile-toggler"
            onClick={(e) => {
              e.preventDefault();
              setNavigationOpen(true);
            }}
            id="mobile-collapse"
          >
            <div
              className={`hamburger hamburger--arrowturn ${
                navigationOpen ? "is-active" : ""
              }`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </a>
        </div>

        {/* Header Right (Top Right Position) */}
        <div className="header-right d-flex align-items-center gap-3">
          {/* Theme Toggle */}
          <div className="nxl-h-item dark-light-theme">
            <div
              className="nxl-head-link me-0 dark-button"
              onClick={() => handleThemeMode("dark")}
            >
              <FiMoon size={20} />
            </div>
            <div
              className="nxl-head-link me-0 light-button"
              onClick={() => handleThemeMode("light")}
              style={{ display: "none" }}
            >
              <FiSun size={20} />
            </div>
          </div>
          {/* Profile */}
          <ProfileModal />
        </div>
      </div>
    </header>
  );
};

export default Header;
