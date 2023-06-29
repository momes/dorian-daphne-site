import React from 'react';
import Typography from '@mui/material/Typography';
import styled from '@mui/material/styles/styled';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const ScrollingText = styled(Typography)`
  position: fixed;
  bottom: 0;
  height:  10vh;
  background-color: transparent;
  color: ${(props) => props.theme.palette.primary.contrastText};
  padding: ${(props) => props.theme.spacing(2)};
  display: flex;
  align-items: center;
  overflow-x: auto;
  animation: scrollText 120s linear infinite;
  white-space: nowrap;
  margin-right: ${(props) => props.theme.spacing(4)};
  &:hover {
    filter: invert(60%) sepia(68%) saturate(2451%) hue-rotate(295deg) brightness(94%) contrast(89%);
cursor:pointer;
cursor: -webkit-grab;};
  @keyframes scrollText {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-70%);
    }
  }
`;

const ScrollingTextMobile = styled(Typography)`
position: fixed;
bottom: 0;
height:  10vh;
background-color: transparent;
color: ${(props) => props.theme.palette.primary.contrastText};
padding: ${(props) => props.theme.spacing(2)};
display: flex;
align-items: center;
overflow-x: auto;
animation: scrollText 30s linear infinite;
white-space: nowrap;
margin-right: ${(props) => props.theme.spacing(4)};
&:hover {
  filter: invert(60%) sepia(68%) saturate(2451%) hue-rotate(295deg) brightness(94%) contrast(89%);
cursor:pointer;
cursor: -webkit-grab;};
@keyframes scrollText {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-70%);
  }
}
`;

const FooterBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
    {!isMobile ? (
    <div>
      <ScrollingText onClick={() => {
    window.open('https://www.momes.work/dorian-store/p/daphne-major-vinyl-pre-order', '_blank');
  }}>
      <img src={`${process.env.PUBLIC_URL}/daphne-assets/preorder.png`} style={{height:'100%',backgroundRepeat: 'repeat-x', margin: '0px 50px'}}/>
      <img src={`${process.env.PUBLIC_URL}/daphne-assets/preorder.png`} style={{height:'100%',backgroundRepeat: 'repeat-x', margin: '0px 50px'}}/>
      <img src={`${process.env.PUBLIC_URL}/daphne-assets/preorder.png`} style={{height:'100%',backgroundRepeat: 'repeat-x', margin: '0px 50px'}}/>

      <img src={`${process.env.PUBLIC_URL}/daphne-assets/preorder.png`} style={{height:'100%',backgroundRepeat: 'repeat-x', margin: '0px 50px'}}/>

      <img src={`${process.env.PUBLIC_URL}/daphne-assets/preorder.png`} style={{height:'100%',backgroundRepeat: 'repeat-x', margin: '0px 50px'}}/>

      <img src={`${process.env.PUBLIC_URL}/daphne-assets/preorder.png`} style={{height:'100%',backgroundRepeat: 'repeat-x', margin: '0px 50px'}}/>

     </ScrollingText>
    </div>) : 
    (<div>
       <ScrollingTextMobile onClick={() => {
    window.open('https://www.momes.work/dorian-store/p/daphne-major-vinyl-pre-order', '_blank');
  }}>
      <img src={`${process.env.PUBLIC_URL}/daphne-assets/preorder.png`} style={{height:'100%',backgroundRepeat: 'repeat-x', margin: '0px 50px'}}/>
      <img src={`${process.env.PUBLIC_URL}/daphne-assets/preorder.png`} style={{height:'100%',backgroundRepeat: 'repeat-x', margin: '0px 50px'}}/>
      <img src={`${process.env.PUBLIC_URL}/daphne-assets/preorder.png`} style={{height:'100%',backgroundRepeat: 'repeat-x', margin: '0px 50px'}}/>

      <img src={`${process.env.PUBLIC_URL}/daphne-assets/preorder.png`} style={{height:'100%',backgroundRepeat: 'repeat-x', margin: '0px 50px'}}/>

      <img src={`${process.env.PUBLIC_URL}/daphne-assets/preorder.png`} style={{height:'100%',backgroundRepeat: 'repeat-x', margin: '0px 50px'}}/>

      <img src={`${process.env.PUBLIC_URL}/daphne-assets/preorder.png`} style={{height:'100%',backgroundRepeat: 'repeat-x', margin: '0px 50px'}}/>

     </ScrollingTextMobile>
    </div> )
}</>
  );
};

export default FooterBanner;