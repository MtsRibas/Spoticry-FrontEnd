import styled from "styled-components";
import { Colors } from "../../Constants/Colors";

export const Modal = styled.div`
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

export const ModalMusic = styled.div`
  width: 45%;
  border: 2px solid ${Colors.Cinza};
  height: 55%;
  padding: 40px;
  background-color: ${Colors.Preto};
  border-radius: 10px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${Colors.Cinza};
  cursor: pointer;
  color: ${Colors.Branco};
  &:hover {
    background-color: ${Colors.Laranja};
    color: ${Colors.Preto};
  }
  &:disabled {
    background-color: ${Colors.Cinza_Escuro};
    cursor: not-allowed;
  }
`;

export const BotaoFechar = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  color: ${Colors.Branco};
  margin-left: 200px;
  &:hover {
    color: ${Colors.Vermelho};
    cursor: pointer;
  }
`;

export const DivFecharModal = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Lista = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 12px;
`;

export const ListItens = styled.li`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 0px 20px;
  align-items: flex-start;
  text-align: left;
`;

export const DivImagem = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
`;
export const DivBotao = styled.div``;
export const BotaoAdicionar = styled.button`
  background-color: ${Colors.Cinza};
  border: 2px solid transparent;
  padding: 5px;
  border-radius: 5px;
  color: ${Colors.Branco};
  &:hover {
    background-color: ${Colors.Laranja};
    cursor: pointer;
    color: ${Colors.Preto};
  }
`;