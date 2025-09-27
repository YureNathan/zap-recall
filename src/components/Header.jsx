import { useState } from "react";
import styled from "styled-components";
import cards from "../data/cards";
import Logo from "../assets/logo.png";
import Footer from "./Footer";
import FlashCardsMain from "./FlashCardsMain";

export default function Header() {
  const [respostas, setRespostas] = useState([]);

  function registrarResposta(index, opcao) {
    const novasRespostas = [...respostas];
    novasRespostas[index] = opcao;
    setRespostas(novasRespostas);
  }
  return (
    <Conteudo>
      <Cabecalho>
        <img src={Logo} alt="Logo ZapRecall" />
        <h2>ZapRecall</h2>
      </Cabecalho>
      {cards.map((item, index) => (
        <FlashCardsMain
          key={index}
          index={index}
          pergunta={item.pergunta}
          resposta={item.resposta}
          registrarResposta={registrarResposta}
          status={respostas[index]}
        />
      ))}
      <Footer respostas={respostas} total={cards.length} />
    </Conteudo>
  );
}

const Conteudo = styled.div`
  background-color: #fb6b6b;
  padding: 20px;
  font-family: "Recursive", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;
const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: 52px;
    margin-right: 10px;
  }
  h2 {
    color: white;
    font-size: 36px;
  }
`;
