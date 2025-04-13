"use client";

import Hero from "@/components/organisms/Hero/Hero";
import { Card, Container, Grid2, Typography } from "@mui/material";
import { useMessages, useTranslations } from "next-intl";
import styles from "./page.module.scss";
import Row from "@/components/atoms/Row";
import InformativoIconText from "@/components/organisms/InformativoIconText/InformativoIconText";
import InformativoTextImage from "@/components/organisms/InformativoTextImage/InformativoTextImage";
import Entrypoint from "@/components/organisms/Entrypoint/Entrypoint";
import { cardCamere, cardDintorni, cardEsterni, cardParcheggio, cardPosizione, cardRistorante, cardServizio, cardSpazi, gardenImages } from "@/utils/constants";
import Gallery from "@/components/organisms/Gallery/Gallery";

const GardenHotel: React.FC = () => {
  const m = useMessages();
  const t = useTranslations();

  const gardenRooms = m?.garden_rooms;

  console.log(gardenRooms)

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
      <InformativoIconText />
      <InformativoTextImage />
      <Entrypoint card1Data={gardenRooms} card2Data={cardSpazi} />
      <Entrypoint card1Data={cardRistorante} card2Data={cardServizio} />
      <Entrypoint card1Data={cardParcheggio} card2Data={cardEsterni} />
      <Entrypoint card1Data={cardPosizione} card2Data={cardDintorni} />
      <Gallery data={gardenImages} />
    </>
  );
};
export default GardenHotel;
