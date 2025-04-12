import { Box, Container, Grid2 } from "@mui/material";
import styles from "./CardList.module.scss";
import Row from "@/components/atoms/Row";
import Card from "@/components/molecules/Card/Card";
import {
  cardCamere,
  cardDintorni,
  cardEsterni,
  cardParcheggio,
  cardPosizione,
  cardRistorante,
  cardServizio,
  cardSpazi,
} from "@/utils/constants";

const CardList: React.FC = () => {
  return (
    <Container className={styles.cardlist}>
      <Row>
        <Grid2 size={3}>
          <Card data={cardCamere} />
        </Grid2>
        <Grid2 size={3}>
          <Card data={cardSpazi} />
        </Grid2>
        <Grid2 size={3}>
          <Card data={cardRistorante} />
        </Grid2>
        <Grid2 size={3}>
          <Card data={cardServizio} />
        </Grid2>
        <Grid2 size={3}>
          <Card data={cardParcheggio} />
        </Grid2>
        <Grid2 size={3}>
          <Card data={cardEsterni} />
        </Grid2>
        <Grid2 size={3}>
          <Card data={cardPosizione} />
        </Grid2>
        <Grid2 size={3}>
          <Card data={cardDintorni} />
        </Grid2>
      </Row>
    </Container>
  );
};

export default CardList;
