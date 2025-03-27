import { Box } from "@mui/material";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <Box className={styles.hero}>
      <Box className={styles.overlay}></Box>
      <Box className={styles.image}><Image
        src="/assets/Visit-Scanno-17.jpg"
        alt="hero"
        layout="fill"
        objectFit="cover"
        quality={100}
      /></Box>
    </Box>
  );
};

export default Hero;
