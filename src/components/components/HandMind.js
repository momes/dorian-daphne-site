import Slide from '@mui/material/Slide';

function HandMind({checked}) {
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/handmind.png`} className="cutout drawings HandMind" />
    </Slide>
  )
}

export default HandMind;