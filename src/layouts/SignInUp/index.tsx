import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Header } from "./styles";
import { ReactComponent as LogoSVG } from "../../assets/icons/finances.svg";

export function SignInUpLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const navigation = (param: string) => {
    navigate(param);
  };
  return (
    <Container className="container">
      <Header>
        <LogoSVG />
        <div>
          {location.pathname !== "/entrar" && (
            <button onClick={() => navigation("/entrar")}>Entrar</button>
          )}
          {location.pathname !== "/cadastrar" && (
            <button onClick={() => navigation("/cadastrar")}>Cadastrar</button>
          )}
        </div>
      </Header>

      <Outlet />
    </Container>
  );
}
