
import { useRecoilState } from 'recoil';

import { greenGameAtom } from '../App';

export default function GreenGame(){

    const [greenGameScore, setGreenGameScore] = useRecoilState(greenGameAtom);

    // award player for clicking green button

    return(
        <div>
            <h1>Green game</h1>
            <button className="green" onClick={() => {setGreenGameScore(greenGameScore + 1)}}>G</button>
            <button className="red" onClick={() => {setGreenGameScore(greenGameScore - 1)}}>R</button>
        </div>
    )
}