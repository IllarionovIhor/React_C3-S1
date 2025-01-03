
import {
    useRecoilState
  } from 'recoil';

import { greenGameAtom, redGameAtom, grayGameAtom } from '../App';

export default function PlayerScore(){


    const [greenGameScore, setGreenGameScore] = useRecoilState(greenGameAtom);
    const [redGameScore, setRedGameScore] = useRecoilState(redGameAtom);
    const [grayGameScore, setGrayGameScore] = useRecoilState(grayGameAtom);

    return(
        <div>
            <h1>Green game score: {greenGameScore}</h1>
            <h1>Red game score: {redGameScore}</h1>
            <h1>Gray game score: {grayGameScore}</h1>
        </div>
    )
}