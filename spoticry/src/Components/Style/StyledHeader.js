import styled from "styled-components";
import { Colors } from "../../Constants/Colors";

export const Nav = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

export const Juncao = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BotoesMenu = styled.li`
  background-color: transparent;
  color: ${Colors.Branco};

  &:hover {
    text-decoration: 2px underline ${Colors.Laranja};
    cursor: pointer;
  }
`;

export const BotaoSair = styled.button`
  background-color: transparent;
  border: 1px solid ${Colors.Laranja};
  padding: 10px 20px;
  border-radius: 10px;
  color: ${Colors.Branco};
  &:hover {
    background-color: ${Colors.Vermelho};
    cursor: pointer;
  }
`;
