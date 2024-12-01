import styled from "styled-components";
import { Colors } from "../../Constants/Colors";

export const Tudo = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const DivTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BotaoAdicionar = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
`;

export const ListItens = styled.li`
  background-color: ${Colors.Cinza};
  border-radius: 10px;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid ${Colors.Laranja};
    cursor: pointer;
  }
`;

export const BotaoExcluir = styled.button`
  background-color: transparent;
  color: ${Colors.Vermelho};
  font-size: 19px;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.Vermelho};
    color: ${Colors.Branco};
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ImagemCarregando = styled.img`
  width: 300px;
`;

export const Titulo = styled.h1`
  font-size: 50px;
`;

export const BotaoPaginacao = styled.button`
  background-color: ${Colors.Cinza};
  border: none;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  color: ${Colors.Branco};

  &:hover {
    background-color: ${Colors.Laranja};
    color: ${Colors.Preto};
    cursor: pointer;
  }
  &:disabled {
    background-color: ${Colors.CinzaClaro};
    cursor: not-allowed;
  }
`;
export const Paginacao = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const DivDadosMusica = styled.div`
  padding-right: 42%;
`;
