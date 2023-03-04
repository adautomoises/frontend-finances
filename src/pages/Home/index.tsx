import React from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const navigation = (param: string) => {
    navigate(param);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <h1>Bem-Vindo</h1>
      <button onClick={() => navigation("/entrar")}>Entrar</button>
      <button onClick={() => navigation("/cadastrar")}>Cadastrar</button>
    </div>
  );
}
