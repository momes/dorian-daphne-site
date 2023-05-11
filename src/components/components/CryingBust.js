import Slide from '@mui/material/Slide';

function CryingBust({checked}) {
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/cryingbust.png`} className="cutout drawings CryingBust" />
    </Slide>
  )
}

export default CryingBust;