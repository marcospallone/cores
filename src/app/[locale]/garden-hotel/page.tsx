"use client";

import Hero from "@/components/organisms/Hero/Hero";
import { Card, Container, Grid2, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import styles from "./page.module.scss";
import Row from "@/components/atoms/Row";
import InformativoIconText from "@/components/organisms/InformativoIconText/InformativoIconText";
import InformativoText from "@/components/organisms/InformativoText/InformativoText";
import CardList from "@/components/organisms/CardList/CardList";

const GardenHotel: React.FC = () => {
  const t = useTranslations();

  return (
    <>
      <Hero
        images={[
          process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/Hero1.jpg",
          process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/DSCF9193.jpg",
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
      <InformativoText />
      <CardList />
    </>
  );
};
export default GardenHotel;
