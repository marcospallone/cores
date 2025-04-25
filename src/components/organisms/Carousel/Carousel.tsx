import { useTranslations } from "next-intl";
import styles from "./Carousel.module.scss";
import { Box, Container, Grid2, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CardCarousel from "@/components/molecules/CardCarousel/CardCarousel";
import Row from "@/components/atoms/Row";
import theme from "@/theme/theme";

interface CarouselModel {
  data: CarouselItem[];
}

interface CarouselItem {
  title: string;
  content: string;
  image: string;
}

const Carousel: React.FC<CarouselModel> = ({ data }) => {
  const t = useTranslations();

  const swiperProps = {
    modules: [Navigation, Pagination],
    navigation: {
      prevEl: `.${styles.carouselPrevButton}`,
      nextEl: `.${styles.carouselNextButton}`,
    },
    pagination: {
      el: `.${styles.pagination}`,
      bulletClass: `.${styles.swiperCustomBullet}`,
      bulletActiveClass: `.${styles.swiperCustomBulletActive}`,
      clickable: true,
    },
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
  };

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
              <Box className={styles.carouselButtons}>
                <Box className={styles.carouselPrevButton}>
                  <KeyboardArrowLeftIcon sx={{ fontSize: theme.spacing(24) }} />
                </Box>
                <Box className={styles.carouselNextButton}>
                  <KeyboardArrowRightIcon
                    sx={{ fontSize: theme.spacing(24) }}
                  />
                </Box>
              </Box>
              <Box className={styles.pagination}></Box>

            </Swiper>
          </Box>
        </Grid2>
      </Row>
    </Container>
  );
};

export default Carousel;
