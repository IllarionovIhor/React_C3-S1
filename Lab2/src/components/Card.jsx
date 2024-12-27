import { useCallback, useState } from "react";
import "./Card.css"


export const Card = ({card, chosenCards, setChosenCards}) =>{

    const [chosen, setChosen] = useState("unchosen-card");

    const handleClick = () =>{

        const ifPresentIndex = chosenCards.indexOf(card.id);

        if(ifPresentIndex > -1){
            const unchosenCards = [...chosenCards];
            unchosenCards.splice(ifPresentIndex, 1);
            setChosenCards(unchosenCards);      
            setChosen("unchosen-card")      
        }else{
            setChosenCards([...chosenCards, card.id])
            setChosen("chosen-card")      
        }

    }

    return <div className={"card "+ chosen} onClick={handleClick}>
        <div className="title">
            <h1>{card.title}</h1>
            <img alt="great photo" src={card.image}/>
        </div>
        <p>{card.description}</p>
    </div>
}