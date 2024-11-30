import React, { useState } from "react";
import axios from "axios";
import seta from "../../assets/Icons/Seta.svg";
import logo from "../../assets/Icons/SPOT..svg";
import voltar from "../../assets/Icons/voltar.svg";
import { useNavigate } from "react-router-dom";
import carregargif from "../../assets/spot.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Logo,
  DivTitulo,
  DivVoltar,
  Tudo,
  Inputs,
  Botao,
  Formulario,
  LoadingContainer,
  ImagemCarregando,
} from "../../Components/Style/StyledLogin";

export function Login({ Logando }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeSenha = (event) => {
    setPassword(event.target.value);
  };

  const logar = async (e) => {
    e.preventDefault();
    setCarregando(true);

    try {
      const response = await axios.post(
        "https://mqjnto3qw2.execute-api.us-east-1.amazonaws.com/default/user/login",
        { email, password }
      );
      const token = response.data.token;
      if (token) {
        localStorage.setItem("authenticacao", token);
        localStorage.setItem("email", email);
        console.log("Token armazenado com sucesso:", token);

        Logando();
        navigate("/home");
      }
      toast.success("Login Efetuado com sucesso!");
    } catch (error) {
      console.log(error.response);
      toast.error("Verifique os campos e tente novamente!");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div>
      <Logo>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </Logo>
      <Tudo>
        {carregando ? (
          <LoadingContainer>
            <ImagemCarregando src={carregargif} alt="Carregando" />
          </LoadingContainer>
        ) : (
          <>
            <DivTitulo>
              <DivVoltar>
                <a href="/">
                  <img src={voltar} alt="Seta voltar" />
                </a>
              </DivVoltar>
              <h2>Entrar</h2>
            </DivTitulo>
            <Formulario onSubmit={logar}>
              <Inputs
                type="text"
                value={email}
                onChange={onChangeEmail}
                placeholder="Email"
                required
              />
              <Inputs
                type="password"
                value={password}
                onChange={onChangeSenha}
                placeholder="Senha"
                required
              />
              <Botao type="submit" disabled={carregando}>
                Entrar
                <img src={seta} alt="setinha" />
              </Botao>
            </Formulario>
          </>
        )}
      </Tudo>
      <ToastContainer />
    </div>
  );
}
