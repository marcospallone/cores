"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher/LanguageSwitcher";

const Header: React.FC = () => {
  const t = useTranslations();

  return (
    <Container className={styles.headerContainer}>
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
          <img src="/logo-header.svg" alt="logo" />
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
    </Container>
  );
};

export default Header;
