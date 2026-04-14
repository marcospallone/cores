"use client";

import theme from "@/theme/theme";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from "@mui/icons-material/Place";
import { Box, Button, Container, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const t = useTranslations();
  const email = "p.spallone@libero.it";

  const isContacts = usePathname().endsWith("/contacts");

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
            <Link className={styles.link} href={"/garden-hotel"}>
              {t("hotel")}
            </Link>
          </Box>
          <Box className={styles.location}>
            <Link
              href={"https://maps.app.goo.gl/uisG3vD5gRauRJTH7"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.locationLink}
            >
              <PlaceIcon
                className={styles.locationIcon}
                sx={{ color: theme.palette.white[900] }}
              />
              <span className={styles.locationText}>{t("address")}</span>
            </Link>
            <Link
              href={`mailto:${email}`}
              className={`${styles.locationLink} ${styles.emailLink}`}
            >
              <MailIcon
                className={styles.locationIcon}
                sx={{ color: theme.palette.white[900] }}
              />
              <span className={styles.locationText}>{email}</span>
            </Link>
          </Box>
          {!isContacts && (
            <Box className={styles.contacts}>
              <Button className={styles.contactsButton} href={"/contacts"}>
                <MailIcon
                  className={styles.icon}
                  sx={{ color: theme.palette.white[900] }}
                />
                <span className={styles.textWrapper}>{t("contacts_link")}</span>
                <span className={styles.text}>{t("contacts_link")}</span>
                <span className={styles.textHover}>{t("contacts_link")}</span>
              </Button>
            </Box>
          )}
        </Box>
        <Box className={styles.secondRow}>
          <Box className={styles.copyright}>{t("copyright")}</Box>
          <Box className={styles.madeBy}>
            {t("made_by")}{" "}
            <Link
              href={"https://www.marcospallone.com"}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.madeByLink}
            >
              Marco Spallone
            </Link>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
