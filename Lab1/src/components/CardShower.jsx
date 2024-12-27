import "./CardShower.css"

export const CardShower = ({chosenCards, cards}) =>{
    let filteredCards = cards.filter( (card) => (
        chosenCards.indexOf(card.id) > -1
    ))

    return<div className="cardShower">
        <h1>Chosen cards:</h1>
        <ul>
            {filteredCards.map( card => <li key={card.id}>{card.title}</li>)}
        </ul>
    </div>
}