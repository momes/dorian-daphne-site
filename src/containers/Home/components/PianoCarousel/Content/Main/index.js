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

  const handleClick = () => {
    window.open('https://open.spotify.com/album/6h1jLoHIlZ7pJPG8zgbzIl?si=4kZFJfeYTyiRDnkHZpt2-A', '_blank')
  }
  
  return !isMobile ? (
    <Fade in={!isLoading} timeout={1000}>
       <button style= {{backgroundColor: 'transparent', border: 'none', outline:'none'}} className='Album' onClick={handleClick}>
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
       <button style= {{backgroundColor: 'transparent', border: 'none', outline:'none', width: '95vw'}} className='Album' onClick={handleClick}>
    <Grid container style={{position: 'relative', top: '15vh', width: '100vw'}}>
    <Grid item xs={1} style={{zIndex: 2}}>
    <img src={`${process.env.PUBLIC_URL}/daphne-assets/daphne-logo.png`} style={{width:'35vw', zIndex: 100, position: 'absolute', top: '30vh',bottom:'0', left:  '1vw'}} className='Logo'/>

    </Grid>
      <Grid item xs={10} style={{zIndex: -1}}>

        <img src={`${process.env.PUBLIC_URL}/daphne-assets/daphne-major-spotify-album.png`} style={{position: 'absolute', right: '6vw', width:'90vw', zIndex: -1}}/>
   </Grid>
      <Grid item xs={1} style={{zIndex: -1}}>
      <img src={`${process.env.PUBLIC_URL}/daphne-assets/LISTEN.png`} style={{height:'20vw', zIndex: 5, position: 'absolute', top: '2vh', right: '5vw'}}/>

    </Grid>
  </Grid></button>
  </Fade>
  )
}

export default Main;
