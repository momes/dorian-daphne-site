import React, { useLayoutEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function Randomizer(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [assets, setAssets] = useState({});
  const [addAsset, setAddAsset] = useState(false);
  const [currTimeOut, setCurrTimeOut] = useState(null);
  
  useLayoutEffect(function setRandom() {
    let randTime = Math.round(Math.random() * (1000)) + 2000;
    let assetNum = Math.floor(Math.random() * 6 + 1);
    
    // Set a random timeout to trigger setting an asset
    if (!addAsset & !currTimeOut) {
      let timeOut = setTimeout(function() {
        setAddAsset(true);
      }, randTime);
      setCurrTimeOut(timeOut)
    }

    // Reset on max assets on screen, trigger new random timeout
    if (addAsset && Object.keys(assets).length === 6) {
      setAddAsset(false);
      setAssets({});
      clearTimeout(currTimeOut);
      setCurrTimeOut(null)
    }
    
    // Find place asset in random spot
    if (addAsset && Object.keys(assets).length < 6) {

      // If the same asset is already on screen, trigger new random timeout
      if(Object.keys(assets).includes(`${assetNum}`)) {
        setAddAsset(false);
        clearTimeout(currTimeOut);
        setCurrTimeOut(null)
      }
      
      else {
        // Generate random positioning
        let randLeft;
        let randTop;

        while (!randLeft || !randTop) {
          randLeft = (Math.floor(Math.random() * 20) * 5) - 20;
          randTop = (Math.floor(Math.random() * 20) * 5 )- 20;
        }
        setAssets((oldAssets) => ({...oldAssets, [assetNum]: [randLeft,randTop]}));
        setAddAsset(false);
        clearTimeout(currTimeOut);
        setCurrTimeOut(null)
      }
    }}, [addAsset, assets, currTimeOut])

  return (
    <div style={{width: '100vw', overflow: 'hidden' }}>
      {Object.keys(assets).map((asset) => (
        <img 
              src={process.env.PUBLIC_URL + `/daphne-assets/random-assets/${asset}.png`}
              alt={`${asset}`}
              style={{position: "fixed",
                  left: `${assets[asset][0]}%`,
                  top: `${assets[asset][1]}%`,
                  maxWidth: isMobile ? "100px" : "250px",
                  maxHeight: isMobile ? "100px" : "250px",
                  position: 'absolute',
                  opacity: 0.5,
                  zIndex: -1
                }} 
              />
      ))}
      </div>
  );
}

export default Randomizer;
