"use client";

import { Box, Container, Typography } from "@mui/material";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import styles from "./LandscapePresentation.module.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import theme from "@/theme/theme";
import CardLandscape from "@/components/molecules/CardLandscape/CardLandscape";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

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
  const t = useTranslations();
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    spaceBetween: 18,
    slidesPerView: 1.03,
    loop: (data?.items?.length ?? 0) > 1,
    grabCursor: true,
    centeredSlides: false,
    breakpoints: {
      768: {
        slidesPerView: 1.05,
        spaceBetween: 22,
      },
      1200: {
        slidesPerView: 1.14,
        spaceBetween: 28,
      },
    },
  };

  useEffect(() => {
    const pagination = swiperInstance?.params.pagination;

    if (
      swiperInstance &&
      paginationRef.current &&
      pagination &&
      typeof pagination !== "boolean"
    ) {
      pagination.el = paginationRef.current;
      swiperInstance.pagination.init();
      swiperInstance.pagination.render();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance]);

  return (
    <Box className={styles.landscapePresentation}>
      <Container className={styles.landscapeContainer}>
        <Box className={styles.topBar}>
          <Box className={styles.introPanel}>
            <Typography className={styles.label}>
              {t("garden_landscape_label")}
            </Typography>
            <Typography variant="h3" className={styles.title}>
              {data?.title}
            </Typography>
            <Typography className={styles.description}>
              {data?.description}
            </Typography>
          </Box>
          <Box className={styles.sidePanel}>
            <Box className={styles.controls}>
              <Typography className={styles.counter}>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(data?.items?.length ?? 0).padStart(2, "0")}
              </Typography>
              <Box className={styles.pagination} ref={paginationRef}></Box>
              <Box className={styles.landscapeButtons}>
                <Box className={styles.landscapePrevButton}>
                  <KeyboardArrowLeftIcon
                    sx={{ fontSize: theme.spacing(22) }}
                  />
                </Box>
                <Box className={styles.landscapeNextButton}>
                  <KeyboardArrowRightIcon
                    sx={{ fontSize: theme.spacing(22) }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles.swiperShell}>
          <Box className={styles.swiperBox}>
            <Swiper
              {...swiperProps}
              className={styles.swiper}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {data?.items?.map((item, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <CardLandscape data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandscapePresentation;
