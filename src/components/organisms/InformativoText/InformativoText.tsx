import { Box, Container, Grid2, Typography } from "@mui/material";
import styles from "./InformativoText.module.scss";
import { useTranslations } from "next-intl";
import Row from "@/components/atoms/Row";
import { richText } from "@/utils/richtext";
import Image from "next/image";

const InformativoText: React.FC = () => {
  const t = useTranslations();

  return (
    <Container className={styles.informativoTextContainer}>
      <Row>
        <Grid2 size={6} className={styles.textBox}>
          <Box className={styles.overviewBox}>
            <Typography variant="h3" component="h3" className={styles.overview}>
              {t("garden_overview")}
            </Typography>
            <Typography variant="body1" component={"p"} className={styles.text}>
              {richText(t, "garden_text1")}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={6}>
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

export default InformativoText;
