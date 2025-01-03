import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Home from './pages/Home';
import { useEffect } from 'react';





export const greenGameAtom = atom({
  key:"greenGameAtom",
  default: 0
})
export const redGameAtom = atom({
  key:"redGameAtom",
  default: 0
})
export const grayGameAtom = atom({
  key:"grayGameAtom",
  default: 0
})


export default function App() {


  // useEffect(()=>{
  //   const [d, sd] = useRecoilState(greenGameAtom);
  //   console.log(d)
  // }, [])
  return (
    <RecoilRoot>
      <Home />
    </RecoilRoot>
  );
}