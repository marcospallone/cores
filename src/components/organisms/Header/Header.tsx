"use client";

import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher/LanguageSwitcher";
import theme from "@/theme/theme";

const Header: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const t = useTranslations();

  return (
    <Container className={styles.headerContainer}>
      {isMobile ? (
        <></>
      ) : (
        <>
          <Box className={styles.leftHeader}>
            <Link className={styles.leftLink} href={"/properties"}>
              {t("properties")}
            </Link>
            <Link className={styles.leftLink} href={"/garden-hotel"}>
              {t("hotel")}
            </Link>
            <Link className={styles.leftLink} href={"/services"}>
              {t("services")}
            </Link>
          </Box>
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
          <Box className={styles.rightHeader}>
            <LanguageSwitcher />
            <Button className={styles.contactButton}>
              <span className={styles.textWrapper}>{t("contact_button")}</span>
              <span className={styles.text}>{t("contact_button")}</span>
              <span className={styles.textHover}>{t("contact_button")}</span>
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Header;
