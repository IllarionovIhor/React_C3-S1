import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CardSet } from './components/CardSet'
import { CardShower } from './components/CardShower'

function App() {

  const [chosenCards, setChosenCards] = useState([]);

  const cards = [
    {
      id: 0,
      title: "pretty cool card 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laudantium blanditiis sapiente fugit reiciendis temporibus deleniti odio incidunt ipsam, suscipit consequuntur perferendis delectus ut! Quam ullam soluta officia ",
      image: reactLogo
    },
    {
      id: 1,
      title: "chill card 2",
      description: "Lorem ipsum dolor simet consectetur adipisicing elit. Sed laudantium blanditiis sapiente fugit reiciendis temporibus deleniti odio incidunt ipsam, suscipit consequuntur perferendis delectus ut! Quam ullam soluta officia ",
      image: viteLogo
    },
    {
      id: 2,
      title: "ultra rare card 3",
      description: "Lorem ipsum do sit amet consectetur adipisicing elit. Sed laudantium blanditiis sapiente fugit reiciendis temporibus deleniti odio incidunt ipsam, suscipit consequuntur perferendis delectus ut! Quam ullam soluta officia ",
      image: reactLogo
    }
  ]

  return (
    <>
      <h1>Get ur card dude</h1>
      <CardShower chosenCards={chosenCards} cards={cards}/>
      <CardSet cards={cards} chosenCards={chosenCards} setChosenCards={setChosenCards}/>
    </>
  )
}

export default App
