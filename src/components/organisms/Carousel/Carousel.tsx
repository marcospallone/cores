import { useMessages, useTranslations } from "next-intl";
import styles from "./Carousel.module.scss";
import { Box, Container, Typography } from "@mui/material";

interface CarouselModel {
    data: CarouselItem[];
}

interface CarouselItem {
    title: string;
    content: string;
    image: string;
}

const Carousel: React.FC<CarouselModel> = ({data}) => {
  const t = useTranslations();

  return (
    <Container className={styles.carouselContainer}>
      <Box className={styles.titleBox}>
        <Typography
          variant="h4"
          component={"div"}
          className={styles.title}
        >
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
      <Box className={styles.swiperBox}></Box>
    </Container>
  );
};

export default Carousel;
