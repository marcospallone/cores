import Row from "@/components/atoms/Row";
import { Container, Grid2, Box, Typography, Divider } from "@mui/material";
import styles from "./InformativoIconText.module.scss";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PushPinIcon from "@mui/icons-material/PushPin";
import theme from "@/theme/theme";

const InformativoIconText: React.FC = () => {
  const t = useTranslations();

  return (
    <Container className={styles.infoGrid}>
      <Row>
        <Grid2 size={1.5} />
        <Grid2 size={9}>
          <Box className={styles.imageBox}>
            <Image
              src={process.env.NEXT_PUBLIC_SUPABASE_FOLDER + "/sala1.JPG"}
              alt="Garden Hotel"
              width={1200}
              height={500}
              className={styles.image}
            />
          </Box>
        </Grid2>
        <Grid2 size={1.5} />
      </Row>
      <Row sx={{ textAlign: "center", justifyContent: "center" }} spacing={{xs: 0, lg: 0}}>
        <Grid2 size={3} className={styles.infoGridItem}>
          <Box className={styles.infoBox}>
            <SquareFootIcon
              sx={{
                fontSize: theme.spacing(48),
                color: theme.palette.grey[900],
              }}
            />
            <Typography
              variant="h5"
              component={"h5"}
              className={styles.infoText}
            >
              {t("garden_area")}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={3} className={styles.infoGridItem}>
          <Box className={styles.infoBox}>
            <ApartmentIcon
              sx={{
                fontSize: theme.spacing(48),
                color: theme.palette.grey[900],
              }}
            />
            <Typography
              variant="h5"
              component={"h5"}
              className={styles.infoText}
            >
              {t("garden_floors")}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={3} className={styles.infoGridItem}>
          <Box className={styles.infoBox}>
            <PushPinIcon
              sx={{
                fontSize: theme.spacing(48),
                color: theme.palette.grey[900],
              }}
            />
            <Typography
              variant="h5"
              component={"h5"}
              className={styles.infoText}
            >
              {t("garden_location")}
            </Typography>
          </Box>
        </Grid2>
      </Row>
    </Container>
  );
};

export default InformativoIconText;
