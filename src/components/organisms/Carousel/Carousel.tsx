import { useTranslations } from "next-intl";
import styles from "./Carousel.module.scss";
import {
  Box,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CardCarousel from "@/components/molecules/CardCarousel/CardCarousel";
import Row from "@/components/atoms/Row";
import theme from "@/theme/theme";
import { useEffect, useRef } from "react";

interface CarouselModel {
  data: CarouselItem[];
  dark?: boolean;
}

interface CarouselItem {
  title: string;
  content: string;
  image: string;
}

const Carousel: React.FC<CarouselModel> = ({ data }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const t = useTranslations();
  const paginationRef = useRef<HTMLDivElement | null>(null);

  const swiperProps = {
    modules: [Navigation, Pagination],
    navigation: {
      prevEl: `.${styles.carouselPrevButton}`,
      nextEl: `.${styles.carouselNextButton}`,
    },
    pagination: {
      el: paginationRef.current,
      clickable: true,
    },
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    draggable: true,
  };

  useEffect(() => {
    if (paginationRef.current && swiperProps.pagination) {
      swiperProps.pagination.el = paginationRef.current;
    }
  }, []);

  return (
    <Container className={styles.carouselContainer}>
      <Row>
        <Grid2 size={12}>
          <Box className={styles.titleBox}>
            <Typography variant="h4" component={"div"} className={styles.title}>
              {t("garden_potential_title")}
            </Typography>
            <Typography
              variant="body1"
              component={"div"}
              className={styles.description}
            >
              {t("garden_potential_description")}
            </Typography>
          </Box>
        </Grid2>
      </Row>
      <Row>
        <Grid2 size={12}>
          <Box className={styles.swiperBox}>
            <Swiper {...swiperProps} className={styles.swiper}>
              {data?.map((item, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <Box className={styles.slideBox}>
                    <CardCarousel data={item} />
                  </Box>
                </SwiperSlide>
              ))}
              {!isMobile && (
                <Box className={styles.carouselButtons}>
                  <Box className={styles.carouselPrevButton}>
                    <KeyboardArrowLeftIcon
                      sx={{ fontSize: theme.spacing(24) }}
                    />
                  </Box>
                  <Box className={styles.carouselNextButton}>
                    <KeyboardArrowRightIcon
                      sx={{ fontSize: theme.spacing(24) }}
                    />
                  </Box>
                </Box>
              )}
            </Swiper>
            <Box className={styles.pagination} ref={paginationRef}></Box>
          </Box>
        </Grid2>
      </Row>
    </Container>
  );
};

export default Carousel;
