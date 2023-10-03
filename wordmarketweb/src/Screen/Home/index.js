import { Button, Input } from "../../components";
import "./index.css";

export const HomeScreen = () => {
  return (
    <section className="home-screen-container">
      <div className="home-screen-content">
        <div className="home-screen-content-container">
          <img
            className="imagem-home"
            src="/images/image__page_home.svg"
            alt="imagem-page-home"
          />
          <h1 className="title-home">
            "Descubra um Mundo de Qualidade: Sua Plataforma Global de Compras
            Online!"
          </h1>
          <Input
            label="Username : "
            placeholder="Digite seu nome aqui..."
          ></Input>
          <Button>ACESSAR</Button>
        </div>
      </div>
    </section>
  );
};
