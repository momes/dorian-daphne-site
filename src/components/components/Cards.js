import Slide from '@mui/material/Slide';

function Cards({checked}) {
  return (
    <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/cards.gif`} className="cutout drawings Cards" />
    </Slide>
  )
}

export default Cards;