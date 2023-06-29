import {useState, useEffect} from 'react';
import MainLayout from "../../components/MainLayout";
import PianoCarousel from "./components/PianoCarousel";
import  FooterBanner from './components/FooterBanner'
import './Home.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isLoading, setIsLoading] = useState(true)
  const [isGame, setIsGame] = useState(false)

  useEffect(function showLoadingScreen() {
    if (isLoading) {
    setTimeout(function() {
      setIsLoading(false);
    }, 1800)
  }}, [isLoading, setIsLoading])

  return (
    <>
      {isLoading 
        ? (<>
            <img style={{width: '50vw', margin:isMobile?"25vh 25vw":"0vw 25vw"}} src={`${process.env.PUBLIC_URL}/daphne-assets/Charlie_run_Cycle.gif`} /> 
          </> ) : 
          (<MainLayout className={'Game'}>
            <PianoCarousel isLoading={isLoading} setIsGame={setIsGame}/>
            <FooterBanner />
          </MainLayout>)}
    </>
  );
}

export default Home;
