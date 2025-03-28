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
import AddIcon from "@mui/icons-material/Add";
import MenuMobile from "@/components/molecules/MenuMobile/MenuMobile";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Header: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const t = useTranslations();

  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  const handleMenuMobileOpening = () => {
    setMenuMobileOpen(!menuMobileOpen);
  };

  const menuVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <Container className={styles.headerContainer}>
      {isMobile ? (
        <>
          <AnimatePresence>
            {menuMobileOpen && (
              <motion.div
                className={styles.mobileMenu}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
              >
                <MenuMobile open={menuMobileOpen} />
                <Box className={styles.overlay}></Box>
              </motion.div>
            )}
          </AnimatePresence>
          <Box className={styles.leftLogo}>
            <Link href={"/"}>
              <img
                src="/assets/logo-header.svg"
                alt="logo"
                width={250}
                height={100}
              />
            </Link>
          </Box>
          <Box className={styles.mobileMenuOpening}>
            <Button
              className={styles.menuButton}
              endIcon={
                <AddIcon
                  className={`${styles.menuIcon} ${
                    menuMobileOpen ? styles.iconOpen : ""
                  }`}
                  sx={{ marginBottom: theme.spacing(1) }}
                />
              }
              onClick={handleMenuMobileOpening}
            >
              <span className={styles.textWrapper}>Menu</span>
              <span className={styles.text}>Menu</span>
              <span className={styles.textHover}>Menu</span>
            </Button>
          </Box>
        </>
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
