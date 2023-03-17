import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { IErrorResponse } from "../../interfaces/axiosInterface";
import { DashboardProps } from "../../interfaces/dashboardInterface";

import {
  BillingProps,
  SpentProps,
  TypeSpentProps,
} from "../../interfaces/spendingInterface";
import { api } from "../../services/api";

export function Spending() {
  const userID = localStorage.getItem("@finances:userID-1.0.0");
  const [dashboardData, setDashboardData] = useState<DashboardProps>(
    {} as DashboardProps
  );

  const [billing, setBilling] = useState<BillingProps>({
    id: "",
    date: "",
    description: "",
    title: "",
    value: "",
  });
  const [spent, setSpent] = useState<SpentProps>({
    typeName: "",
    date: "",
    description: "",
    title: "",
    value: "",
  });
  const [typeSpent, setTypeSpent] = useState<TypeSpentProps>({
    color: "",
    name: "",
  });

  const handleInputSetBilling = (event: {
    target: { id: any; value: any };
  }) => {
    const { id, value } = event.target;
    setBilling((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleInputSetSpent = (event: { target: { id: any; value: any } }) => {
    const { id, value } = event.target;
    setSpent((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleInputSetTypeSpent = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setTypeSpent((prevState) => ({
      ...prevState,
      color: value,
    }));
  };

  const handleCreateNextBilling = () => {
    if (billing.value === "") {
      alert("Adicione um valor!");
    } else if (billing.date === "") {
      alert("Adicione uma data!");
    } else if (billing.date !== "" && billing.value !== "") {
      api
        .post("/billing", billing, {
          params: {
            userId: userID,
          },
        })
        .catch((error: AxiosError<IErrorResponse>) => {
          if (error.response) {
            alert(error.response.data.message);
          }
        });
    }
  };
  const handleDeleteNextBilling = (item: BillingProps) => {
    api
      .delete("/billing", {
        params: {
          userId: userID,
          billingId: item.id,
        },
      })
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error: AxiosError<IErrorResponse>) => {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  };
  const handleCreateSpent = () => {
    if (spent.value !== "") {
      api
        .post("/spent", spent, {
          params: {
            userId: userID,
            typeName: spent.typeName,
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error: AxiosError<IErrorResponse>) => {
          if (error.response) {
            alert(error.response.data.message);
          }
        });
    } else {
      alert("Adicione um valor!");
    }
  };
  const handleCreateTypeSpent = () => {
    if (typeSpent.color === "") {
      alert("Selecione uma cor!");
    } else {
      api
        .post("/spent/typeSpent", typeSpent, {
          params: {
            userId: userID,
          },
        })
        .then((response) => {
          alert(response.data.message);
        })
        .catch((error: AxiosError<IErrorResponse>) => {
          if (error.response) {
            alert(error.response.data.message);
          }
        });
    }
  };

  useEffect(() => {
    const getDashboardData = () => {
      api
        .get("/dashboard", {
          params: {
            userId: userID,
          },
        })
        .then((response) => {
          setDashboardData(response.data);
        })
        .catch((error: AxiosError<IErrorResponse>) => {
          if (error.response) {
            alert(error.response.data.message);
          }
        });
    };
    getDashboardData();
  }, [userID]);

  return (
    <div
      style={{
        overflow: "scroll",
        width: "100vw",
      }}
    >
      <h1>Adicionar Gastos</h1>
      <section
        style={{
          display: "flex",
          gap: 100,
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <h2>Adicionar o próximo pagamento</h2>
          <form
            onSubmit={handleCreateNextBilling}
            style={{
              flexDirection: "column",
              gap: 10,
            }}
            className="center"
          >
            <label htmlFor="title">Título</label>
            <input type="text" id="title" onChange={handleInputSetBilling} />

            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              id="description"
              onChange={handleInputSetBilling}
            />

            <label htmlFor="date">Data*</label>
            <input type="date" id="date" onChange={handleInputSetBilling} />

            <label htmlFor="value">Valor*</label>
            <input type="number" id="value" onChange={handleInputSetBilling} />

            <button type="submit">Adicionar próximo pagamento</button>
          </form>
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <h2>Adicionar gasto</h2>
          <form
            onSubmit={handleCreateSpent}
            style={{
              flexDirection: "column",
              gap: 10,
            }}
            className="center"
          >
            <label htmlFor="title">Título</label>
            <input type="text" id="title" onChange={handleInputSetSpent} />

            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              id="description"
              onChange={handleInputSetSpent}
            />
            <label htmlFor="typeName">Tipo de gasto</label>
            <input type="text" id="typeName" onChange={handleInputSetSpent} />

            <label htmlFor="date">Data</label>
            <input type="date" id="date" onChange={handleInputSetSpent} />

            <label htmlFor="value">Valor*</label>
            <input type="number" id="value" onChange={handleInputSetSpent} />

            <button type="submit">Adicionar um gasto</button>
          </form>
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <h2>Adicionar tipos de gasto</h2>
          <form
            onSubmit={handleCreateTypeSpent}
            style={{
              flexDirection: "column",
              gap: 10,
            }}
            className="center"
          >
            <label htmlFor="title">Título</label>
            <input type="text" id="title" onChange={handleInputSetTypeSpent} />

            <label htmlFor="color">Cor*</label>
            <select
              defaultValue={""}
              onChange={handleInputSetTypeSpent}
              style={{
                backgroundColor: `${typeSpent.color !== "" && typeSpent.color}`,
              }}
            >
              <option value="" disabled>
                Selecione uma Cor
              </option>
              <option style={{ backgroundColor: "#ee82d1" }} value="PINK">
                ROSA
              </option>
              <option style={{ backgroundColor: "#8e80ef" }} value="PURPLE">
                ROXO
              </option>
              <option style={{ backgroundColor: "#f0fb64" }} value="YELLOW">
                AMARELO
              </option>
              <option style={{ backgroundColor: "#88ec8b" }} value="GREEN">
                VERDE
              </option>
              <option style={{ backgroundColor: "#ffb404" }} value="ORANGE">
                LARANJA
              </option>
              <option style={{ backgroundColor: "#f36464" }} value="RED">
                VERMELHO
              </option>
              <option style={{ backgroundColor: "#6d98ef" }} value="BLUE">
                AZUL
              </option>
            </select>

            <button type="submit">Adicionar um tipo de gasto</button>
          </form>
        </section>
      </section>
      <h1>Deletar Próximo pagamento</h1>
      <section>
        {dashboardData?.nextBilling?.map((item) => (
          <ul key={item.id}>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <li>{item.description}</li>
            <li>{item.date}</li>
            <li>{item.value}</li>
            <button
              onClick={() => {
                handleDeleteNextBilling(item);
              }}
            >
              Deletar próximo pagamento
            </button>
            <br />
            <br />
          </ul>
        ))}
      </section>
    </div>
  );
}
