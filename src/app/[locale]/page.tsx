"use client";

import FadeIn from "@/components/atoms/FadeIn";
import Row from "@/components/atoms/Row";
import Hero from "@/components/organisms/Hero/Hero";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CalculateIcon from "@mui/icons-material/Calculate";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./page.module.scss";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const { ref: countUpRef, inView } = useInView({ triggerOnce: true });
  const numberSeparator = locale === "it" ? "." : ",";

  const heroImages = [
    "/assets/Visit-Scanno-17.jpg",
    "/assets/Hero1.jpg",
    "/assets/DSCF8952.jpg",
  ];
  const hotelImageSrc = "/assets/Hero1.jpg";

  const services = [
    {
      icon: <ArchitectureIcon className={styles.serviceIconSvg} />,
      title: t("home_studio_service1_title"),
      desc: t("home_studio_service1_desc"),
    },
    {
      icon: <CalculateIcon className={styles.serviceIconSvg} />,
      title: t("home_studio_service2_title"),
      desc: t("home_studio_service2_desc"),
    },
    {
      icon: <AccountBalanceIcon className={styles.serviceIconSvg} />,
      title: t("home_studio_service3_title"),
      desc: t("home_studio_service3_desc"),
    },
  ];

  const hotelStats = [
    {
      icon: <SquareFootIcon className={styles.statIconSvg} />,
      end: 2600,
      duration: 2.2,
      separator: numberSeparator,
      label: t("home_hotel_stat1_label"),
    },
    {
      icon: <ApartmentIcon className={styles.statIconSvg} />,
      end: 5,
      duration: 2,
      label: t("home_hotel_stat2_label"),
    },
    {
      icon: <HotelOutlinedIcon className={styles.statIconSvg} />,
      end: 90,
      duration: 2.1,
      label: t("home_hotel_stat3_label"),
    },
  ];

  const contactItems = [
    {
      icon: PlaceIcon,
      label: t("contacts_address"),
      value: t("address"),
      href: "https://maps.app.goo.gl/uisG3vD5gRauRJTH7",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: PhoneIcon,
      label: t("contacts_phone"),
      value: "+39 348 7921802",
      href: "tel:+393487921802",
    },
    {
      icon: MailOutlineIcon,
      label: t("contacts_email"),
      value: "p.spallone@libero.it",
      href: "mailto:p.spallone@libero.it",
    },
  ];

  return (
    <Box>
      <Hero images={heroImages}>
        <Container className={styles.heroContent}>
          <Box className={styles.heroInner}>
            <FadeIn duration={0.5} delay={0.2}>
              <Typography className={styles.heroLabel}>
                {t("home_hero_label")}
              </Typography>
            </FadeIn>
            <FadeIn duration={0.7} delay={0.5}>
              <Typography variant="h1" className={styles.heroTitle}>
                {t("home_hero_title")}
              </Typography>
            </FadeIn>
            <FadeIn duration={0.7} delay={0.8}>
              <Typography className={styles.heroTagline}>
                {t("home_hero_tagline")}
              </Typography>
            </FadeIn>
            <FadeIn duration={0.5} delay={1.1}>
              <Box className={styles.heroButtons}>
                <Button
                  component={Link}
                  href="/garden-hotel"
                  className={styles.heroPrimary}
                >
                  <span className={styles.textWrapper}>{t("home_hero_cta_hotel")}</span>
                  <span className={styles.text}>{t("home_hero_cta_hotel")}</span>
                  <span className={styles.textHover}>{t("home_hero_cta_hotel")}</span>
                </Button>
              </Box>
            </FadeIn>
          </Box>
        </Container>
      </Hero>

      <Box className={styles.studioSection}>
        <Container>
          <Row>
            <Grid2 size={12}>
              <FadeIn>
                <Typography className={styles.sectionLabel}>
                  {t("home_studio_label")}
                </Typography>
              </FadeIn>
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 5 }}>
              <FadeIn delay={0.1}>
                <Typography variant="h2" className={styles.studioTitle}>
                  {t("home_studio_title")}
                </Typography>
                <Typography className={styles.studioDesc}>
                  {t("home_studio_desc")}
                </Typography>
              </FadeIn>
            </Grid2>
            <Grid2 size={{ xs: 0, lg: 1 }} display={{ xs: "none", lg: "block" }} />
            <Grid2 size={{ xs: 12, lg: 6 }}>
              <FadeIn delay={0.2}>
                <Box className={styles.servicesStack}>
                  {services.map((service, i) => (
                    <Box key={i} className={styles.serviceCard}>
                      <Box className={styles.serviceIconWrap}>{service.icon}</Box>
                      <Box className={styles.serviceText}>
                        <Typography className={styles.serviceTitle}>
                          {service.title}
                        </Typography>
                        <Typography className={styles.serviceDesc}>
                          {service.desc}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </FadeIn>
            </Grid2>
          </Row>
        </Container>
      </Box>

      <Box className={styles.hotelSection}>
        <Container>
          <Row className={styles.hotelRow}>
            <Grid2 size={{ xs: 12, lg: 6 }}>
              <FadeIn>
                <Box className={styles.hotelImageBox}>
                  <Image
                    src={hotelImageSrc}
                    alt="Garden Hotel Scanno"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <Box className={styles.hotelImageOverlay} />
                </Box>
              </FadeIn>
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }} className={styles.hotelTextGrid}>
              <FadeIn delay={0.15}>
                <Typography className={styles.sectionLabel}>
                  {t("home_hotel_label")}
                </Typography>
                <Box className={styles.hotelLocationRow}>
                  <PlaceIcon className={styles.hotelLocationIcon} />
                  <Typography className={styles.hotelLocation}>
                    {t("home_hotel_location")}
                  </Typography>
                </Box>
                <Typography variant="h2" className={styles.hotelTitle}>
                  {t("home_hotel_title")}
                </Typography>
                <Typography className={styles.hotelDesc}>
                  {t("home_hotel_desc")}
                </Typography>
                <Box className={styles.hotelStats} ref={countUpRef}>
                  {hotelStats.map((stat) => (
                    <Box key={stat.label} className={styles.hotelStat}>
                      <Box className={styles.statIconBox}>{stat.icon}</Box>
                      {inView && (
                        <CountUp
                          end={stat.end}
                          duration={stat.duration}
                          separator={stat.separator}
                          className={styles.statNumber}
                        />
                      )}
                      <Typography className={styles.statLabel}>
                        {stat.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Button
                  component={Link}
                  href="/garden-hotel"
                  className={styles.hotelCta}
                >
                  <span className={styles.textWrapper}>{t("home_hotel_cta")}</span>
                  <span className={styles.text}>{t("home_hotel_cta")}</span>
                  <span className={styles.textHover}>{t("home_hotel_cta")}</span>
                </Button>
              </FadeIn>
            </Grid2>
          </Row>
        </Container>
      </Box>

      <Box className={styles.contactsSection}>
        <Container>
          <Row>
            <Grid2 size={{ xs: 12, lg: 6 }} className={styles.contactsLeft}>
              <FadeIn>
                <Typography variant="h2" className={styles.contactsTitle}>
                  {t("home_contacts_title")}
                  <br />
                  <span className={styles.contactsTitleAccent}>
                    {t("home_contacts_subtitle")}
                  </span>
                </Typography>
                <Typography className={styles.contactsDesc}>
                  {t("home_contacts_desc")}
                </Typography>
                <Button component={Link} href="/contacts" className={styles.contactsCta}>
                  {t("home_contacts_cta")}
                </Button>
              </FadeIn>
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 6 }} className={styles.contactsRight}>
              <FadeIn delay={0.15}>
                <Box className={styles.contactItems}>
                  {contactItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        target={item.target}
                        rel={item.rel}
                        className={styles.contactItem}
                      >
                        <Icon className={styles.contactIcon} />
                        <Box className={styles.contactMeta}>
                          <Typography component="span" className={styles.contactLabel}>
                            {item.label}
                          </Typography>
                          <Typography component="span" className={styles.contactValue}>
                            {item.value}
                          </Typography>
                        </Box>
                      </Link>
                    );
                  })}
                </Box>
              </FadeIn>
            </Grid2>
          </Row>
        </Container>
      </Box>
    </Box>
  );
}
