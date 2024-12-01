import styled from "styled-components";
import { Colors } from "../../Constants/Colors";

export const ModalWrapper = styled.div`
  display: ${({ aberto }) => (aberto ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${Colors.Preto};
  padding: 40px;
  border-radius: 10px;
  width: 400px;
  position: relative;
  border: 3px solid ${Colors.Branco};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Separacao = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
  text-align: center;
  gap: 10px;
`;

export const Input = styled.input`
  background-color: ${Colors.Cinza};
  padding: 21px;
  border-radius: 16px;
  color: ${Colors.Branco};
`;

export const BotaoEnviar = styled.button`
  position: absolute;
  bottom: 10px;
  right: 31%;
  background-color: ${Colors.Cinza};
  border: none;
  border-radius: 32px;
  padding: 16px 48px;
  color: ${Colors.Branco};
  margin-top: 50px;
  &:hover {
    background-color: ${Colors.Laranja};
    cursor: pointer;
    color: ${Colors.Preto};
  }
`;

export const TituloModal = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const BotaoFechar = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: ${Colors.Branco};
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: ${Colors.Vermelho};
  }
`;