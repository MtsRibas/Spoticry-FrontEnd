import styled from "styled-components";
import { Colors } from "../../Constants/Colors";

export const PlayerContainer = styled.div`
  height: 100vh;
  width: 160px;
  margin-left: 30px;
  margin-top: 100px;
  background-color: ${Colors.Preto};
  color: white;
  position: fixed;
  top: 0;
  right: 30;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ControleContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const BotaoControle = styled.button`
  background-color: transparent;
  color: ${Colors.Branco};
  padding: 5px 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.Laranja};
    color: ${Colors.Preto};
  }
`;
