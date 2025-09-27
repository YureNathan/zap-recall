import styled from "styled-components";
export default function Footer({ respostas = [], total = 0 }) {
  const respondidos = respostas.filter((r) => r !== undefined).length;
  
  return (
    <ConteudoFooter>
      <p>
        {respondidos}/{total} CONCLUÍDOS
      </p>
    </ConteudoFooter>
  );
}
const ConteudoFooter = styled.footer`
  width: 100%;
  height: 70px;
  background-color: white;
  color: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Recursive", sans-serif;
  font-size: 18px;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.05);
`;
