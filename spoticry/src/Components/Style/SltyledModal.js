import styled from "styled-components";
import { Colors } from "../../Constants/Colors";

export const Aberto = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Conteudo = styled.div`
  padding: 50px 50px 100px 50px;
  border: 3px solid ${Colors.Branco};
  border-radius: 8px;
  max-width: 350px;
  width: 100%;
  position: relative;
  background-color: black;
`;

export const BotaoFechar = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${Colors.Branco};
`;