import Slide from '@mui/material/Slide';

function PianoPrism({checked}) {
  return (
    <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/pianoprism.png`} className="cutout drawings PianoPrism" />
    </Slide>
  )
}

export default PianoPrism;