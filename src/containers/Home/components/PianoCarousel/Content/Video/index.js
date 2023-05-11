import {useRef} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';



const Video = ({fadeIn, videoId}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Fade in={fadeIn} timeout={1000}>
    <Grid container style={{position: 'relative', top: isMobile? '8vh': '25vh'}}>
        <Grid item sx></Grid>
        <Grid item sx={10} style={{margin:'0px auto'}}>
        {/* <video width={isMobile? "400" : "700"} height={isMobile? "300" : "400"} controls>
          <source src={videoUrl} type="video/mp4"/>
        Your browser does not support the video tag.
        </video> */}


          <iframe width="560" height="315" src={`//www.youtube.com/embed/${videoId}` }title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Grid>
        <Grid item sx></Grid>
  </Grid>
  </Fade>
  );
}

export default Video;
