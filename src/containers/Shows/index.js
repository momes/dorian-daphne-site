import {React} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MainLayout from '../../components/MainLayout';
import {SHOWS} from './shows.js';

function Shows() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MainLayout active={'SHOWS'}>
      <div style={{margin: '0px auto'}}>
      <Typography style={{color: 'orange', marginTop: '10vh', textAlign: 'center'}}>
         For all booking inquiries, please contact <a href="management@nickdorian.com" target="_blank" rel="noopener noreferrer">management@nickdorian.com</a>
      </Typography>
      {SHOWS.length === 0 && (<Typography style={{color: 'blue', marginTop: '25vh', textAlign: 'center'}}>
         NO UPCOMING SHOWS.
      </Typography>)}
      <>
      {SHOWS.filter((s)=> s.metaDate > new Date()).map((show, i) => 
        (<Box style={{width:isMobile ? "90vw" : "50vw", margin: '5vh auto'}}>
          <Typography style={{color: 'blue', fontWeight: 'bold', textAlign: 'center'}}>
        {show.date}            
        </Typography>
        <Typography style={{color: 'blue', textAlign: 'center'}}>
        {show.name}            
        </Typography>
        <Typography style={{color: 'blue', textAlign: 'center'}}>
        <i>{show.location}</i>  
        </Typography>
        <Typography style={{color: 'blue', textAlign: 'center'}}>
        {show.ticketLink ? (<Button href={`${show.ticketLink}`}  target="_blank"  style={{margin:'2vh auto',color: 'orange',padding:'2% 4%',border: '1px orange solid', borderRadius: '0px'}}>
          Tickets
          </Button>) : (
            <Button disabled style={{margin:'2vh',color: 'white',padding:'2% 4%',border: '1px white solid', borderRadius: '0px'}}>
            FREE
            </Button>
          )}
        
          {SHOWS.length > 1 && i !== SHOWS.length -1 ? (<hr style={{width:'50%'}}/>) : null}   
          </Typography>
          </Box>
       
        )
      )}
      </>
      </div>
    </MainLayout>
  );
}

export default Shows;
