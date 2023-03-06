import "./style.css";
import { ReactComponent as ProfileSVG } from "../../assets/icons/profile.svg";
import { ReactComponent as WalletSVG } from "../../assets/icons/wallet.svg";
import { ReactComponent as DollarSVG } from "../../assets/icons/dollar.svg";
import { ReactComponent as FlyingMoneySVG } from "../../assets/icons/flying-money.svg";
import { ReactComponent as ArrowDownSVG } from "../../assets/icons/arrow-down.svg";
import { ReactComponent as CalendarSVG } from "../../assets/icons/calendar.svg";
// import { ReactComponent as AlertSVG } from "../../assets/icons/alert.svg";

import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { DashboardProps } from "../../interfaces/dashboardInterface";
import { api } from "../../services/api";
import { formatDate } from "../../utils/formatDate";
import { useNavigate } from "react-router-dom";
import { IErrorResponse } from "../../interfaces/axiosInterface";

export function Dashboard() {
  const navigate = useNavigate();
  const userID = localStorage.getItem("@finances:userID-1.0.0");

  const [dashboardData, setDashboardData] = useState<DashboardProps>(
    {} as DashboardProps
  );

  useEffect(() => {
    const getDashboardData = () => {
      api
        .get("/user/dashboard", {
          params: {
            userID: userID,
          },
        })
        .then((response) => {
          setDashboardData(response.data);
        })
        .catch((error: AxiosError<IErrorResponse>) => {
          if (error.response) {
            console.log(error.response.data.message);
          }
        });
    };
    getDashboardData();
  }, [userID]);

  const [expandMenu, setExpandMenu] = useState<boolean>(false);

  const handleChangeExpandMenu = () => {
    setExpandMenu(!expandMenu);
  };

  const handleLogOut = () => {
    localStorage.removeItem("@finances:userID-1.0.0");
    navigate("/");
  };

  return (
    <div className="App">
      <section className="section-content">
        <header className="section-content-header">
          <button
            style={{
              appearance: "none",
              border: "none",
              background: "none",
            }}
            onClick={handleChangeExpandMenu}
          >
            <ProfileSVG />
          </button>
          <dialog
            open={expandMenu}
            style={{
              position: "relative",
            }}
          >
            <div className="menu center">
              {dashboardData?.user?.userName}
              <button onClick={handleLogOut}>Sair</button>
            </div>
          </dialog>
        </header>
        <main className="section-content-main">
          <section className="cards">
            <div className="card">
              <div className="card-header">
                <WalletSVG />
                <div className="dollar-circle">
                  <DollarSVG />
                </div>
              </div>
              <div className="card-content">
                <span className="card-value">
                  R$ {dashboardData?.wallet?.currentBalance}
                </span>
                <span className="card-name">Saldo atual</span>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <FlyingMoneySVG />
                <div className="arrow-circle">
                  <ArrowDownSVG />
                </div>
              </div>
              <div className="card-content">
                <span className="card-value">
                  R$ {dashboardData?.wallet?.monthlyExpense}
                </span>
                <span className="card-name">Gasto mensal</span>
              </div>
            </div>
            {dashboardData?.nextBilling?.length > 0 && (
              <div className="card">
                <div className="card-header">
                  <CalendarSVG />
                  <time className="card-datetime">
                    {dashboardData?.nextBilling &&
                      formatDate(dashboardData?.nextBilling[0].date)}
                  </time>

                  {dashboardData?.nextBilling?.length > 1 && (
                    <div className="alert-billings center">
                      +{dashboardData?.nextBilling?.length - 1}
                    </div>
                  )}
                  {/* <AlertSVG /> */}
                </div>
                <div className="card-content">
                  <span className="card-value">
                    R${" "}
                    {dashboardData?.nextBilling &&
                      dashboardData?.nextBilling[0].value}
                  </span>
                  <span className="card-name">
                    {dashboardData?.nextBilling &&
                      dashboardData?.nextBilling[0].title}
                  </span>
                </div>
              </div>
            )}
          </section>
          <section className="graphics">
            <div className="grafico-barras">
              <div className="colunas">
                <div className="escala-y">
                  {dashboardData?.graphicLine && (
                    <>
                      <div key={1} className="linha" style={{ bottom: "100%" }}>
                        R$ {dashboardData?.graphicLine[0]}
                      </div>
                      <div key={2} className="linha" style={{ bottom: "75%" }}>
                        R$ {dashboardData?.graphicLine[1]}
                      </div>
                      <div key={3} className="linha" style={{ bottom: "50%" }}>
                        R$ {dashboardData?.graphicLine[2]}
                      </div>
                      <div key={4} className="linha" style={{ bottom: "25%" }}>
                        R$ {dashboardData?.graphicLine[3]}
                      </div>
                    </>
                  )}
                </div>
                <div className="area-grafico">
                  <div className="area-barras">
                    {dashboardData?.typeSpent?.map((item) => (
                      <div key={item.id} className="divisao">
                        <div
                          className={`barra ${item.color}`}
                          style={{
                            height: `${item.columPercentage}%`,
                          }}
                        >
                          <div className="valor-barra">
                            R$ {item.totalSpent}
                          </div>
                        </div>
                        <div className="nome-barra">{item.name}</div>
                      </div>
                    ))}
                    <span style={{ bottom: "100%" }}></span>
                    <span style={{ bottom: "75%" }}></span>
                    <span style={{ bottom: "50%" }}></span>
                    <span style={{ bottom: "25%" }}></span>
                  </div>
                  <div className="escala-x"></div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}
