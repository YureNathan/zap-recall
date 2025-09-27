import { useState } from "react";
import styled from "styled-components";
import Seta from "../assets/seta_play.png";
import Virar from "../assets/seta_virar.png";

import IconeCerto from "../assets/icone_certo.png";
import IconeErro from "../assets/icone_erro.png";
import IconeQuase from "../assets/icone_quase.png";

export default function FlashCardsMain({
  index,
  pergunta,
  resposta,
  registrarResposta,
  status,
}) {
  const [estado, setEstado] = useState("fechado");

  function abrirPergunta() {
    if (!status) setEstado("pergunta");
  }
  function mostrarResposta() {
    setEstado("resposta");
  }
  function responder(opcao) {
    registrarResposta(index, opcao);
    setEstado("respondido");
  }

  if (estado === "fechado" && !status) {
    return (
      <CardBox onClick={abrirPergunta}>
        <p>Pergunta {index + 1}</p>
        <img src={Seta} alt="Seta play" />
      </CardBox>
    );
  }
  if (estado === "pergunta") {
    return (
      <CardPergunta>
        <p>{pergunta}</p>
        <img src={Virar} alt="Seta virar" onClick={mostrarResposta} />
      </CardPergunta>
    );
  }
  if (estado === "resposta") {
    return (
      <CardAberto>
        <p>{resposta}</p>
        <BotoesResposta>
          <button
            className="nao-lembrei"
            onClick={() => responder("nao-lembrei")}
          >
            Não lembrei
          </button>
          <button
            className="quase-nao-lembrei"
            onClick={() => responder("quase-nao-lembrei")}
          >
            Quase não lembrei
          </button>
          <button className="zap" onClick={() => responder("zap")}>
            Zap!
          </button>
        </BotoesResposta>
      </CardAberto>
    );
  }
  if (estado === "respondido" || status) {
    let icon = null;
    if (status === "nao-lembrei") {
      icon = <img src={IconeErro} alt="Erro" />;
    } else if (status === "quase-nao-lembrei") {
      icon = <img src={IconeQuase} alt="Quase" />;
    } else if (status === "zap") {
      icon = <img src={IconeCerto} alt="Certo" />;
    }

    return (
      <CardBox style={{ textDecoration: "line-through" }}>
        <p>Pergunta {index + 1}</p>
        {icon}
      </CardBox>
    );
  }

  return null;
}

const CardBox = styled.div`
  width: 300px;
  background: white;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: "Recursive", sans-serif;
    font-size: 16px;
  }
`;

const CardAberto = styled(CardBox)`
  background: #ffffd4;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const CardPergunta = styled(CardAberto)`
  width: 300px;
  background: #ffffd4;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: relative;

  p {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const BotoesResposta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  gap: 8px;

  button {
    border: none;
    border-radius: 5px;
    color: white;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    width: 90px;
  }

  .nao-lembrei {
    background-color: #ff3030;
  }

  .quase-nao-lembrei {
    background-color: #ff922e;
  }

  .zap {
    background-color: #2fbe34;
  }
`;
