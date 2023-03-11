import "./styles.css";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IErrorResponse } from "../../interfaces/axiosInterface";
import { api } from "../../services/api";

export function ForgetPassword() {
  const navigate = useNavigate();
  const [code, setCode] = useState<number>();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [sendCode, setSendCode] = useState<boolean>(false);
  const [codeValid, setCodeValid] = useState<boolean>(false);

  const forgetPassword = () => {
    setSendCode(true);

    api
      .get("/user/forgetPassword", {
        params: {
          email: email,
        },
      })
      .then((response) => {
        alert(response.data.message);
        setSendCode(true);
      })
      .catch((error: AxiosError<IErrorResponse>) => {
        if (error.response) {
          alert(error.response.data.message);
        }
        setSendCode(false);
      });
  };
  const validForgetPassword = () => {
    api
      .get("/user/validForgetPassword", {
        params: {
          email: email,
          code: code,
        },
      })
      .then((response) => {
        if (response.data === true) {
          setCodeValid(true);
        }
      })
      .catch((error: AxiosError<IErrorResponse>) => {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  };
  const getForgetPassword = () => {
    api
      .get("/user/patchForgetPassword", {
        params: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
        alert(response.data.message);
        navigate("/entrar");
      })
      .catch((error: AxiosError<IErrorResponse>) => {
        if (error.response) {
          alert(error.response.data.message);
        }
      });
  };

  const handleInputSetEmail = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setEmail(value);
  };
  const handleInputSetCode = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setCode(value);
  };
  const handleInputSetPassword = (event: { target: { value: any } }) => {
    const { value } = event.target;
    setPassword(value);
  };

  return (
    <div>
      {sendCode === true ? (
        codeValid === true ? (
          <form className="form">
            <label htmlFor="email">Seu E-mail:</label>
            <span>{email}</span>

            <label htmlFor="password">Digite sua nova senha</label>
            <input
              id="password"
              type="password"
              onChange={handleInputSetPassword}
            />
            <button type="button" onClick={getForgetPassword}>
              Alterar senha
            </button>
          </form>
        ) : (
          <form className="form">
            <label htmlFor="email">Seu E-mail:</label>
            <span>{email}</span>

            <label htmlFor="code">Digite o Código</label>
            <input type="number" id="code" onChange={handleInputSetCode} />

            <button type="button" onClick={validForgetPassword}>
              Validar
            </button>
          </form>
        )
      ) : (
        <form className="form">
          <label htmlFor="email">Digite o seu E-mail</label>
          <input type="email" id="email" onChange={handleInputSetEmail} />
          <button type="button" onClick={forgetPassword}>
            Enviar Código de Recuperação
          </button>
        </form>
      )}
    </div>
  );
}
