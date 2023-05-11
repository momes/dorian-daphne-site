import Slide from '@mui/material/Slide';

function Mushroom({checked}) {
  return (
    <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/mushroombox.png`} className="cutout drawings Mushroom" />
    </Slide>
  )
}

export default Mushroom;