import Slide from '@mui/material/Slide';

function RedLizard({checked}) {
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/redlizard.png`} className="cutout drawings RedLizard" />
    </Slide>
  )
}

export default RedLizard;