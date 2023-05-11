import Slide from '@mui/material/Slide';

function Phone({checked}) {
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/phone.png`} className="cutout drawings Phone" />
    </Slide>
  )
}

export default Phone;