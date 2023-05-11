import Slide from '@mui/material/Slide';

function Dynamite({checked}) {
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/dynamite.png`} className="cutout drawings Dynamite" />
    </Slide>
  )
}

export default Dynamite;