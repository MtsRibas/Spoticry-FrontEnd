import styled from "styled-components";

export const Tudo = styled.div`
  min-height: 100vh;
`;

export const PlayerContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Titulo = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

export const NomeArtista = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const PlayerWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 400px;
`;

export const DescricaoMusica = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-items: flex-start;
`;

export const Player = styled.div`
  display: flex;
  justify-content: center;
`;

export const ControleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  gap: 10px;
`;

export const BotaoControle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
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
