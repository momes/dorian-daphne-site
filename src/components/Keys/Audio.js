import React, {useRef} from 'react';


// const _BLACK_KEYS = KEYS.filter(key =>  key.color === 'black')
// const BLACK_KEYS = [_BLACK_KEYS[0],_BLACK_KEYS[1], {}, _BLACK_KEYS[2], _BLACK_KEYS[3], _BLACK_KEYS[4], {}, _BLACK_KEYS[5], _BLACK_KEYS[6]]
// const WHITE_KEYS = KEYS.filter(key => key.color !== 'black')


function Audio({value, note, color, keyType, setCurrNote, currSequence}) {
    const audio = useRef();
    // const resource = new Audio(`${process.env.PUBLIC_URL}/daphne-assets/notes-audio/${note}.mp3`)
    const handleClick = (e, i) => {
        setCurrNote(i)
    }
  return (
    <div className={`colflex ${keyType}`} onClick={(e) => handleClick(e, value)}>
      <audio 
        ref={audio} 
        src={`${process.env.PUBLIC_URL}/daphne-assets/notes-audio/${note}.mp3`} 
      />
      <img 
        src={`${process.env.PUBLIC_URL}/daphne-assets/keys/${color}.png`} 
        className={
          `key ${currSequence.includes(value) 
          ? 'pressed' 
          : 'cutout hover'}`
          }
        alt={note}
      />
    </div>)
}

export default Audio;
