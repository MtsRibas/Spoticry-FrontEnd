import styled from "styled-components";
import { Colors } from "../../Constants/Colors";

export const Logo = styled.div`
  padding-top: 30px;
`;

export const Botao = styled.button`
  padding: 16px 48px;
  border-radius: 16px;
  background-color: ${Colors.Branco};
  color: ${Colors.Preto};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.Laranja};
  }
`;
export const Tudo = styled.div`
  height: 100vh;
`;
export const ContainerErro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;
