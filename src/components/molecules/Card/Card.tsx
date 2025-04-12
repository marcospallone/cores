import { Box, Typography } from "@mui/material";
import styles from "./Card.module.scss";
import Image from "next/image";

interface CardProps {
  data: {
    title: string;
    description: string;
    image: string;
    imagePosition: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
    console.log(data.imagePosition)
  return (
    <Box className={styles.cardBox}>
      <Box className={styles.cardImageBox}>
        <Image
          src={data.image}
          alt={data.title}
          width={1000}
          height={800}
          className={styles.cardImage}
          style={{
            objectPosition: data?.imagePosition,
          }}
        />
      </Box>
      <Box className={styles.cardContent}>
        <Typography
          variant="body2"
          component={"div"}
          className={styles.cardTitle}
        >
          {data.title}
        </Typography>
        <Typography
          variant="body2"
          component={"div"}
          className={styles.cardDescription}
        >
          {data.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
