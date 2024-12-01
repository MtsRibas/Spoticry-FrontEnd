import React from "react";
import logo from "../../assets/Icons/SPOT..svg";
import foto1 from "../../assets/Foto112.png";
import foto2 from "../../assets/Foto2.png";
import foto3 from "../../assets/Foto3.png";
import icon1 from "../../assets/Icons/Music.svg";
import icon2 from "../../assets/Icons/play.svg";
import icon3 from "../../assets/Icons/world.svg";
import icon4 from "../../assets/Icons/disco.svg";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../Components/Rotas/Cordinator";
import {
  Banner,
  Header,
  BotaoLogin,
  GeneroBanner,
  TituloGender,
  Lista,
  ListItem,
  TextoDetalhe,
  Specify,
  DivFotos,
  DivEspecificacoes,
  Detalhes,
  DetalhesInfo,
  DivInfo,
  SessionStart,
  Botao,
  Footer,
  Detail,
  Desenvolvido,
} from "../../Components/Style/StyledLandingPage";

export function LandingPage() {
  const navigate = useNavigate();
  const goLogin = () => {
    goToLoginPage(navigate);
  };
  return (
    <div>
      <Banner>
        <Header>
          <img src={logo} alt="logo" />
          <BotaoLogin onClick={goLogin} aria-label="Entrar na conta">
            Entrar na conta
          </BotaoLogin>
        </Header>
      </Banner>
      <GeneroBanner>
        <TituloGender>Todos os melhores genêros</TituloGender>

        <Lista>
          <ListItem>
            <p>ROCK</p>
          </ListItem>
          <ListItem>
            <p>FORRÓ</p>
          </ListItem>
          <ListItem>
            <p>POP</p>
          </ListItem>
          <ListItem>
            <p>FUNK</p>
          </ListItem>
        </Lista>

        <TextoDetalhe>e muito mais</TextoDetalhe>
      </GeneroBanner>
      <Specify>
        <h3>Disponibilize sua música para todos</h3>
        <DivFotos>
          <DivEspecificacoes>
            <img src={foto1} alt="foto1"></img>
            <p>Todos os nichos na sua mão</p>
          </DivEspecificacoes>
          <DivEspecificacoes>
            <img src={foto2} alt="foto2"></img>
            <p>Suporte 100% para artistas</p>
          </DivEspecificacoes>
          <DivEspecificacoes>
            <img src={foto3} alt="foto3"></img>
            <p>Maior visibilidade nacional</p>
          </DivEspecificacoes>
        </DivFotos>
      </Specify>
      <Detalhes>
        <h2>Com as melhores vantagens</h2>
        <DetalhesInfo>
          <DivInfo>
            <img src={icon1} alt="icon music" />

            <p>+ 500 músicas</p>
          </DivInfo>
          <DivInfo>
            <img src={icon2} alt="icon play" />
            <p>
              Envie sua música <br />
              com um toque
            </p>
          </DivInfo>

          <DivInfo>
            <img src={icon3} alt="icon world" />
            <p>
              Poder de escutar
              <br /> offline
            </p>
          </DivInfo>
          <DivInfo>
            <img src={icon4} alt="icon disco" />
            <p>Qualidade superior</p>
          </DivInfo>
        </DetalhesInfo>
      </Detalhes>
      <SessionStart>
        <p>Inicie sua sessão e faça parte</p>

        <Botao onClick={goLogin} aria-label="Começar a ouvir">
          COMECE A ESCUTAR
        </Botao>
      </SessionStart>
      <Footer>
        <img src={logo} alt="logo" />
        <Detail></Detail>
        <Desenvolvido>Desenvolvido por Crias</Desenvolvido>
      </Footer>
    </div>
  );
}
