import { Box, Container, Grid2, Typography } from "@mui/material";
import styles from "./CardPotentiality.module.scss";
import Image from "next/image";
import React from "react";
import Row from "@/components/atoms/Row";

interface CardPotentialityModel {
  data: {
    title: string;
    content: string;
    image: string;
  };
}

const CardPotentiality: React.FC<CardPotentialityModel> = ({ data }) => {
  return (
    <Container className={styles.cardBox}>
      <Row className={styles.row}>
        <Grid2 size={{xs: 12, lg: 6}}>
          <Box className={styles.cardText}>
            <Typography variant="h5" component={"div"} className={styles.title}>
              {data?.title}
            </Typography>
            <Typography
              variant="body1"
              component={"div"}
              className={styles.content}
            >
              {data?.content}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{xs: 12, lg: 6}}>
          <Box className={styles.cardImage}>
            <Image
              src={data?.image}
              alt={`Carousel Image`}
              width={1200}
              height={1000}
              className={styles.image}
            />
          </Box>
        </Grid2>
      </Row>
    </Container>
  );
};

export default CardPotentiality;
