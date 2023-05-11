import Slide from '@mui/material/Slide';

function SpikyPlant({checked}) {
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/spikyplant.png`} className="cutout drawings SpikyPlant" />
    </Slide>
  )
}

export default SpikyPlant;