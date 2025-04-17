"use client";

import { Box, Container, Grid2, Typography } from "@mui/material";
import styles from "./InformativoDinamico.module.scss";
import { useMessages } from "next-intl";
import Row from "@/components/atoms/Row";

const InformativoDinamico: React.FC = () => {
  const m = useMessages();
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
  console.log(infos);
  return (
    <Box className={styles.infoMainBox}>
        <Row>
      {infos?.map((item: any, index: number) => (
        <Grid2 size={1.5} className={styles.itemBox}>
          <Box className={styles.title}>
            <Typography variant="h3" component={'div'}>{item?.title}</Typography>
            <Typography variant="h5" component={'div'}>{item?.description}</Typography>
          </Box>
        </Grid2>
      ))}
      </Row>
      <Box className={styles.helpTextBox}>
        <Typography className={styles.helpText}></Typography>
      </Box>
    </Box>
  );
};

export default InformativoDinamico;
