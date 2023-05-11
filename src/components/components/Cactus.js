import Slide from '@mui/material/Slide';

function Cactus({checked}) {
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/cactus.png`} className="cutout drawings Cactus" />
    </Slide>
  )
}

export default Cactus;