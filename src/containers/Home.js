import './Home.css';
import Keys from '../components/Keys/Keys.js'
import Navigation from '../components/Navigation'
import {useState, useEffect, useRef} from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Main from '../components/Main/Main.js';

const MAJOR_SCALE=[2,4, 6, 7, 9, 11, 13, 14]

function DaphneHome() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [currNote, setCurrNote] = useState(null);
  const [sequence, setSequence] = useState([])
  const [animationDialogue, setAnimationDialogue] = useState("main");

  useEffect(function () {
    if (currNote >= 0) {
      if (currNote === 1) {
      }
      if (currNote === 2 || currNote === 14) {
        setAnimationDialogue("main")
      }
      if (currNote === 4) {
        setAnimationDialogue("photo2")
      }
      if (currNote === 5) {
        setAnimationDialogue("photo3")
      }
      if (currNote === 7) {
        setAnimationDialogue("photo4")
      }
      if (currNote === 9) {
        setAnimationDialogue("photo5")
      }
      if (currNote === 11) {
        setAnimationDialogue("photo6")
      }
      if (currNote === 13) {
        setAnimationDialogue("photo7")
      }
      if (currNote === 14) {
        setAnimationDialogue("main")
      }
      if (currNote === 1) {
        setAnimationDialogue("photo9")
      }
      if (currNote === 10) {
        setAnimationDialogue("photo10")
      }
      if (currNote === 14 && sequence.length === 8) {
        setAnimationDialogue("ICDA")
      }
      if (currNote === 16 ) {
        setAnimationDialogue("credits")
      }
    if (sequence.length === 0) {
      setSequence([currNote])
    }
    else {
      if (MAJOR_SCALE[sequence.length] === currNote) {
          if (sequence.length === MAJOR_SCALE.length - 1) {
          setSequence((seq) => [...seq, currNote])
          setAnimationDialogue("major")
          // setTimeout(() => window.location.href = "https://icandoanything.me", 1000);

          }
          else {
            setSequence((seq) => [...seq, currNote])
            }
      }
      else {
        setSequence([currNote])
      }
      }
  }}, [currNote])

  return (
    <div className="DaphneHome">
    <Keys setCurrNote={setCurrNote} currSequence={sequence} currNote={currNote}/>
      <img src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/leaf.png`} className="cutout leaf" id="slide"/>
      <div className="window">
        {animationDialogue === "main" && (<Main checked={animationDialogue === "main"}/>)}
        {/* <Photos photo={"purplenick"} checked={animationDialogue === "photo1"} />
        <Photos photo={"punch"} checked={animationDialogue === "photo2"} />
        <Photos photo={"field"} checked={animationDialogue === "photo3"} />
        <Photos photo={"yellownick"} checked={animationDialogue === "photo4"} />
        <Photos photo={"rocks"} checked={animationDialogue === "photo5"} />
        <Photos photo={"facenick"} checked={animationDialogue === "photo6"} />
        <Photos photo={"sitnick"} checked={animationDialogue === "photo7"} />
        <Photos photo={"rednick"} checked={animationDialogue === "photo11"} />
        <Photos photo={"jumpnick"} checked={animationDialogue === "photo10"} /> 
        <Photos photo={"blurrynick"} checked={animationDialogue === "photo9"} />
        <Photos photo={"bownick"} checked={animationDialogue === "photo8"} />}
        <Photos photo={"bownick"} checked={animationDialogue === "photo8"} />} */}

        </div>
   
    </div>
  );
}

export default DaphneHome;