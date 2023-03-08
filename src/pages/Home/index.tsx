import "./styles.css";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const navigation = (param: string) => {
    navigate(param);
  };

  return (
    <section className="home center">
      <div className="container center">
        <h1>Bem-Vindo</h1>
        <button className="button green" onClick={() => navigation("/entrar")}>
          Entrar
        </button>
        <button
          className="button pink"
          onClick={() => navigation("/cadastrar")}
        >
          Cadastrar
        </button>
      </div>
    </section>
  );
}
