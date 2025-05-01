import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styles from "./LandscapePresentation.module.scss";
import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import theme from "@/theme/theme";

interface LandscapePresentationProps {
    data: ImageProps[];
  }
  
  interface ImageProps {
    src: string;
    title: string;
  }

const LandscapePresentation: React.FC<LandscapePresentationProps> = ({data}) => {
    const swiperProps = {
        modules: [Navigation],
        navigation: {
          prevEl: `.${styles.swiperPrevButton}`,
          nextEl: `.${styles.swiperNextButton}`,
        },
        spaceBetween: 12,
        slidesPerView: 1.05,
        loop: true,
        centeredSlides: true,
        breakpoints: {
          768: {
            slidesPerView: 1.5,
            spaceBetween: 32,
          },
        },
      };

    return(
    <Box>
        <Box>
            <Box><Typography></Typography></Box>
        </Box>
        <Box>
        <Swiper {...swiperProps} className={styles.swiper}>
        {data?.map((image, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <Box className={styles.slideBox}>
              <Image
                src={process.env.NEXT_PUBLIC_SUPABASE_FOLDER + image?.src}
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
    </Box>
    )
}

export default LandscapePresentation;