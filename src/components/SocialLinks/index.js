import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import React from 'react';
import {Link} from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';



const SOCIALS = {
  'spotify': 'https://open.spotify.com/artist/60tZRF2LOOUONoZXo2ATtd',
  'soundcloud': 'https://soundcloud.com/nickdorian',
  'instagram': 'https://www.instagram.com/_nickdorian_/?hl=en'
}
function SocialLinks(active) {
  return (
    <Grid container style={{paddingTop: '1vh', paddingRight: '2vw'}}>
      {Object.keys(SOCIALS).map((s) => (
        <Grid item xs={4}>
              <a href={SOCIALS[s]} target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/Navigation/icon-${s}.png`} style={{width: '90%'}}/>
              </a>
            </Grid>
          ))}
    </Grid>
  )
}

export default SocialLinks;