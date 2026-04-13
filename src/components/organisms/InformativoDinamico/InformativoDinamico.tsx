"use client";

import { Box, Container, Grid2, Typography, useMediaQuery } from "@mui/material";
import styles from "./InformativoDinamico.module.scss";
import { useTranslations } from "next-intl";
import Row from "@/components/atoms/Row";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import theme from "@/theme/theme";
import Image from "next/image";

interface InfoItem {
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface InformativoDinamicoModel {
  infos: InfoItem[];
}

const InformativoDinamico: React.FC<InformativoDinamicoModel> = ({ infos }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const t = useTranslations();
  const items = infos?.filter(Boolean) ?? [];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItem = items[selectedIndex] ?? items[0];

  useEffect(() => {
    if (isMobile || items.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % items.length);
    }, 10000);

    return () => window.clearInterval(interval);
  }, [isMobile, items.length, selectedIndex]);

  if (!selectedItem) {
    return null;
  }

  if (isMobile) {
    return (
      <Box className={styles.sectionShell}>
        <Container className={styles.infoContainer}>
          <Box className={styles.sectionIntro}>
            <Typography className={styles.label}>
              {t("garden_features_label")}
            </Typography>
            <Typography variant="h3" className={styles.title}>
              {t("garden_features_title")}
            </Typography>
            <Typography className={styles.description}>
              {t("garden_features_desc")}
            </Typography>
          </Box>
          <Box className={styles.mobileList}>
            {items.map((item, index) => (
              <Box key={`${item.title}-${index}`} className={styles.mobileCard}>
                <Box className={styles.mobileImageBox}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className={styles.mobileImage}
                  />
                  <Box className={styles.mobileOverlay}></Box>
                  <Typography className={styles.mobileIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                </Box>
                <Box className={styles.mobileContent}>
                  <Typography className={styles.mobileTitle}>
                    {item.title}
                  </Typography>
                  <Typography className={styles.mobileDescription}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box className={styles.sectionShell}>
      <Container className={styles.infoContainer}>
        <Row className={styles.infoRow}>
          <Grid2 size={{ xs: 12, lg: 5 }}>
            <Box className={styles.sectionIntro}>
              <Typography className={styles.label}>
                {t("garden_features_label")}
              </Typography>
              <Typography variant="h3" className={styles.title}>
                {t("garden_features_title")}
              </Typography>
              <Typography className={styles.description}>
                {t("garden_features_desc")}
              </Typography>
              <Typography className={styles.helperText}>
                {t("garden_cards_helper")}
              </Typography>
              <Box className={styles.selectorList}>
                {items.map((item, index) => {
                  const isActive = index === selectedIndex;

                  return (
                    <button
                      key={`${item.title}-${index}`}
                      type="button"
                      className={`${styles.selectorButton} ${
                        isActive ? styles.active : ""
                      }`}
                      onClick={() => setSelectedIndex(index)}
                    >
                      <span className={styles.selectorIndex}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.selectorText}>
                        <span className={styles.selectorTitle}>{item.title}</span>
                        <span className={styles.selectorDescription}>
                          {item.description}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 7 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={styles.featureMotion}
              >
                <Box className={styles.featureCard}>
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 58vw"
                    className={styles.featureImage}
                  />
                  <Box className={styles.featureOverlay}></Box>
                  <Box className={styles.featureMeta}>
                    <Typography className={styles.featureIndex}>
                      {String(selectedIndex + 1).padStart(2, "0")}
                    </Typography>
                    <Typography className={styles.featureKicker}>
                      {t("garden_features_label")}
                    </Typography>
                  </Box>
                  <Box className={styles.featureContent}>
                    <Typography variant="h3" className={styles.featureTitle}>
                      {selectedItem.title}
                    </Typography>
                    <Typography className={styles.featureDescription}>
                      {selectedItem.description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Grid2>
        </Row>
      </Container>
    </Box>
  );
};

export default InformativoDinamico;
