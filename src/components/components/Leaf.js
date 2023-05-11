import Slide from '@mui/material/Slide';

function Leaf({checked}) {
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/leaf.png`} className="cutout drawings Leaf" />
    </Slide>
  )
}

export default Leaf;