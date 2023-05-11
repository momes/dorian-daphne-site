import Slide from '@mui/material/Slide';

function Clown({checked}) {
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/clown.png`} className="cutout drawings Clown" />
    </Slide>
  )
}

export default Clown;