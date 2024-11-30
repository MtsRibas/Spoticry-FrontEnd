import styled from "styled-components";
import { Colors } from "../../Constants/Colors";

export const Banner = styled.div`
  display: flex;

  width: 100%;
  height: 280px;
  margin-bottom: 20px;
`;
export const ImagemBanner = styled.img`
  width: 100%;
  height: 100%;
`;
export const DivNomeBotao = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  color: ${Colors.Branco};
`;
export const Botao = styled.a`
  display: flex;
  align-items: center;
  padding: 16px 48px;
  border-radius: 32px;
  margin: 5px 0px;
  border: none;
  background-color: ${Colors.Cinza};
  text-decoration: none;
  color: ${Colors.Branco};
  &:hover {
    background-color: ${Colors.Laranja};
    color: ${Colors.Preto};
    cursor: pointer;
  }
`;
export const TituloMusic = styled.p`
  font-size: 28px;
  margin: 0px;
`;
export const DivPlaylists = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
`;
export const CardPlaylist = styled.div`
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 10px;
  color: ${Colors.Branco};
  cursor: pointer;
  &:hover {
    background-color: ${Colors.Cinza};
  }
`;
export const Fotinha = styled.div`
  justify-content: center;
  align-items: center;
`;
export const Imagem = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;
export const PlaylistTudo = styled.div`
  margin-top: 80px;
`;
export const PlaylistTudo2 = styled.div`
  margin-top: 80px;
`;
export const BotaoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
`;
export const Botao1 = styled.button`
  padding: 5px 30px;
  background-color: black;
  border: none;
  background-color: transparent;
  color: ${Colors.Branco};
  &:hover {
    cursor: pointer;
    color: ${Colors.Branco};
  }
  &:disabled {
    color: ${Colors.Cinza};
    cursor: not-allowed;
  }
`;
export const DivBanner = styled.div``;
export const TituloPlaylists = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Ajustes = styled.div`
  display: flex;
  flex-direction: row;
`;
