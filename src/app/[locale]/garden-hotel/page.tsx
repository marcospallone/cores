"use client";

import Hero from "@/components/organisms/Hero/Hero";
import { Container, Grid2, Typography } from "@mui/material";
import { useMessages, useTranslations } from "next-intl";
import styles from "./page.module.scss";
import Row from "@/components/atoms/Row";
import InformativoTextImage from "@/components/organisms/InformativoTextImage/InformativoTextImage";
import Gallery from "@/components/organisms/Gallery/Gallery";
import Accordion from "@/components/organisms/Accordion/Accordion";
import InformativoNumbers from "@/components/organisms/InformativoNumbers/InformativoNumbers";
import InformativoDinamico from "@/components/organisms/InformativoDinamico/InformativoDinamico";
import Carousel from "@/components/organisms/Carousel/Carousel";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import GridViewIcon from "@mui/icons-material/GridView";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import OpacityIcon from "@mui/icons-material/Opacity";
import theme from "@/theme/theme";

const GardenHotel: React.FC = () => {
  const m = useMessages();
  const t = useTranslations();

  const heroImages = [
    process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/Hero1.jpg",
    process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCF9193.jpg",
    process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0107.JPG",
    process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0143.JPG",
    process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0147.JPG",
    process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0153.JPG",
    process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0156.JPG",
    process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0170.JPG",
    process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0175.JPG",
    process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0209.JPG",
    process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0242.JPG",
    process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCN0271.JPG",
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

  const zone1 = m?.garden_kitchen_zone1;
  const zone2 = m?.garden_kitchen_zone2;
  const zone3 = m?.garden_kitchen_zone3;
  const zone4 = m?.garden_kitchen_zone4;

  const zones = [
    {
      data: zone1,
      icon: <GridViewIcon sx={{ color: theme.palette.white[900] }} />,
      panel: "panel1",
    },
    {
      data: zone2,
      icon: (
        <LocalFireDepartmentIcon sx={{ color: theme.palette.white[900] }} />
      ),
      panel: "panel2",
    },
    {
      data: zone3,
      icon: <AcUnitIcon sx={{ color: theme.palette.white[900] }} />,
      panel: "panel3",
    },
    {
      data: zone4,
      icon: <OpacityIcon sx={{ color: theme.palette.white[900] }} />,
      panel: "panel4",
    },
  ];

  const carouselItems = m?.garden_potential_items;

  return (
    <>
      <Hero images={heroImages} title={t("hotel")} />
      <Container className={styles.descContainer}>
        <Row>
          <Grid2 size={12}>
            <Typography variant="h2" component={"h2"} className={styles.desc}>
              {t("garden_desc")}
            </Typography>
          </Grid2>
        </Row>
      </Container>
      <InformativoNumbers />
      <InformativoTextImage />
      <InformativoDinamico infos={infos} />
      <Gallery data={gardenImages} />
      <Accordion zones={zones} />
      <Carousel data={carouselItems} />
    </>
  );
};
export default GardenHotel;
