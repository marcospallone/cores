"use client";

import { Box, Container, Grid2, Typography } from "@mui/material";
import styles from "./Accordion.module.scss";
import Row from "@/components/atoms/Row";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
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

const AUTOPLAY_MS = 20_000;

const Accordion: React.FC<AccordionModel> = ({ zones }) => {
  const t = useTranslations();
  const [expanded, setExpanded] = useState<string>(zones[0]?.panel ?? "");
  const [autoplayKey, setAutoplayKey] = useState(0);

  const activeZone = zones.find((z) => z.panel === expanded) ?? zones[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded((prev) => {
        const idx = zones.findIndex((z) => z.panel === prev);
        return zones[(idx + 1) % zones.length].panel;
      });
    }, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [expanded, autoplayKey, zones]);

  const handleSelect = (panel: string) => {
    setExpanded(panel);
    setAutoplayKey((k) => k + 1);
  };

  if (!activeZone) return null;

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
                <Box className={styles.previewOverlay} />
                <Box className={styles.previewInner}>
                  <Box className={styles.previewIcon}>{activeZone.icon}</Box>
                  <Typography className={styles.previewTag}>
                    {activeZone.data.items.length} {t("garden_kitchen_preview_suffix")}
                  </Typography>
                  <Typography className={styles.previewTitle}>
                    {activeZone.data.title}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, lg: 7 }}>
            <Box className={styles.rightBox}>
              {/* ── Selector ── */}
              <Box className={styles.selectorSection}>
                <Box className={styles.tabGrid}>
                  {zones.map((zone, index) => {
                    const isActive = zone.panel === activeZone.panel;
                    return (
                      <button
                        key={zone.panel}
                        type="button"
                        className={`${styles.tabButton} ${isActive ? styles.active : ""}`}
                        onClick={() => handleSelect(zone.panel)}
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
              </Box>

              {/* ── Content ── */}
              <Box className={styles.contentSection}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeZone.panel}
                    className={styles.motionWrapper}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
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
                            <Box className={styles.listBullet} />
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
            </Box>
          </Grid2>
        </Row>
      </Container>
    </Box>
  );
};

export default Accordion;
