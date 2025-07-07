import Hero from "@/components/organisms/Hero/Hero";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";

export default function Home({params}: any) {
    const { locale } = params;

  const validLocales = ['it', 'en'];

  if (!validLocales.includes(locale)) {
    notFound();
  }

  return (
    <Box sx={{ height: "100vh" }}>
      <Hero images={['/assets/Visit-Scanno-17.jpg']}/>
    </Box>
  );
}
