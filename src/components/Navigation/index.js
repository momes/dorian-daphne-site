import { Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import React from 'react';
import {Link} from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';



const TABS = ['MERCH', 'SHOWS']
function Navigation({active}) {
return (
  <List>
     <ListItem key={'f'}>
        <Link to={`/shows`} style={{pointerEvents: active === 'SHOWS' ? 'none' : 'inherit'}}>
          <img id={'SHOWS'} alt={'SHOWS'} src={`${process.env.PUBLIC_URL}/Navigation/${'SHOWS'}.png`} style={{width: '100%'}} className={`Nav ${active === 'SHOWS' ? 'ActiveTab' : '' }`}/>
        </Link>
      </ListItem>
      <ListItem key={'f'}>
        <a href={`https://www.momes.work/dorian-store`} target="_blank" rel="noopener noreferrer" >
          <img id={'MERCH'} alt={'MERCH'} src={`${process.env.PUBLIC_URL}/Navigation/${'MERCH'}.png`} style={{width: '100%'}} className={`Nav ${active === 'MERCH' ? 'ActiveTab' : '' }`}/>
        </a>
      </ListItem>
    {!!active && (<ListItem key={'f'}>
        <Link to={`/`} >
          <img id={'home'} alt={'home'} src={`${process.env.PUBLIC_URL}/Navigation/charlie-nav.png`}/>
        </Link>
      </ListItem>)}
  </List>
)
}

export default Navigation;