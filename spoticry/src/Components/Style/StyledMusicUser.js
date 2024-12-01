import styled from "styled-components";
import { Colors } from "../../Constants/Colors";

export const Tudo = styled.div`
  background-color: ${Colors.Preto};
  min-height: 100vh;
  display: flex;
`;

export const ConteudoPrincipal = styled.div`
  flex: 1;
`;

export const PlayerWrapper = styled.div`
  width: 20px;
`;

export const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BotaoAdicionar = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

export const FiltroContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

export const BotaoReproduzir = styled.button`
  background-color: ${Colors.Laranja};
  color: ${Colors.Preto};
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.Preto};
    color: ${Colors.Laranja};
  }
`;

export const ListItens = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.Cinza};
  border-radius: 10px;
  padding: 15px;
  height: 100px;
  min-height: 80px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${Colors.Laranja};
    cursor: pointer;
  }
`;

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin-top: 10px;
`;

export const TituloMusicas = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word;
  white-space: normal;
  overflow: hidden;

  h4 {
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

export const Botoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const BotaoDeletar = styled.button`
  background-color: transparent;
  color: red;
  border: none;
  font-size: 19px;
  margin-right: 20px;
  padding: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.Vermelho};
    border-radius: 5px;
    color: ${Colors.Branco};
  }
`;

export const BotaoEditar = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ImagemCarregando = styled.img`
  width: 300px;
`;

export const ContainerCarregando = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
`;
export const PaginacaoFiltro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BotoesPaginacao = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: ${Colors.Cinza};
  color: ${Colors.Branco};
  cursor: pointer;

  &:hover {
    background-color: ${Colors.Laranja};
    color: ${Colors.Preto};
  }

  &:disabled {
    background-color: ${Colors.Cinza};
    color: ${Colors.CinzaEscuro};
    cursor: not-allowed;
  }
`;
export const FiltroButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  color: ${Colors.Branco};
  cursor: pointer;

  &:hover {
    color: ${Colors.Branco};
    text-decoration: 2px underline ${Colors.Laranja};
  }
`;
export const SelectFiltro = styled.select`
  background-color: ${Colors.Cinza};
  color: ${Colors.Branco};
`;
export const PlaylistVazia = styled.div`
  display: flex;
  justify-content: center;
`;
