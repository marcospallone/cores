"use client";

import FadeIn from "@/components/atoms/FadeIn";
import Hero from "@/components/organisms/Hero/Hero";
import { Box, Button, Container, Typography } from "@mui/material";
import { useMessages, useTranslations } from "next-intl";
import styles from "./page.module.scss";
import InformativoTextImage from "@/components/organisms/InformativoTextImage/InformativoTextImage";
import Gallery from "@/components/organisms/Gallery/Gallery";
import Accordion from "@/components/organisms/Accordion/Accordion";
import InformativoNumbers from "@/components/organisms/InformativoNumbers/InformativoNumbers";
import InformativoDinamico from "@/components/organisms/InformativoDinamico/InformativoDinamico";
import CarouselPotentiality from "@/components/organisms/CarouselPotentiality/CarouselPotentiality";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import GridViewIcon from "@mui/icons-material/GridView";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import OpacityIcon from "@mui/icons-material/Opacity";
import theme from "@/theme/theme";
import LandscapePresentation from "@/components/organisms/LandscapePresentation/LandscapePresentation";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface InfoItem {
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface GalleryImage {
  src: string;
  title: string;
}

interface KitchenZone {
  title: string;
  description: string;
  items: string[];
}

interface LandscapeItem {
  title: string;
  content: string;
  image: string;
}

interface PotentialItem {
  title: string;
  content: string;
  image: string;
}

interface GardenMessages {
  garden_rooms: InfoItem;
  garden_spaces: InfoItem;
  garden_restaurant: InfoItem;
  garden_service: InfoItem;
  garden_parking: InfoItem;
  garden_outdoor: InfoItem;
  garden_position: InfoItem;
  garden_surroundings: InfoItem;
  garden_images: GalleryImage[];
  garden_kitchen_zone1: KitchenZone;
  garden_kitchen_zone2: KitchenZone;
  garden_kitchen_zone3: KitchenZone;
  garden_kitchen_zone4: KitchenZone;
  garden_landscape_items: LandscapeItem[];
  garden_potential_items: PotentialItem[];
}

const GardenHotel: React.FC = () => {
  const m = useMessages() as unknown as GardenMessages;
  const t = useTranslations();

  const heroImages = [
    "/assets/Hero1.jpg",
    "/assets/DSCF9193.jpg",
    "/assets/DSCN0107.jpg",
    "/assets/DSCN0143.jpg",
    "/assets/DSCN0147.jpg",
    "/assets/DSCN0153.jpg",
    "/assets/DSCN0156.jpg",
    "/assets/DSCN0170.jpg",
    "/assets/DSCN0175.jpg",
    "/assets/DSCN0209.jpg",
    "/assets/DSCN0242.jpg",
    "/assets/DSCN0271.jpg",
  ];

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

  const gardenImages = m?.garden_images;
  const sectionLinks = [
    { href: "#overview", label: t("garden_overview") },
    { href: "#features", label: t("garden_features_label") },
    { href: "#kitchen", label: t("garden_kitchen_label") },
    { href: "#landscape", label: t("garden_landscape_label") },
  ];

  const zone1 = m?.garden_kitchen_zone1;
  const zone2 = m?.garden_kitchen_zone2;
  const zone3 = m?.garden_kitchen_zone3;
  const zone4 = m?.garden_kitchen_zone4;

  const zones = [
    {
      data: zone1,
      icon: <GridViewIcon sx={{ color: theme.palette.white[900] }} />,
      panel: "panel1",
      image: "/assets/DSCN0068.jpg",
    },
    {
      data: zone2,
      icon: (
        <LocalFireDepartmentIcon sx={{ color: theme.palette.white[900] }} />
      ),
      panel: "panel2",
      image: "/assets/DSCN0062.jpg",
    },
    {
      data: zone3,
      icon: <AcUnitIcon sx={{ color: theme.palette.white[900] }} />,
      panel: "panel3",
      image: "/assets/DSCN0068.jpg",
    },
    {
      data: zone4,
      icon: <OpacityIcon sx={{ color: theme.palette.white[900] }} />,
      panel: "panel4",
      image: "/assets/DSCN0070.jpg",
    },
  ];

  const landscapeData = {
    title: t("garden_landscape_title"),
    description: t("garden_landscape_description"),
    items: m?.garden_landscape_items,
  };

  const carouselItems = m?.garden_potential_items;

  return (
    <>
      <Hero images={heroImages}>
        <Container className={styles.heroContent}>
          <Box className={styles.heroInner}>
            <FadeIn duration={0.5} delay={0.15}>
              <Typography className={styles.heroLabel}>
                {t("garden_hero_label")}
              </Typography>
            </FadeIn>
            <FadeIn duration={0.65} delay={0.35}>
              <Typography variant="h1" className={styles.heroTitle}>
                {t("hotel")}
              </Typography>
            </FadeIn>
            <FadeIn duration={0.7} delay={0.55}>
              <Typography className={styles.heroTagline}>
                {t("garden_hero_tagline")}
              </Typography>
            </FadeIn>
            <FadeIn duration={0.55} delay={0.8}>
              <Box className={styles.heroActions}>
                <Button href="#overview" className={styles.heroPrimary}>
                  {t("garden_hero_primary")}
                </Button>
                <Button
                  component={Link}
                  href="/contacts"
                  className={styles.heroSecondary}
                >
                  {t("garden_cta_button")}
                </Button>
              </Box>
            </FadeIn>
          </Box>
        </Container>
      </Hero>

      <Box className={styles.introSection}>
        <Container className={styles.introContainer}>
          <Box className={styles.introPanel}>
            <Box className={styles.introLead}>
              <Typography className={styles.sectionLabel}>
                {t("garden_intro_label")}
              </Typography>
              <Typography variant="h2" className={styles.introTitle}>
                {t("garden_desc")}
              </Typography>
            </Box>
            <Box className={styles.introBody}>
              <Typography className={styles.introCopy}>
                {t("garden_intro_copy")}
              </Typography>
              <Box className={styles.introLinks}>
                {sectionLinks.map((link, index) => (
                  <Box
                    key={link.href}
                    component="a"
                    href={link.href}
                    className={styles.introLink}
                  >
                    <span className={styles.introLinkIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={styles.introLinkLabel}>{link.label}</span>
                    <ArrowForwardIcon className={styles.introLinkIcon} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <InformativoNumbers />
      <Box id="overview">
        <InformativoTextImage />
      </Box>
      <Box id="features">
        <InformativoDinamico infos={infos} />
      </Box>
      <Box className={styles.gallerySection}>
        <Container className={styles.galleryIntro}>
          <Typography className={styles.sectionLabel}>
            {t("garden_gallery_label")}
          </Typography>
          <Typography variant="h2" className={styles.galleryTitle}>
            {t("garden_gallery_title")}
          </Typography>
          <Typography className={styles.galleryDesc}>
            {t("garden_gallery_desc")}
          </Typography>
        </Container>
        <Gallery data={gardenImages} />
      </Box>
      <Box id="kitchen">
        <Accordion zones={zones} />
      </Box>
      <Box id="landscape">
        <LandscapePresentation data={landscapeData} />
      </Box>
      <CarouselPotentiality data={carouselItems} />
      <Box className={styles.ctaSection}>
        <Container className={styles.ctaContainer}>
          <Box className={styles.ctaContent}>
            <Typography variant="h2" component="h2" className={styles.ctaTitle}>
              {t("garden_cta_title")}
            </Typography>
            <Typography className={styles.ctaDesc}>
              {t("garden_cta_desc")}
            </Typography>
            <Button
              component={Link}
              href="/contacts"
              className={styles.ctaButton}
            >
              <span className={styles.ctaButtonTextBox}>
                <span className={styles.textWrapper}>
                  {t("garden_cta_button")}
                </span>
                <span className={styles.text}>
                  {t("garden_cta_button")}
                </span>
                <span className={styles.textHover}>
                  {t("garden_cta_button")}
                </span>
              </span>
              <ArrowForwardIcon className={styles.ctaButtonIcon} />
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default GardenHotel;
