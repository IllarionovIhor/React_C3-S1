
import { useRecoilState } from 'recoil';

import { grayGameAtom } from '../App';
import { useEffect } from 'react';

export default function GrayGame(){

    const [grayGameScore, setGrayGameScore] = useRecoilState(grayGameAtom);

    // award player for doing nothing


    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {setGrayGameScore(grayGameScore + 1)}, 1000);


        //Clearing the interval
        return () => clearInterval(interval);
    }, [grayGameScore]);

    return(
        <div>
            <h1>Gray game</h1>
            <button className="green" onClick={() => {setGrayGameScore(grayGameScore - 1)}}>G</button>
            <button className="red" onClick={() => {setGrayGameScore(grayGameScore - 1)}}>R</button>
        </div>
    )
}