"use client";

import {
  Box,
  Container,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./Accordion.module.scss";
import Row from "@/components/atoms/Row";
import { useMessages, useTranslations } from "next-intl";
import { useState } from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { AnimatePresence, motion } from "motion/react";
import LensBlurIcon from "@mui/icons-material/LensBlur";
import theme from "@/theme/theme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AnimatedAccordion from "@/components/molecules/AnimatedAccordion/AnimatedAccordion";

interface AccordionModel {
  zones: any;
}

const Accordion: React.FC<AccordionModel> = ({zones}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const t = useTranslations();
  const m = useMessages();
  const [expanded, setExpanded] = useState<string | false>(false);
  const [showIconBox, setShowIconBox] = useState(false);

  const currentZone = zones.find((zone: any) => zone.panel === expanded);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      if (isExpanded && !isMobile) {
        const timeout = setTimeout(() => {
          setShowIconBox(true);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setShowIconBox(false);
      }
    };

  return (
    <Container className={styles.accordionsContainer}>
      <Row>
        <Grid2 size={{ xs: 12, lg: 5 }}>
          <Box className={styles.leftBox}>
            <Box className={styles.textBox}>
              <Typography
                variant="h5"
                component={"div"}
                className={styles.title}
              >
                {t("garden_kitchen_title")}
              </Typography>
              <Typography
                variant="body1"
                component={"div"}
                className={styles.desc}
              >
                {t("garden_kitchen_desc")}
              </Typography>
            </Box>
            {showIconBox && currentZone && (
              <Box className={styles.iconBox}>
                <AnimatePresence mode="wait">
                  {expanded && currentZone && (
                    <motion.div
                      key={currentZone.panel}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.1, delay: 0.3 }}
                    >
                      {currentZone.icon}
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            )}
          </Box>
        </Grid2>
        <Grid2 size={1} display={{ xs: "none", lg: "block" }}></Grid2>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <Box className={styles.accordionBox}>
            {zones?.map((zone: any, index: number) => (
              <AnimatedAccordion
                key={index}
                index={index}
                expanded={expanded === zone?.panel}
                onChange={handleChange(zone?.panel)}
                className={styles.accordion}
                sx={{
                  "&.Mui-expanded": {
                    margin: "0 !important",
                  },
                }}
              >
                <AccordionSummary
                  className={styles.accordionSummary}
                  expandIcon={
                    <ExpandMoreIcon sx={{ color: theme.palette.white[900] }} />
                  }
                  sx={{
                    "&.Mui-expanded": {
                      minHeight: "48px !important",
                      margin: "0 !important",
                    },
                    "&.Mui-expanded .MuiAccordionSummary-expandIconWrapper": {
                      transform: "rotate(180deg)",
                    },
                    ".MuiAccordionSummary-content": {
                      transition: "none",
                    },
                    "&:hover .MuiAccordionSummary-content svg": {
                      color: `${theme.palette.primary.main} !important`,
                    },
                    ".MuiAccordionSummary-expandIconWrapper": {
                      transition:
                        "background-color 0.3s ease-in-out, transform 0.2s ease-in-out",
                      borderRadius: "50%",
                    },
                    "&:hover .MuiAccordionSummary-expandIconWrapper": {
                      backgroundColor: theme.palette.primary.main,
                    },
                  }}
                >
                  {zone?.icon}
                  <Typography
                    variant="body1"
                    component={"div"}
                    className={styles.accordionSummaryText}
                  >
                    {zone?.data?.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={styles.accordionDetails}>
                  <Typography
                    variant="body1"
                    component={"div"}
                    className={styles.accordionDetailsText}
                  >
                    {zone?.data?.description}
                  </Typography>
                  <List className={styles.accordionList}>
                    {zone?.data?.items.map((item: any, index: number) => (
                      <ListItem
                        key={index}
                        className={styles.accordionListItem}
                      >
                        <ListItemIcon className={styles.accordionListIcon}>
                          <LensBlurIcon
                            sx={{ color: theme.palette.white[900] }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          className={styles.accordionListText}
                        />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </AnimatedAccordion>
            ))}
          </Box>
        </Grid2>
      </Row>
    </Container>
  );
};

export default Accordion;
