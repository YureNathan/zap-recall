import FlashCardsMain from "./FlashCardsMain";
import cards from "../data/cards";
export default function Card() {
  return (
    <div>
      {cards.map((card, index) => (
        <FlashCardsMain key={index} index={index} pergunta={card.pergunta} />
      ))}
    </div>
  );
}
