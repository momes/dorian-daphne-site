import Grow from '@mui/material/Grow';
function Photos({photo, checked}) {
return (
  <Grow  in={checked}>
    <img 
      src={`${process.env.PUBLIC_URL}/daphne-assets/photos/${photo}.png`} 
      className={'Photos cutout'} 
      style={{
            display: checked ? "block" : "none",
            margin: "0 auto"}}/>
  </Grow>
)
}

export default Photos