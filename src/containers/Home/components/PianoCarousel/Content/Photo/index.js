import {useRef} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




const Photo = ({fadeIn, showGame, imageUrl}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Fade in={fadeIn} timeout={1000}>
      {!isMobile? (<Grid container style={{position: 'relative', top: '25vh'}}>
        <Grid item sx></Grid>
        <Grid item sx={10}></Grid>
        <img src={imageUrl} style={{height:'70vh', margin: '0px auto'}}/>
        <Grid item sx></Grid>
  </Grid>) : 
    <Grid container style={{position: 'relative', top: '8vh'}}>
          <Grid item sx></Grid>
          <Grid item sx={10}></Grid>
          <img src={imageUrl} style={{width:'95vw', margin: '0px auto'}}/>
          <Grid item sx></Grid>
    </Grid>}
  </Fade>
  );
}

export default Photo;
