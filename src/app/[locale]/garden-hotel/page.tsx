"use client";

import Hero from "@/components/organisms/Hero/Hero";
import { Container, Grid2, Typography } from "@mui/material";
import { useMessages, useTranslations } from "next-intl";
import styles from "./page.module.scss";
import Row from "@/components/atoms/Row";
import InformativoTextImage from "@/components/organisms/InformativoTextImage/InformativoTextImage";
import Entrypoint from "@/components/organisms/Entrypoint/Entrypoint";
import Gallery from "@/components/organisms/Gallery/Gallery";
import Accordion from "@/components/organisms/Accordion/Accordion";
import InformativoNumbers from "@/components/organisms/InformativoNumbers/InformativoNumbers";
import InformativoDinamico from "@/components/organisms/InformativoDinamico/InformativoDinamico";

const GardenHotel: React.FC = () => {
  const m = useMessages();
  const t = useTranslations();

  const gardenRooms = m?.garden_rooms;
  const gardenSpaces = m?.garden_spaces;
  const gardenRestaurant = m?.garden_restaurant;
  const gardenService = m?.garden_service;
  const gardenParking = m?.garden_parking;
  const gardenOutdoor = m?.garden_outdoor;
  const gardenPosition = m?.garden_position;
  const gardenSurroundings = m?.garden_surroundings;
  const gardenImages = m?.garden_images;

  return (
    <>
      <Hero
        images={[
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
        ]}
        title={t("hotel")}
      />
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
      <InformativoDinamico />
      {/* <Entrypoint card1Data={gardenRooms} card2Data={gardenSpaces} />
      <Entrypoint card1Data={gardenRestaurant} card2Data={gardenService} />
      <Entrypoint card1Data={gardenParking} card2Data={gardenOutdoor} />
      <Entrypoint card1Data={gardenPosition} card2Data={gardenSurroundings} /> */}
      <Gallery data={gardenImages} />
      <Accordion />
    </>
  );
};
export default GardenHotel;
