"use client";

import { Box, Grid2, Typography, IconButton, Container } from "@mui/material";
import styles from "./InformativoDinamico.module.scss";
import { useMessages, useTranslations } from "next-intl";
import Row from "@/components/atoms/Row";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";

const InformativoDinamico: React.FC = () => {
  const t = useTranslations();
  const m = useMessages();
  const infos = [
    m?.garden_rooms,
    m?.garden_spaces,
    m?.garden_restaurant,
    m?.garden_service,
    m?.garden_parking,
    m?.garden_outdoor,
    m?.garden_position,
    m?.garden_surroundings,
  ];

  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  return (
    <Box className={styles.infoMainBox}>
      <motion.div
        className={`${styles.rowWrapper} ${selectedItem ? styles.blurred : ""}`}
        animate={{
          filter: selectedItem ? "blur(8px)" : "blur(0px)",
          opacity: selectedItem ? 0.4 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Row spacing={{ xs: 0 }} className={styles.infoRow}>
          {infos?.map((item: any, index: number) => (
            <Grid2
              key={index}
              size={1.5}
              className={styles.itemBox}
              sx={{
                backgroundImage: `url(${
                  process.env.NEXT_PUBLIC_SUPABASE_FOLDER + item?.image
                })`,
              }}
              onClick={() => setSelectedItem(item)}
            >
              <Box className={styles.overlay}></Box>
              <Box className={styles.textBox}>
                <Typography variant="h5" className={styles.title}>
                  {item?.title}
                </Typography>
              </Box>
            </Grid2>
          ))}
        </Row>
      </motion.div>
      <AnimatePresence mode="wait">
        {selectedItem && (
          <motion.div
            key="selected"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={styles.selectedViewMotion}
          >
            <Box
              className={styles.selectedView}
              sx={{
                backgroundImage: `url(${
                  process.env.NEXT_PUBLIC_SUPABASE_FOLDER + selectedItem?.image
                })`,
              }}
            >
              <Box className={styles.overlay}></Box>
              <Container className={styles.selectedViewContent}>
                <Box
                  className={styles.closeIconBox}
                  onClick={() => setSelectedItem(null)}
                >
                  <CloseIcon />
                </Box>
                <Box className={styles.textBox}>
                  <Typography variant="h4" className={styles.title}>
                    {selectedItem?.title}
                  </Typography>
                  <Typography className={styles.description}>
                    {selectedItem?.description}
                  </Typography>
                </Box>
              </Container>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
      {!selectedItem && (
        <Box className={styles.helperTextBox}>
          <Typography
            variant="body1"
            component={"div"}
            className={styles.helperText}
          >
            {t("garden_cards_helper")}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default InformativoDinamico;
