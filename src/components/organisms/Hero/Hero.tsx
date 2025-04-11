"use client";

import { Box, Container, Typography } from "@mui/material";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  images: string[];
  title?: string;
}

const Hero: React.FC<HeroProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box className={styles.hero}>
      <Box className={styles.overlay}></Box>
      <Box className={styles.imageWrapper}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="hero"
            layout="fill"
            objectFit="cover"
            quality={100}
            className={`${styles.image} ${
              index === currentIndex ? styles.active : ""
            }`}
          />
        ))}
      </Box>
      {title && (
        <Container className={styles.title}>
          <Typography variant="h1" className={styles.titleText}>
            {title}
          </Typography>
        </Container>
      )}
    </Box>
  );
};

export default Hero;
