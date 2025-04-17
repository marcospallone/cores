import { Box, Container, Grid2, Typography, useMediaQuery } from "@mui/material";
import styles from "./InformativoTextImage.module.scss";
import { useTranslations } from "next-intl";
import Row from "@/components/atoms/Row";
import { richText } from "@/utils/richtext";
import Image from "next/image";
import theme from "@/theme/theme";

interface InformativoTextImageModel {
  imageRight?: boolean;
}

const InformativoTextImage: React.FC<InformativoTextImageModel> = ({imageRight}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const t = useTranslations();

  return (
    <Container className={styles.informativoTextContainer}>
      <Row className={imageRight ? `${styles.row} ${styles.inverse}` : styles.row}>
        <Grid2 size={{xs: 12, lg: 6}} className={styles.textBox}>
          <Box className={styles.overviewBox}>
            <Typography variant="h3" component="h3" className={styles.overview}>
              {t("garden_overview")}
            </Typography>
            <Typography variant="body1" component={"p"} className={styles.text}>
              {richText(t, "garden_text1")}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{xs: 12, lg: 6}}>
          <Box className={styles.imageBox}>
            <Image
              src={process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/171.jpeg"}
              width={1500}
              height={1000}
              alt="Scale GH"
              className={styles.overviewImage}
            />
          </Box>
        </Grid2>
      </Row>
    </Container>
  );
};

export default InformativoTextImage;
