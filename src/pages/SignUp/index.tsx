import "./animation.css";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IErrorResponse } from "../../interfaces/axiosInterface";
import { api } from "../../services/api";

import {
  Form,
  BackButton,
  Container,
  Header,
  FormSteps,
  StepOne,
  StepTwo,
  FormInputs,
  PreviousStepButton,
  NextStepButton,
  Input,
  FormButtons,
  ConfirmButton,
  Select,
  StepOneContainer,
  StepTwoContainer,
} from "./styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ShieldIcon from "@mui/icons-material/Shield";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
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

  const nextStep = () => {
    setStep(2);
  };
  const lastStep = () => {
    setStep(1);
  };

  useEffect(() => {
    if (localStorage.getItem("@finances:userID-1.0.0")) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <Container>
      <Form>
        <div style={{ display: "flex", width: "100%" }}>
          <BackButton
            className="center"
            type="button"
            onClick={() => {
              navigate("/entrar");
            }}
          >
            <ArrowBackIcon fontSize="large" />
          </BackButton>
          <Header>
            <FormSteps>
              <div>
                <StepOne></StepOne>
                <StepTwo
                  style={{
                    backgroundColor:
                      step === 2 ? "var(--ORANGE)" : "var(--WHITE)",
                  }}
                ></StepTwo>
              </div>
              <p>
                <span>{step}/2</span>
              </p>
            </FormSteps>
            <div>
              <h1>Criar sua conta</h1>
              <ShieldIcon />
            </div>
          </Header>
        </div>
        <FormInputs>
          <StepOneContainer
            className={step === 1 ? "active-one" : "not_active-one"}
          >
            <Input>
              <input
                id="userName"
                type="text"
                placeholder="Usuário"
                onChange={handleInputChange}
              />
              <AccountBoxIcon />
            </Input>
            <Input>
              <input
                id="email"
                type="email"
                placeholder="E-mail"
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
            <Input>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirmar senha"
                onChange={handleInputChange}
              />
              <LockIcon />
            </Input>
          </StepOneContainer>
          <StepTwoContainer
            className={step === 2 ? "active-two" : "not_active-two"}
          >
            <Input>
              <input
                id="firstName"
                type="text"
                placeholder="Nome"
                onChange={handleInputChange}
                style={{ height: "42.667px" }}
              />
              {/* <AccountBoxIcon /> */}
            </Input>
            <Input>
              <input
                id="lastName"
                type="email"
                placeholder="Sobrenome"
                onChange={handleInputChange}
                style={{ height: "42.667px" }}
              />
              {/* <EmailIcon /> */}
            </Input>
            <Input>
              <input type="date" id="birthDate" onChange={handleInputChange} />
            </Input>
            <Select>
              <div id="arrow-down" className="arrow-down">
                <ArrowDropDownIcon />
              </div>
              <select id="sex" defaultValue="" onChange={handleInputChange}>
                <option value="" disabled>
                  Gênero
                </option>
                <option value="MAN">Masculino</option>
                <option value="WOMAN">Feminino</option>
              </select>
            </Select>
          </StepTwoContainer>
        </FormInputs>
        {step === 1 && (
          <FormButtons>
            <PreviousStepButton
              disabled
              style={{
                cursor: "default",
              }}
              type="button"
            >
              VOLTAR
            </PreviousStepButton>
            <NextStepButton type="button" onClick={nextStep}>
              PRÓXIMO
            </NextStepButton>
          </FormButtons>
        )}
        {step === 2 && (
          <FormButtons>
            <PreviousStepButton
              style={{
                cursor: "pointer",
              }}
              type="button"
              onClick={lastStep}
            >
              VOLTAR
            </PreviousStepButton>
            <ConfirmButton type="button" onClick={handleSubmit}>
              CONFIRMAR
            </ConfirmButton>
          </FormButtons>
        )}
      </Form>
    </Container>
  );
}
