import { Box, Typography } from "@mui/material";
import styles from "./CardEntrypoint.module.scss";
import Image from "next/image";

interface CardEntrypointProps {
  data: {
    title: string;
    description: string;
    image: string;
  };
}

const CardEntrypoint: React.FC<CardEntrypointProps> = ({ data }) => {
  return (
    <Box className={styles.cardBox}>
      <Box className={styles.decorationBox}>
        <Box className={styles.decoration}></Box>
      </Box>
      <Box className={styles.cardTitle}>
        <Typography
          variant="h5"
          component={"div"}
          className={styles.title}
        >
          {data.title}
        </Typography>
      </Box>
      <Box className={styles.cardImageBox}>
        <Image
          src={process.env.NEXT_PUBLIC_SUPABASE_FOLDER + data.image}
          alt={data.title}
          width={1000}
          height={800}
          className={styles.cardImage}
        />
      </Box>
      <Box className={styles.cardContent}>
        <Typography
          variant="body2"
          component={"div"}
          className={styles.description}
        >
          {data.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardEntrypoint;
