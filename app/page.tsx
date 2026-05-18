"use client";

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <main>
      <Container>
        <Stack
          spacing={4}
          sx={{
            alignItems: "center"
          }}>
          <Container>
            <Typography variant="h1" align="center">CaGE</Typography>
            <Typography variant="subtitle1" align="center">Your platform for creating card games</Typography>
          </Container>
          <Button variant="contained">Hello world</Button>
        </Stack>
      </Container>
    </main>
  );
}
