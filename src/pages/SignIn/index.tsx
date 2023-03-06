import { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

interface IErrorResponse {
  message: string;
}

export function SignIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    emailOrUsername: "",
    password: "",
  });

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (user.emailOrUsername !== "" && user.password !== "") {
      let request = {
        emailOrUsername: user.emailOrUsername,
        password: user.password,
      };
      api
        .post("/login/", request)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("@finances:userID-1.0.0", response.data.user.id);
          navigate("/dashboard");
        })
        .catch((error: AxiosError<IErrorResponse>) => {
          if (error.response) {
            console.log(error.response.data.message);
          }
        });
    } else {
      alert("Preencha todos os campos!");
    }
  };

  const handleInputChange = (event: { target: { id: any; value: any } }) => {
    const { id, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (localStorage.getItem("@finances:userID-1.0.0")) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div>
      <form
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 10,
        }}
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Voltar
        </button>
        <label htmlFor="emailOrUsername">Usuário</label>
        <input
          type={"text"}
          id="emailOrUsername"
          onChange={handleInputChange}
        />
        <label htmlFor="password">Senha</label>
        <input type={"password"} id="password" onChange={handleInputChange} />
        <Link to="/recuperar-senha">Esqueci a senha</Link>
        <button type="submit">Entrar</button>
        <>
          Não possui uma conta?
          <button
            type="button"
            onClick={() => {
              navigate("/cadastrar");
            }}
          >
            Cadastrar
          </button>
        </>
      </form>
    </div>
  );
}
