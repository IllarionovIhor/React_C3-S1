import RedGame from "./RedGame";
import GrayGame from "./GrayGame";
import GreenGame from "./GreenGame";

export default function GameScreen(){

    return(
        <div>
            <GreenGame />
            <RedGame />
            <GrayGame />
        </div>
    )
}