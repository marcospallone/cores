"use client";

import {
  Box,
  Grid2,
  Typography,
  Container,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import styles from "./InformativoDinamico.module.scss";
import { useTranslations } from "next-intl";
import Row from "@/components/atoms/Row";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "framer-motion";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import theme from "@/theme/theme";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface InformativoDinamicoModel {
  infos: any;
}

const InformativoDinamico: React.FC<InformativoDinamicoModel> = ({infos}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const t = useTranslations();

  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  if (isMobile) {
    return (
      <Box className={styles.mobileAccordionBox}>
        {infos?.map((item: any, index: number) => (
          <Accordion
            key={index}
            className={styles.mobileAccordion}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              backgroundImage: `url(${
                process.env.NEXT_PUBLIC_SUPABASE_FOLDER + item?.image
              })`,
              ".MuiAccordionSummary-content": {
                margin: 0,
              },
              "&.Mui-expanded": {
                margin: "0 !important",
              },
              "&.Mui-expanded svg": {
                transform: "rotate(180deg)",
              },
            }}
          >
            <AccordionSummary className={styles.accordionSummary} sx={{}}>
              <Box className={styles.overlay}></Box>
              <Box className={styles.accordionSummaryContent}>
                <Typography variant="h5" className={styles.title}>
                  {item?.title}
                  <KeyboardArrowDownIcon sx={{ marginLeft: theme.spacing(8)}} />
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetails}>
              <Box className={styles.overlay}></Box>
              <Container className={styles.textContainer}>
                <Typography variant="body1" className={styles.description}>
                  {item?.description}
                </Typography>
              </Container>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    );
  } else {
    return (
      <Box className={styles.infoMainBox}>
        <motion.div
          className={`${styles.rowWrapper} ${
            selectedItem ? styles.blurred : ""
          }`}
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
                size={{ xs: 12, md: 6, lg: 3, xxl: 1.5 }}
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
                    process.env.NEXT_PUBLIC_SUPABASE_FOLDER +
                    selectedItem?.image
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
                    <Typography variant="body1" className={styles.description}>
                      {selectedItem?.description}
                    </Typography>
                  </Box>
                </Container>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
        {!selectedItem && !isMobile && (
          <Box className={styles.helperTextBox}>
            <motion.div
              animate={{
                x: [-10, 0, 10, 0, -10],
                y: [-10, 0, -10, 0, -10],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={styles.helperIcon}
            >
              <TouchAppIcon sx={{ fontSize: 32 }} />
            </motion.div>
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
  }
};

export default InformativoDinamico;
