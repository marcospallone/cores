"use client";

import { Box, Container, Grid2, Typography } from "@mui/material";
import styles from "./Accordion.module.scss";
import Row from "@/components/atoms/Row";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

interface ZoneData {
  title: string;
  description: string;
  items: string[];
}

interface Zone {
  data: ZoneData;
  icon: React.ReactNode;
  panel: string;
  image: string;
}

interface AccordionModel {
  zones: Zone[];
}

const Accordion: React.FC<AccordionModel> = ({ zones }) => {
  const t = useTranslations();
  const [expanded, setExpanded] = useState<string>(zones[0]?.panel ?? "");
  const activeZone =
    zones.find((zone) => zone.panel === expanded) ?? zones[0];

  if (!activeZone) {
    return null;
  }

  return (
    <Box className={styles.sectionShell}>
      <Container className={styles.accordionsContainer}>
        <Row className={styles.layout}>
          <Grid2 size={{ xs: 12, lg: 5 }}>
            <Box className={styles.leftBox}>
              <Typography className={styles.label}>
                {t("garden_kitchen_label")}
              </Typography>
              <Typography variant="h3" className={styles.title}>
                {t("garden_kitchen_title")}
              </Typography>
              <Typography className={styles.desc}>
                {t("garden_kitchen_desc")}
              </Typography>
              <Box className={styles.previewCard}>
                <Image
                  src={activeZone.image}
                  alt={activeZone.data.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 42vw"
                  className={styles.previewImage}
                />
                <Box className={styles.previewOverlay}></Box>
                <Box className={styles.previewInner}>
                  <Box className={styles.previewIcon}>{activeZone.icon}</Box>
                  <Typography className={styles.previewTag}>
                    {activeZone.data.items.length} {t("garden_kitchen_preview_suffix")}
                  </Typography>
                  <Typography className={styles.previewTitle}>
                    {activeZone.data.title}
                  </Typography>
                  <Typography className={styles.previewText}>
                    {activeZone.data.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 7 }}>
            <Box className={styles.rightBox}>
              <Box className={styles.tabGrid}>
                {zones.map((zone, index) => {
                  const isActive = zone.panel === activeZone.panel;

                  return (
                    <button
                      key={zone.panel}
                      type="button"
                      className={`${styles.tabButton} ${
                        isActive ? styles.active : ""
                      }`}
                      onClick={() => setExpanded(zone.panel)}
                    >
                      <span className={styles.tabIcon}>{zone.icon}</span>
                      <span className={styles.tabText}>
                        <span className={styles.tabIndex}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className={styles.tabTitle}>{zone.data.title}</span>
                      </span>
                    </button>
                  );
                })}
              </Box>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeZone.panel}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Box className={styles.detailsCard}>
                    <Box className={styles.detailsHeader}>
                      <Box className={styles.detailsIcon}>{activeZone.icon}</Box>
                      <Box className={styles.detailsHeading}>
                        <Typography className={styles.detailsTitle}>
                          {activeZone.data.title}
                        </Typography>
                        <Typography className={styles.detailsText}>
                          {activeZone.data.description}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={styles.listGrid}>
                      {activeZone.data.items.map((item, index) => (
                        <Box key={`${item}-${index}`} className={styles.listItem}>
                          <Box className={styles.listBullet}></Box>
                          <Typography className={styles.listText}>
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </motion.div>
              </AnimatePresence>
            </Box>
          </Grid2>
        </Row>
      </Container>
    </Box>
  );
};

export default Accordion;
