import Slide from '@mui/material/Slide';

function BlueGuy({checked}) {
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/blueguy.png`} className="cutout drawings BlueGuy" />
    </Slide>
  )
}

export default BlueGuy;