import styled from "styled-components";
import { Colors } from "../../Constants/Colors";

export const BarraLateral = styled.div`
  height: 100vh;
  width: 160px;
  margin-left: 30px;

  color: white;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
`;

export const MenuItem = styled.button`
  width: 100%;
  border: none;
  color: white;
  padding: 10px 0;
  background-color: transparent;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`;
export const Usuario = styled.p`
  font-size: 11px;
`;
export const FotoUser = styled.img`
  width: 70px;
`;
export const Detail = styled.span`
  padding: 0px 80px;
  max-width: 100%;
  border-radius: 10px;
  background-color: ${Colors.Laranja};
  height: 1px;
  align-items: center;
`;
export const Detail2 = styled.span`
  padding: 0px 80px;
  max-width: 100%;
  border-radius: 10px;
  background-color: ${Colors.Laranja};
  height: 2px;
  align-items: center;
`;
export const Navegacao = styled.div`
  display: flex;
  width: 100%;
  text-align: left;
  &:hover {
    background-color: ${Colors.Cinza};
    border-right: 3px solid ${Colors.Laranja};
  }
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 300px;
  p {
    font-size: 12px;
  }
`;
