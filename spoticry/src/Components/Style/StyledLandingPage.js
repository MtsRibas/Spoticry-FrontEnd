import styled from "styled-components";
import { Colors } from "../../Constants/Colors";
import fotoBanner from "../../assets/banner.png";
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  text-decoration: none;
  color: ${Colors.Branco};
`;
export const BotaoLogin = styled.button`
  background-color: transparent;
  border: none;
  color: ${Colors.Branco};
  &:hover {
    border-bottom: 2px solid ${Colors.Laranja};
    color: ${Colors.Branco};
    cursor: pointer;
  }
`;
export const Banner = styled.div`
  background-image: url(${fotoBanner});
  background-size: cover;
  background-position: center;

  height: 500px;
`;
export const GeneroBanner = styled.div`
  align-items: center;
  justify-content: center;

  text-align: center;
  margin-top: 60px;
`;

export const Lista = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: ${Colors.Branco};
`;
export const ListItem = styled.li`
  padding: 5px 48px;
  border-radius: 32px;
  color: ${Colors.Branco};
  background-color: ${Colors.Cinza};
  &:hover {
    background-color: ${Colors.Laranja};
    color: ${Colors.Preto};
  }
`;
export const TituloGender = styled.p`
  font-size: 20px;
  color: ${Colors.Branco};
`;
export const TextoDetalhe = styled.p`
  color: gray;
`;
export const Specify = styled.div`
  text-align: center;
  margin-top: 110px;
  color: ${Colors.Branco};
`;
export const DivFotos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  color: ${Colors.Branco};
`;
export const DivEspecificacoes = styled.div`
  border: 3px solid ${Colors.Branco};
  border-radius: 16px;
  padding: 16px 16px 0px 16px;
  color: ${Colors.Branco};
  &:hover {
    border: 3px solid ${Colors.Laranja};
  }
`;

export const Detalhes = styled.div`
  text-align: center;
  margin-top: 110px;
  color: ${Colors.Branco};
`;
export const DetalhesInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  gap: 20px;
`;
export const DivInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background-color: ${Colors.Cinza};
  border-radius: 53px;
  padding: 5px 80px;
  gap: 5px;
  align-items: center;
  text-align: start;
  font-size: 20px;
  font-weight: bold;
`;

export const SessionStart = styled.div`
  text-align: center;
  margin-top: 80px;
  color: ${Colors.Branco};
`;
export const Botao = styled.button`
  background-color: ${Colors.Cinza};
  color: ${Colors.Branco};
  border: none;
  padding: 35px 130px;
  border-radius: 96px;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.Laranja};
    color: ${Colors.Preto};
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
  padding-bottom: 30px;
  color: ${Colors.Branco};
`;
export const Detail = styled.span`
  margin-top: 25px;
  padding: 0px 400px;
  max-width: 100%;
  border-radius: 10px;
  background-color: ${Colors.Laranja};
  height: 5px;
  align-items: center;
`;

export const Desenvolvido = styled.p`
  color: ${Colors.Branco};
`;
