import Slide from '@mui/material/Slide';

function Shell({checked}) {
  return (
    <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
            <img  src={`${process.env.PUBLIC_URL}/daphne-assets/illustrations/shell.png`} className="cutout drawings Shell" />
    </Slide>
  )
}

export default Shell;