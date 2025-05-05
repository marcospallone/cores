import { Box, Typography } from "@mui/material";
import Image from "next/image";
import image from "next/image";
import styles from "./CardLandscape.module.scss";

interface CardLandscapeModel {
  data: {
    title: string;
    content: string;
    image: string;
  };
}

const CardLandscape: React.FC<CardLandscapeModel> = ({ data }) => {

  return (
    <Box className={styles.slideBox}>
      <Image
        // src={process.env.NEXT_PUBLIC_SUPABASE_FOLDER + data?.image}
        src={data?.image}
        alt={`Landscape Image`}
        width={800}
        height={600}
        className={styles.image}
      />
      <Box className={styles.overlay}></Box>
      <Box className={styles.text}>
        <Typography variant="caption" component="div" className={styles.title}>
          {data?.title}
        </Typography>
        <Typography variant="body2" component="div" className={styles.content}>
          {data?.content}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardLandscape;
