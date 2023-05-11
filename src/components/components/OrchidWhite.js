import Slide from '@mui/material/Slide';

function OrchidWhite({checked}) {
  return (
    <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/orchidwhite.png`} className="cutout drawings OrchidWhite" />
    </Slide>
  )
}

export default OrchidWhite;