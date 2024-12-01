import styled from "styled-components";
import { Colors } from "../../Constants/Colors";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  background-color: ${Colors.Cinza};
  padding: 21px;
  border-radius: 16px;
  color: ${Colors.Branco};
`;

export const BotaoEnviar = styled.button`
  background-color: ${Colors.Cinza};
  border: none;
  border-radius: 32px;
  padding: 16px 48px;
  color: ${Colors.Branco};
  &:hover {
    background-color: ${Colors.Laranja};
    cursor: pointer;
    color: ${Colors.Preto};
  }
`;