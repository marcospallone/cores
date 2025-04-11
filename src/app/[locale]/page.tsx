import Hero from "@/components/organisms/Hero/Hero";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Hero images={['/assets/Visit-Scanno-17.jpg']}/>
    </Box>
  );
}
