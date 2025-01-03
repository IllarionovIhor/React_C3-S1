
import { useRecoilState } from 'recoil';

import { redGameAtom } from '../App';

export default function RedGame(){

    const [redGameScore, setRedGameScore] = useRecoilState(redGameAtom);

    // award player for clicking red button

    return(
        <div>
            <h1>Red game</h1>
            <button className="green" onClick={() => {setRedGameScore(redGameScore - 1)}}>G</button>
            <button className="red" onClick={() => {setRedGameScore(redGameScore + 1)}}>R</button>
        </div>
    )
}