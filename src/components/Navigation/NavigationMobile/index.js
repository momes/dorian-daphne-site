import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import SocialLinks from '../../SocialLinks';

const TABS = ['MERCH', 'SHOWS']


function NavigationMobile({active}) {
  const [showSideBar, setShowSideBar] = useState(false)
return (
  <Box sx={{ flexGrow: 1 }}>
  <IconButton
        size="large"
        edge="start"
        aria-label="open drawer"
        style={{marginLeft:'5px', outline:'none'}}
        onClick={() => setShowSideBar(true)}
      >
         <MenuIcon  />
      </IconButton>
      <></>
      <Drawer
      anchor={'left'}
      open={showSideBar}
      onClose={() => setShowSideBar(false)}
      style={{backgroundColor: 'none'}}
    >
        <List style={{width: '50vw'}}>
        {!!active && (<ListItem key={'f'}>
        <Link to={`/`} >
          <img id={'home'} alt={'home'} src={`${process.env.PUBLIC_URL}/Navigation/charlie-nav.png`}/>
        </Link>
      </ListItem>)}
    <ListItem key={'f'}>
        <Link to={`/shows`} style={{pointerEvents: active === 'SHOWS' ? 'none' : 'inherit'}}>
          <img id={'SHOWS'} alt={'SHOWS'} src={`${process.env.PUBLIC_URL}/Navigation/${'SHOWS'}.png`} style={{width: '100%'}} className={`Nav ${active === 'SHOWS' ? 'ActiveTab' : '' }`}/>
        </Link>
      </ListItem>
      <ListItem key={'f'}>
        <a href={'https://16b780-2.myshopify.com/'}  target="_blank" rel="noopener noreferrer" >
          <img id={'MERCH'} alt={'MERCH'} src={`${process.env.PUBLIC_URL}/Navigation/${'MERCH'}.png`} style={{width: '100%'}} className={`Nav ${active === 'MERCH' ? 'ActiveTab' : '' }`}/>
        </a>
      </ListItem>
   
  </List>
  <Box style={{width: '40vw', marginLeft:'5vw'}}>
  <SocialLinks /></Box>
    </Drawer>
</Box>

)
}

export default NavigationMobile;


