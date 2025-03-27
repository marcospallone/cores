import Hero from "@/components/organisms/Hero/Hero";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh" }}>
      <Hero />
    </Box>
  );
}
