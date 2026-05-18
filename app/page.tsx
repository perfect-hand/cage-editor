import Button from '@mui/material/Button';
import { Container } from "@mui/system";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <main>
      <Container>
        <Typography variant="h1" gutterBottom>CaGE</Typography>
        <Typography variant="subtitle1" gutterBottom>Your platform for creating card games</Typography>
        <Button variant="contained">Hello world</Button>
      </Container>
    </main>
  );
}
