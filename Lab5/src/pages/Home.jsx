import GameScreen from "../components/GamesScreen";
import PlayerScore from "../components/PlayerScore";

export default function Home(){

    return(
        <div>
            <PlayerScore />
            <GameScreen />
        </div>
    )
}