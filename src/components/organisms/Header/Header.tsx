"use client";

import LanguageSwitcher from "@/components/molecules/LanguageSwitcher/LanguageSwitcher";
import MenuMobile from "@/components/molecules/MenuMobile/MenuMobile";
import theme from "@/theme/theme";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Container, useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const transparentPathname = ["/en", "/it", "/en/garden-hotel", "/it/garden-hotel"];

const Header: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const t = useTranslations();

  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  const handleMenuMobileOpening = () => {
    setMenuMobileOpen(!menuMobileOpen);
  };

  const pathname = usePathname();
  const transparent = transparentPathname.includes(pathname);

  useEffect(() => {
    if (menuMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuMobileOpen]);

  const menuVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: { type: "spring", damping: 20, stiffness: 150 },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 150 },
    },
  };

  return (
    <header>
      <Container
        className={
          transparent
            ? `${styles.headerContainer} ${styles.transparent}`
            : styles.headerContainer
        }
      >
        {isMobile ? (
          <>
            <AnimatePresence>
              {menuMobileOpen && (
                <>
                  <motion.div
                    className={styles.mobileMenu}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                  >
                    <MenuMobile />
                  </motion.div>
                  <motion.div
                    className={styles.blur}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={handleMenuMobileOpening}
                  ></motion.div>
                </>
              )}
            </AnimatePresence>
            <Box className={styles.mobileHeader}>
              <Box className={styles.leftLogo}>
                <Link href={"/"}>
                  <img
                    src="/assets/logo-header.svg"
                    alt="logo"
                    width={200}
                    height={80}
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
                  Menu
                </Button>
              </Box>
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
              <Button className={styles.contactButton} href={"/contacts"}>
                <span className={styles.textWrapper}>
                  {t("contact_button")}
                </span>
                <span className={styles.text}>{t("contact_button")}</span>
                <span className={styles.textHover}>{t("contact_button")}</span>
              </Button>
            </Box>
          </>
        )}
      </Container>
    </header>
  );
};

export default Header;
