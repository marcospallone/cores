import { Box, Container, Grid2, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import styles from "./LandscapePresentation.module.scss";
import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import theme from "@/theme/theme";
import CardLandscape from "@/components/molecules/CardLandscape/CardLandscape";
import { useEffect, useRef } from "react";
import Row from "@/components/atoms/Row";

interface LandscapePresentationProps {
  data: {
    title: string;
    description: string;
    items: LandscapeItem[];
  };
}

interface LandscapeItem {
  title: string;
  content: string;
  image: string;
}

const LandscapePresentation: React.FC<LandscapePresentationProps> = ({
  data,
}) => {
  const paginationRef = useRef<HTMLDivElement | null>(null);

  const swiperProps = {
    modules: [Navigation, Pagination],
    navigation: {
      prevEl: `.${styles.landscapePrevButton}`,
      nextEl: `.${styles.landscapeNextButton}`,
    },
    pagination: {
      el: paginationRef.current,
      clickable: true,
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

  useEffect(() => {
    if (paginationRef.current && swiperProps.pagination) {
      swiperProps.pagination.el = paginationRef.current;
    }
  }, []);

  return (
    <Box className={styles.landscapePresentation}>
      <Container className={styles.landscapeContainer}>
        <Row>
          <Grid2 size={12}>
            <Box className={styles.text}>
              <Typography
                variant="h4"
                component={"div"}
                className={styles.title}
              >
                {data?.title}
              </Typography>
              <Typography
                variant="body1"
                component={"div"}
                className={styles.description}
              >
                {data?.description}
              </Typography>
            </Box>
          </Grid2>
        </Row>
      </Container>
      <Box className={styles.swiperBox}>
        <Swiper {...swiperProps} className={styles.swiper}>
          {data?.items?.map((item, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <CardLandscape data={item} />
            </SwiperSlide>
          ))}
          <Box className={styles.landscapeButtons}>
            <Box className={styles.landscapePrevButton}>
              <KeyboardArrowLeftIcon sx={{ fontSize: theme.spacing(24) }} />
            </Box>
            <Box className={styles.landscapeNextButton}>
              <KeyboardArrowRightIcon sx={{ fontSize: theme.spacing(24) }} />
            </Box>
          </Box>
        </Swiper>
        <Box className={styles.pagination} ref={paginationRef}></Box>
      </Box>
    </Box>
  );
};

export default LandscapePresentation;
