import "./styles.css";
import { Link, Outlet, useLocation } from "react-router-dom";

import { ReactComponent as DashboardSVG } from "../assets/icons/dashboard.svg";
import { ReactComponent as HandSVG } from "../assets/icons/hand.svg";

export function DashboardLayout() {
  const location = useLocation();

  return (
    <div className="App">
      <section className="section-navigation">
        <nav className="navigation-area">
          <ul className="nav-buttons center">
            <li
              className={`nav-button center ${
                location.pathname === "/dashboard" ? "active" : "not-active"
              }`}
            >
              <DashboardSVG />
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li
              className={`nav-button center ${
                location.pathname === "/gastos" ? "active" : "not-active"
              }`}
            >
              <HandSVG />
              <Link to="/gastos">Gastos</Link>
            </li>
          </ul>
        </nav>
      </section>

      <Outlet />
    </div>
  );
}
