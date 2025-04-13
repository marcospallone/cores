import styles from "./Gallery.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import theme from "@/theme/theme";

interface GalleryProps {
  data: ImageProps[];
}

interface ImageProps {
  src: string;
  title: string;
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const swiperProps = {
    modules: [Navigation],
    navigation: {
      prevEl: `.${styles.swiperPrevButton}`,
      nextEl: `.${styles.swiperNextButton}`,
    },
    spaceBetween: 32,
    slidesPerView: 1.5,
    loop: true,
    centeredSlides: true,
  };

  return (
    <Box className={styles.galleryBox}>
      <Swiper {...swiperProps} className={styles.swiper}>
        {data?.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Box className={styles.slideBox}>
              <Image
                src={image?.src}
                alt={`Gallery Image ${index + 1}`}
                width={1200}
                height={1000}
                className={styles.image}
              />
              <Box className={styles.overlay}></Box>
              <Box className={styles.titleBox}>
                <Typography
                  variant="caption"
                  component="div"
                  className={styles.title}
                >
                  {image?.title}
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
        <Box className={styles.swiperButtons}>
          <Box className={styles.swiperPrevButton}>
            <KeyboardArrowLeftIcon sx={{ fontSize: theme.spacing(24) }} />
          </Box>
          <Box className={styles.swiperNextButton}>
            <KeyboardArrowRightIcon sx={{ fontSize: theme.spacing(24) }} />
          </Box>
        </Box>
      </Swiper>
    </Box>
  );
};

export default Gallery;
