import './PianoCarousel.css';
import Keys from '../../../../components/Keys/Keys.js';
import {useState, useEffect, useRef} from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Main from './Content/Main';
import Photo from './Content/Photo';
import Video from './Content/Video';
import Randomizer from '../../../../components/RandomStickers.js';
  



const MAJOR_SCALE=[2,4, 6, 7, 9, 11, 13, 14]

const ANIMATION_DIALOGUE = {
  0: 'main',
  1: 'C#',
  2: 'D',
  3: 'D#',
  4: 'E',
  5: 'F',
  6: 'F#',
  7: 'G',
  8: 'G#',
  9: 'A',
  10: 'A#',
  11: 'B',
  12: 'C2',
  13: 'C#2',
  14: 'D2',
  15: 'D#2',
  16: 'E2',

}

function PianoCarousel({isLoading, setIsGame}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [currNote, setCurrNote] = useState(-1);
  const [sequence, setSequence] = useState([])
  const [animationDialogue, setAnimationDialogue] = useState("main");

  useEffect(function () {
    if (currNote >= 0) {
      setAnimationDialogue(ANIMATION_DIALOGUE[currNote])
    if (sequence.length === 0) {
      setSequence([currNote])
    }
    else {
      if (MAJOR_SCALE[sequence.length] === currNote) {
          if (sequence.length === MAJOR_SCALE.length - 1) {
          setSequence((seq) => [...seq, currNote])
          setIsGame(true)
          setTimeout(() => window.location.href = "https://icandoanything.me", 3000);

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
    <div className="PianoCarousel">
      <Randomizer />
    <Keys setCurrNote={setCurrNote} currSequence={sequence} currNote={currNote}/>
    {animationDialogue === "main" && <Main fadeIn={!isLoading} />}
    {animationDialogue === "C#" &&  <Photo fadeIn imageUrl={`${process.env.PUBLIC_URL}/daphne-assets/photos/rock-min.png`}/>}
    {animationDialogue === "D" &&  <Video fadeIn videoUrl={`${process.env.PUBLIC_URL}/daphne-assets/videos/studio1.mp4`}/>}
    {animationDialogue === "D#" &&  <Photo fadeIn imageUrl={`${process.env.PUBLIC_URL}/daphne-assets/photos/purplerun-min.png`}/>}
    {animationDialogue === "E" &&  <Photo fadeIn imageUrl={`${process.env.PUBLIC_URL}/daphne-assets/photos/sit-min.png`}/>}
    {animationDialogue === "F" &&  <Video fadeIn videoUrl={`${process.env.PUBLIC_URL}/daphne-assets/videos/definitively.mp4`}/>}
    {animationDialogue === "F#" && <Photo fadeIn imageUrl={`${process.env.PUBLIC_URL}/daphne-assets/photos/jump-min.png`}/>}
    {animationDialogue === "G" && <Photo fadeIn imageUrl={`${process.env.PUBLIC_URL}/daphne-assets/photos/lean-min.png`} />}
    {animationDialogue === "G#" && <Photo fadeIn imageUrl={`${process.env.PUBLIC_URL}/daphne-assets/photos/erik-nate.jpg`} />}
    {animationDialogue === "A" && <Photo fadeIn imageUrl={`${process.env.PUBLIC_URL}/daphne-assets/photos/face-min.png`} />}
    {animationDialogue === "A#" && <Photo fadeIn imageUrl={`${process.env.PUBLIC_URL}/daphne-assets/photos/band.jpg`} />}
    {animationDialogue === "B" && <Photo fadeIn imageUrl={`${process.env.PUBLIC_URL}/daphne-assets/photos/punch-min.png`} />}
    {animationDialogue === "C2" &&  <Video fadeIn videoUrl={`${process.env.PUBLIC_URL}/daphne-assets/videos/ryan.mp4`}/>}
    {animationDialogue === "C#2" && <Photo fadeIn imageUrl={`${process.env.PUBLIC_URL}/daphne-assets/photos/purple-min.png`} />}
    {(animationDialogue === "D2") && <Photo fadeIn imageUrl={`${process.env.PUBLIC_URL}/daphne-assets/photos/bow-min.png`} />}
    {animationDialogue === "D#2" && <Photo fadeIn imageUrl={`${process.env.PUBLIC_URL}/daphne-assets/photos/distort-min.png`} />}
    {animationDialogue === "E2" && <Photo fadeIn imageUrl={`${process.env.PUBLIC_URL}/daphne-assets/photos/charlie.jpg`} />}


    </div>
  );
}

export default PianoCarousel;