import "./styles.css";
import {
  Form,
  Input,
  GoogleOrFacebook,
  LoginOrRegister,
  SaveOrForget,
  BackButton,
} from "./styles";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

interface IErrorResponse {
  message: string;
}

export function SignIn() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
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
            alert(error.response.data.message);
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
    <div className="center">
      <Form onSubmit={handleSubmit}>
        <div className="header">
          <BackButton
            className="center"
            type="button"
            onClick={() => {
              navigate("/");
            }}
          >
            <ArrowBackIcon fontSize="large" />
          </BackButton>
          <h1 className="form-title">Login</h1>
        </div>
        <section className="form-inputs">
          <Input>
            <input
              id="emailOrUsername"
              type="text"
              placeholder="Email"
              onChange={handleInputChange}
            />
            <EmailIcon />
          </Input>
          <Input>
            <input
              id="password"
              type="password"
              placeholder="Senha"
              onChange={handleInputChange}
            />
            <LockIcon />
          </Input>
        </section>
        <SaveOrForget className="save-forget">
          <div className="save-password">
            <input
              id="save-password"
              type="checkbox"
              name="save-password"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <p>
              <span>Salvar senha</span>
            </p>
          </div>
          <a href="/recuperar-senha">Esqueci a senha</a>
        </SaveOrForget>
        <LoginOrRegister className="form-buttons">
          <button className="login-button" type="submit">
            <p>
              <span>ENTRAR</span>
            </p>
          </button>
        </LoginOrRegister>
        <GoogleOrFacebook className="alternative-login">
          <p>
            <span>OU</span>
          </p>
          <button
            disabled
            style={{ cursor: "default" }}
            className="login-google"
            type="button"
          >
            <GoogleIcon color="success" />
            <p>
              <span>Continuar com Google</span>
            </p>
          </button>
          <button
            disabled
            style={{ cursor: "default" }}
            className="login-facebook"
            type="button"
          >
            <FacebookIcon color="info" />
            <p>
              <span>Continuar com Facebook</span>
            </p>
          </button>
        </GoogleOrFacebook>
      </Form>
    </div>
  );
}
