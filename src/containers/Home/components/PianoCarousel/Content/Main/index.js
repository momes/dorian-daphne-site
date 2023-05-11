import {useRef} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import {Link} from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const Main = ({isLoading}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return !isMobile ? (
    <Fade in={!isLoading} timeout={1000}>
       <button style= {{backgroundColor: 'transparent', border: 'none', outline:'none'}} className='Album' onClick={() =>  window.location.href = "/"
}>
    <Grid container style={{position: 'relative', top: '25vh'}}>
      <Grid item xs={4} style={{position: 'relative', zIndex: 100}}>
        <img src={`${process.env.PUBLIC_URL}/daphne-assets/daphne-logo.png`} style={{height:'30vw', zIndex: 100, position: 'relative', top:'2vw', left:  '2vw'}} className='Logo'/>
      </Grid>

      <Grid item xs={8} style={{zIndex: -1}}>
       
        <img src={`${process.env.PUBLIC_URL}/daphne-assets/daphne-major-spotify-album.png`} style={{height:'35vw', zIndex: -1}}/>
      
        <img src={`${process.env.PUBLIC_URL}/daphne-assets/LISTEN.png`} style={{height:'30%', zIndex: 5, position: 'absolute', bottom: '2vh', right: '-3vw'}}/>
      </Grid>
  </Grid></button>
  </Fade>
  ): 
  (
    <Fade in={!isLoading} timeout={1000}>
       <button style= {{backgroundColor: 'transparent', border: 'none', outline:'none', width: '95vw'}} className='Album' onClick={() =>  window.location.href = "/"
}>
    <Grid container style={{position: 'relative', top: '15vh', width: '100vw'}}>
  
    <img src={`${process.env.PUBLIC_URL}/daphne-assets/daphne-logo.png`} style={{width:'45vw', zIndex: 100, position: 'absolute', bottom:'-5vw', left:  '1vw'}} className='Logo'/>
      <Grid item xs={12} style={{zIndex: -1}}>
       
        <img src={`${process.env.PUBLIC_URL}/daphne-assets/daphne-major-spotify-album.png`} style={{position: 'absolute', left: '5vw', width:'90vw', zIndex: -1}}/>
      
        <img src={`${process.env.PUBLIC_URL}/daphne-assets/LISTEN.png`} style={{height:'30vw', zIndex: 5, position: 'absolute', top: '2vh', right: '1vw'}}/>
      </Grid>
  </Grid></button>
  </Fade>
  )
}

export default Main;
