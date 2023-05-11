import Slide from '@mui/material/Slide';

function PianoPunch({checked}) {
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/pianopunch.png`} className="cutout drawings PianoPunch" />
    </Slide>
  )
}

export default PianoPunch;