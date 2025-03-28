"use client";

import { Box, Container, useMediaQuery } from "@mui/material";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import theme from "@/theme/theme";

const Footer: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const t = useTranslations();

  return (
    <footer className={styles.footer}>
      <Container
        className={
          isMobile
            ? `${styles.footerContainer} ${styles.mobile}`
            : styles.footerContainer
        }
      >
        <Box className={styles.firstRow}>
          <Box className={styles.logo}>
            <Link href={"/"}>
              <img
                src="/assets/logo-header.svg"
                alt="logo"
                width={250}
                height={100}
              />
            </Link>
          </Box>
          <Box className={styles.links}>
            <Link className={styles.link} href={"/properties"}>
              {t("properties")}
            </Link>
            <Link className={styles.link} href={"/garden-hotel"}>
              {t("hotel")}
            </Link>
            <Link className={styles.link} href={"/services"}>
              {t("services")}
            </Link>
          </Box>
          <Box className={styles.location}>
            <PlaceIcon
              className={styles.icon}
              sx={{ color: theme.palette.white[900] }}
            />
            <Link
              href={"https://maps.app.goo.gl/uisG3vD5gRauRJTH7"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.address}
            >
              {t("address")}
            </Link>
          </Box>
          <Box className={styles.tel}>
            <CallIcon
              className={styles.icon}
              sx={{ color: theme.palette.white[900] }}
            />
            <Link href={"tel:+393487921802"} className={styles.phone}>
              +39 348 7921802
            </Link>
          </Box>
        </Box>
        <Box className={styles.secondRow}>
          <Box className={styles.copyright}>{t("copyright")}</Box>
          <Box className={styles.madeBy}>{t("made_by")}</Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
