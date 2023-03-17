import "./styles.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as DashboardSVG } from "../../assets/icons/dashboard.svg";
import { ReactComponent as HandSVG } from "../../assets/icons/hand.svg";
import { ReactComponent as FinancesSVG } from "../../assets/icons/finances.svg";

export function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="App">
      <section className="section-navigation">
        <div style={{ padding: "1rem" }}>
          <FinancesSVG />
        </div>
        <nav className="navigation-area">
          <ul className="nav-buttons center">
            <li
              className={`nav-button ${
                location.pathname === "/dashboard" ? "active" : "not-active"
              }`}
            >
              <button
                className="nav-button center"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                <DashboardSVG />
                Dashboard
              </button>
            </li>
            <li
              className={`nav-button ${
                location.pathname === "/gastos" ? "active" : "not-active"
              }`}
            >
              {" "}
              <button
                className="nav-button center"
                onClick={() => {
                  navigate("/gastos");
                }}
              >
                <HandSVG />
                Gastos
              </button>
            </li>
          </ul>
        </nav>
      </section>

      <Outlet />
    </div>
  );
}
