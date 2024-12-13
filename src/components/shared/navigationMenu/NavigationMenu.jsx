import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import Menus from "./Menus";
import { NavigationContext } from "../../../contentApi/navigationProvider";

const NavigationManu = () => {
  const { navigationOpen, setNavigationOpen } = useContext(NavigationContext);
  const pathName = useLocation().pathname;

  useEffect(() => {
    setNavigationOpen(false);
  }, [pathName]);

  return (
    <nav
      className={`nxl-navigation ${
        navigationOpen ? "mob-navigation-active" : ""
      }`}
    >
      <div className="navbar-wrapper">
        <div className="m-header">
          <Link to="/" className="b-brand">
            {/* <!-- ========   change your logo here   ============ --> */}
            <img
              src="/images/logo-full.png"
              alt="logo"
              className="logo logo-lg"
            />
            <img
              src="/images/logo-abbr.png"
              alt="logo"
              className="logo logo-sm"
            />
          </Link>
        </div>

        <div className={`navbar-content`}>
          <ul className="nxl-navbar">
            <li className="nxl-item nxl-caption">
              <label>Navigation</label>
            </li>
            <Menus />
          </ul>
        </div>
      </div>
      <div
        onClick={() => setNavigationOpen(false)}
        className={`${navigationOpen ? "nxl-menu-overlay" : ""}`}
      ></div>
    </nav>
  );
};

export default NavigationManu;
