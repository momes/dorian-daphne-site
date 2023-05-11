import React, {useEffect, useRef, useState} from 'react';
import ReactHowler from 'react-howler'

function Key({value, note, color, keyType, setCurrNote, currSequence, currNote}) {
  const [isPlaying, setIsPlaying] = useState(false)

  const howlerRef = useRef(null);
  useEffect(() => {
    if(currSequence[currSequence.length - 1] === value) {
      setIsPlaying(true)
    }
    if(currSequence[currSequence.length - 1] !== value ) {
      howlerRef.current.seek(0)
      setIsPlaying(false)
    }
  }
  , [currSequence])
    const handleClick = (e, value) => {
        setCurrNote(value)
    }

  return (
    <div className={`colflex ${keyType} ${currSequence.includes(value) 
      ? 'still' 
      : 'motion'}`} onClick={(e) => handleClick(e, value)}>
      <ReactHowler
      src={`${process.env.PUBLIC_URL}/daphne-assets/notes-audio/${note}.m4a`} 
      playing={isPlaying} 
      onPlayError={(idx, errorCode) => console.log("error", idx,errorCode)}
      preload={true}
      ref={howlerRef}/>
      <img 
        src={`${process.env.PUBLIC_URL}/daphne-assets/keys/${color}.png`} 
        className={
          `key ${currSequence.includes(value) 
          ? 'pressed' 
          : 'not-pressed cutout hover'}`
          }
        alt={note}
      />
    </div>)
}

export default Key;
