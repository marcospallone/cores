"use client";

import { Box, Grid2, Typography } from "@mui/material";
import styles from "./InformativoDinamico.module.scss";
import { useMessages } from "next-intl";
import Row from "@/components/atoms/Row";
import { useEffect, useState } from "react";

const InformativoDinamico: React.FC = () => {
  const m = useMessages();
  const [sectionOpened, setSectionOpened] = useState<number | null>(null);

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

  console.log(sectionOpened);

  return (
    <Box className={styles.infoMainBox}>
      <Row spacing={{ xs: 0 }} className={styles.infoRow}>
        {sectionOpened && (
          <Grid2
            size={12}
            className={styles.itemDisplayedGrid}
            sx={{
              backgroundImage: `url(${
                process.env.NEXT_PUBLIC_SUPABASE_FOLDER +
                infos[sectionOpened]?.image
              })`,
            }}
          >
            <Box className={styles.itemDisplayedBox}></Box>
          </Grid2>
        )}
        {infos?.map((item: any, index: number) => (
          <Grid2
            key={index}
            size={1.5}
            className={styles.itemBox}
            onClick={() => setSectionOpened(index)}
            sx={{
              backgroundImage: `url(${
                process.env.NEXT_PUBLIC_SUPABASE_FOLDER + item?.image
              })`,
            }}
          >
            <Box className={styles.overlay}></Box>
            <Box className={styles.textBox}>
              <Typography
                variant="h5"
                component={"div"}
                className={styles.title}
              >
                {item?.title}
              </Typography>
              {/* <Typography variant="h5" component={"div"} className={styles.description}>
                {item?.description}
              </Typography> */}
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
