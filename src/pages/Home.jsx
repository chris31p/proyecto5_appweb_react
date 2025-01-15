import { Container, Typography } from '@mui/material';
import '../index.css'

function Home() {
  return (
    <Container className="home">
      <div className="background-animation">
      </div>
      <br />
      <Typography variant='h3' gutterBottom>Bienvenido al Mundo de Harry Potter</Typography>
      <br />
      <br />
      <Typography variant="h6" sx={{ lineHeight: 1 }}>La felicidad se puede hallar hasta en los más oscuros momentos, si somos capaces de usar bien la luz.</Typography>
      <br />
      <br />
      <Typography variant="h6" sx={{ fontStyle: "italic" }}>Explora personajes, casas y mucho más del mundo mágico.</Typography>
    </Container>
  );
}

export default Home;