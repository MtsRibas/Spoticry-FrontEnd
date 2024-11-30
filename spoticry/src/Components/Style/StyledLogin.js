import styled from "styled-components";
import { Colors } from "../../Constants/Colors";

export const DivTitulo = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-right: 160px;
  color: ${Colors.Branco};
`;

export const DivVoltar = styled.div`
  margin-right: 90px;
  &:hover {
    cursor: pointer;
  }
`;

export const Inputs = styled.input`
  display: flex;
  width: 372px;
  padding: 21.333px 0px 21.33px 32px;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: ${Colors.Cinza};
  color: ${Colors.Branco};
  border: 2px solid transparent;
  &:hover {
    border: 2px solid ${Colors.Branco};
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  padding-top: 30px;
`;

export const Botao = styled.button`
  background-color: ${Colors.Cinza};
  padding: 15px 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  color: ${Colors.Branco};
  &:hover {
    cursor: pointer;
    background-color: ${Colors.Laranja};
    color: ${Colors.Preto};
  }
`;

export const Tudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  background-color: black;
  height: 92vh;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;
`;

export const LoadingContainer = styled.div``;

export const ImagemCarregando = styled.img`
  width: 400px;
`;
