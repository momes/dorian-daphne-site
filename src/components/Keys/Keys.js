import './Keys.css';
import React, {useRef} from 'react';
import Key from './Key.js';
import {KEYS} from '../../constants.js';
const TRACKS = [
  'consenso',
  'definitively',
  'herehereafter',
  'feelgoodbiz',
  'leastyoucando',
  'stay',
  'casanova',
  'couldntsayittoyourface',
  'nicksninetyfifth',
  'tislife',
  'thebubble',
  'icandoanything'
]


const _BLACK_KEYS = KEYS.filter(key =>  key.color === 'black')
const BLACK_KEYS = [_BLACK_KEYS[0],_BLACK_KEYS[1], {}, _BLACK_KEYS[2], _BLACK_KEYS[3], _BLACK_KEYS[4], {}, _BLACK_KEYS[5], _BLACK_KEYS[6]]
const WHITE_KEYS = KEYS.filter(key => key.color !== 'black')
const MAJOR_SCALE=[2,4, 6, 7, 9, 11, 13, 14]


function Keys({currSequence, setCurrNote, currNote}) {
    // const audio = useRef();
    // const handleClick = (e, i) => {
    //     // e.preventDefault()
    //     setCurrNote(i)
    //     audio.current.play()
    // }
  return (
    <div className='keyContainer'>
        <div className='keyflex blacks'>
    {BLACK_KEYS.map((key, i) => 
       (key.color ?
        (<Key
        value={key.value} 
        note={key.note} 
        color={key.color} 
        keyType='black'
        setCurrNote={setCurrNote}
        currSequence={currSequence}
        currNote={currNote} />)
        :
      (<div className={`colflex`} >
      
      </div>)
       )
)}
  </div>
 <div className='keyflex whites'>
 {WHITE_KEYS.map((key, i) => 
      (<Key
      value={key.value} 
      note={key.note} 
      color={key.color} 
      keyType='color'
      setCurrNote={setCurrNote}
      currSequence={currSequence} 
      currNote={currNote}/>)
)}
   </div>
   
    </div>
  );
}

export default Keys;
// social links 
{/* <ul class="nav justify-content-center mt-4">
            <li class="nav-item">
                <a class="nav-link active" href="https://www.instagram.com/_nickdorian_/">
                    <span> <i class="fa fa-instagram text-white fa-2x"></i> </span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.youtube.com/channel/UClfLBgZJNkAz80KgodwbE0g/videos">
                    <span> <i class="fa fa-youtube text-white fa-2x"></i> </span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.facebook.com/nickdorianmusic/">
                    <span> <i class="fa fa-facebook text-white fa-2x"></i> </span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://twitter.com/tweetnickdorian">
                    <span> <i class="fa fa-twitter text-white fa-2x"></i> </span>
                </a>
            </li>
        </ul> */}

