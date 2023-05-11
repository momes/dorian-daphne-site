
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Navigation from '../Navigation';
import SocialLinks from '../SocialLinks';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavigationMobile from '../Navigation/NavigationMobile';


function MainLayout({active, children}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return(<>
    {isMobile && <NavigationMobile active={active}/>}
    <Grid container spacing={2} >
    <Grid item xs={isMobile? 0 : 2}>
      {!isMobile && <Navigation active={active}/>}
    </Grid>
    <Grid item xs={isMobile? 12 : 8}>
     {children}
    </Grid>
    <Grid item xs={isMobile? 0 : 2}>
      {!isMobile && <SocialLinks />}
    </Grid>
  </Grid></>)
}

export default MainLayout;
