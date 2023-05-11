import Slide from '@mui/material/Slide';

function Mantis({checked}) {
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/mantis.png`} className="cutout drawings Mantis" />
    </Slide>
  )
}

export default Mantis;