import "./styles";
import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IErrorResponse } from "../../interfaces/axiosInterface";
import { api } from "../../services/api";
import { Container, Form, Input } from "./styles";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

export function ForgetPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [code, setCode] = useState<number>();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [sendCode, setSendCode] = useState<boolean>(false);
  const [codeValid, setCodeValid] = useState<boolean>(false);

  const forgetPassword = () => {
    if (email !== "") {
      setSendCode(true);
      api
        .get("/user/forgetPassword", {
          params: {
            email: email,
          },
        })
        .then((response) => {
          alert(response.data.message);
          setStep(2);
        })
        .catch((error: AxiosError<IErrorResponse>) => {
          if (error.response) {
            alert(error.response.data.message);
          }
          setSendCode(false);
        });
    } else {
      alert("Informe seu e-mail!");
    }
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
          setStep(3);
        }
      })
      .catch((error: AxiosError<IErrorResponse>) => {
        if (error.response) {
          alert(error.response.data.message);
        }
        setCodeValid(false);
        setStep(2);
      });
  };
  const getForgetPassword = () => {
    if (codeValid) {
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
    } else {
      alert("Código inválido!");
      setStep(2);
    }
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
    <Container>
      {step === 1 && (
        <Form>
          <h1>Recuperar senha</h1>
          <span>Digite o seu E-mail</span>
          <Input>
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              onChange={handleInputSetEmail}
            />
            <EmailIcon />
          </Input>
          <button
            disabled={sendCode}
            style={{ cursor: sendCode ? "default" : "pointer" }}
            type="button"
            onClick={forgetPassword}
          >
            ENVIAR CÓDIGO
          </button>
        </Form>
      )}
      {step === 2 && (
        <Form>
          <h1>Recuperar senha</h1>
          <span>Seu E-mail: {email}</span>
          <span>Digite o Código:</span>
          <Input>
            <input
              type="number"
              id="code"
              placeholder="000000"
              onChange={handleInputSetCode}
            />
            <VpnKeyIcon />
          </Input>

          <button type="button" onClick={validForgetPassword}>
            VALIDAR
          </button>
        </Form>
      )}
      {step === 3 && (
        <Form>
          <h1>Recuperar senha</h1>
          <span>Seu E-mail: {email}</span>
          <span>Digite sua nova senha</span>
          <Input>
            <input
              id="password"
              type="password"
              onChange={handleInputSetPassword}
            />
            <LockIcon />
          </Input>
          <button type="button" onClick={getForgetPassword}>
            ALTERAR SENHA
          </button>
        </Form>
      )}
    </Container>
  );
}
