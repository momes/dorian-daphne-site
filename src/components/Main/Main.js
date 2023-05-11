
import {useState, useEffect} from 'react';
import './Main.css';
import Grow from '@mui/material/Grow';


// import './Home.css';
// import React, { useEffect, useLayoutEffect, useState } from 'react';
// import {Container, Row, Col} from 'react-bootstrap';

// const THEME_TO_FILTER = {
//   '#1e832c': "invert(33%) sepia(18%) saturate(4468%) hue-rotate(94deg) brightness(100%) contrast(76%) opacity(80%)",
//   '#343330': "invert(17%) sepia(12%) saturate(202%) hue-rotate(7deg) brightness(99%) contrast(93%)",
//   '#A31621': "invert(16%) sepia(50%) saturate(6464%) hue-rotate(346deg) brightness(72%) contrast(94%)",
//   '#0D3B66': "invert(19%) sepia(17%) saturate(4829%) hue-rotate(182deg) brightness(92%) contrast(95%)"
// }


// function Randomizer(props) {
//   const [assets, setAssets] = useState({});
//   const [addAsset, setAddAsset] = useState(false);
  
//   useLayoutEffect(function setRandom() {
//     let randTime = Math.round(Math.random() * (1000)) + 500;
//     let assetNum = Math.floor(Math.random() * 20 + 1);
    
//     // Set a random timeout to trigger setting an asset
//     if (!addAsset) {
//       setTimeout(function() {
//         setAddAsset(true);
//       }, randTime);
//     }

//     // Reset on max assets on screen, trigger new random timeout
//     if (addAsset && Object.keys(assets).length === 12) {
//       setAddAsset(false);
//       setAssets({});
//     }
    
//     // Find place asset in random spot
//     if (addAsset && Object.keys(assets).length < 12) {

//       // If the same asset is already on screen, trigger new random timeout
//       if(Object.keys(assets).includes(`${assetNum}`)) {
//         setAddAsset(false);
//       }
      
//       else {
//         // Generate random positioning
//         let randLeft;
//         let randTop;

//         while (!randLeft || !randTop) {
//           randLeft = (Math.floor(Math.random() * 5) * 20);
//           randTop = Math.floor(Math.random() * 5) * 20;
//         }
//         setAssets((oldAssets) => ({...oldAssets, [assetNum]: [randLeft,randTop]}));
//         setAddAsset(false);
//       }
//     }}, [addAsset, assets])

//   return (
//     <div className="RandomContainer" style={{position:"relative"}}>
//       {Object.keys(assets).map((asset) => (
//         <img className="RandomAsset" 
//               src={process.env.PUBLIC_URL + `/ccc-assets/${asset}.png`}
//               alt={`${asset}country-chain-chapel`}
//               style={{position: "fixed",
//                   left: `${assets[asset][0]}vw`,
//                   top: `${assets[asset][1]}vh`,
//                   maxWidth: "200px",
//                   maxHeight: "175px",
//                   width: "70%",
//                   filter: `${THEME_TO_FILTER[props.theme]}`
//                 }} 
//               />
//       ))}
//       </div>
//   );
// }

// export default Randomizer;


const MAJOR_SCALE=[2,4, 6, 7, 9, 11, 13, 14]

function Main({checked}) {
  
  // useEffect(function () {
  //   if (currNote) {
  //   if (sequence.length === 0) {
  //     setSequence([currNote])
  //   }
  //   else {
  //     if (MAJOR_SCALE[sequence.length] === currNote) {
  //         if (sequence.length === MAJOR_SCALE.length - 1) {
  //         setAnimationDialogue("major")
  //         setSequence([])
  //         }
  //         else {
  //           setSequence((seq) => [...seq, currNote])
  //           }
  //     }
  //     else {
  //       setSequence(currNote === MAJOR_SCALE[0] ? [currNote] : [])
  //     }
  //     }
  // }}, [currNote])
  return (
    <Grow in={checked}> 
    <div className="Main">
      <div className="title-card">
      <img src={`${process.env.PUBLIC_URL}/daphne-assets/title/title-bar-top.png`} className="cutout title"/>
      <img src={`${process.env.PUBLIC_URL}/daphne-assets/title/daphnetitle.png`} className="cutout title"/>
      <img src={`${process.env.PUBLIC_URL}/daphne-assets/title/title-bar-bottom.png`} className="cutout title"/>
    </div>
    </div>
    </Grow>
  );
}

export default Main;
