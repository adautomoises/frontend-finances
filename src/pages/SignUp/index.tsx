import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IErrorResponse } from "../../interfaces/axiosInterface";
import { api } from "../../services/api";

export function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    email: "",
    firstName: "",
    lastName: "",
    sex: "",
    birthDate: "",
  });

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (user.confirmPassword === user.password) {
      let request = {
        userName: user.userName,
        password: user.password,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        sex: user.sex,
        birthDate: user.birthDate,
      };

      api
        .post("/user/", request)
        .then((response) => {
          console.log(response.data);
          navigate("/entrar");
        })
        .catch((error: AxiosError<IErrorResponse>) => {
          if (error.response) {
            alert(error.response.data.message);
          }
        });
    } else {
      alert("Erro ao confirmar a senha!");
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
        <label htmlFor="userName">Usuário</label>
        <input type={"text"} id="userName" onChange={handleInputChange} />
        <label htmlFor="password">Senha</label>
        <input type={"password"} id="password" onChange={handleInputChange} />
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type={"password"}
          id="confirmPassword"
          onChange={handleInputChange}
        />
        <label htmlFor="email">E-mail</label>
        <input type={"email"} id="email" onChange={handleInputChange} />
        <label htmlFor="firstName">Nome</label>
        <input type={"text"} id="firstName" onChange={handleInputChange} />
        <label htmlFor="lastName">Sobrenome</label>
        <input type={"text"} id="lastName" onChange={handleInputChange} />
        <label htmlFor="sex">Sexo</label>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <input
            type={"radio"}
            value="MAN"
            id="sex"
            name="sex"
            onChange={handleInputChange}
          />
          Masculino
          <input
            type={"radio"}
            value="WOMAN"
            id="sex"
            name="sex"
            onChange={handleInputChange}
          />
          Feminino
        </div>
        <label htmlFor="birthDate">Data de Nascimento</label>
        <input type={"date"} id="birthDate" onChange={handleInputChange} />
        <button type="submit">Criar conta</button>
        <>
          {" "}
          Já possui uma conta?
          <button
            type="button"
            onClick={() => {
              navigate("/entrar");
            }}
          >
            Entrar
          </button>
        </>
      </form>
    </div>
  );
}
