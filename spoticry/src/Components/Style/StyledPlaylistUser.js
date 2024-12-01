import styled from "styled-components";
import { Colors } from "../../Constants/Colors";

export const Tudo = styled.div``;
export const ContainerPlaylist = styled.div`
  height: 100vh;
`;
export const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BotaoAdicionar = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
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
export const TituloModal = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;
export const BotaoEnviar = styled.button`
  position: absolute;
  bottom: 25px;
  right: 31%;
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
export const ListaPlaylist = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;
  padding: 0;
  margin-top: 10px;
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

export const InfoPlaylist = styled.div`
  text-align: left;
  padding-right: 100px;
  flex: 1;
  margin-left: 10px;

  h3,
  p {
    margin: 0;
  }

  p {
    margin-top: 5px;
    font-size: 0.9rem;
  }
`;

export const InfoTotal = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 100%;
  padding: 10px 0px;
`;

export const ImagemPlaylist = styled.img`
  height: 90px;
  width: 90px;
  border-radius: 10px;
  object-fit: cover;
`;

export const DivImagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
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

  margin-right: 30px;
`;
export const Botoes = styled.div`
  align-items: center;
  display: flex;
`;

export const ImagemCarregando = styled.img`
  width: 300px;
`;
export const ContainerCarregando = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
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
export const FiltroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

export const FiltroButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 10px;
  color: ${Colors.Branco};
  cursor: pointer;
  &:hover {
    text-decoration: 2px underline ${Colors.Laranja};
  }
`;
export const SelectFiltro = styled.select`
  border: 2px solid ${Colors.Branco};
  padding: 10px;
  border-radius: 3px;
  margin-left: 10px;
  background-color: ${Colors.Cinza};
  color: ${Colors.Branco};
`;
export const PlaylistVazia = styled.div`
  display: flex;
  justify-content: center;
`;
