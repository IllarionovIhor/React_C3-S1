import "./CardSet.css"


import { Card } from "./Card"

export const CardSet = ({cards, chosenCards, setChosenCards}) => {


    return <div className="cardSet">
        {cards.map( (card) => (
            <Card 
                key={card.id} 
                card = {card} 
                chosenCards={chosenCards} 
                setChosenCards={setChosenCards}
            />
        ))}
    </div>
}