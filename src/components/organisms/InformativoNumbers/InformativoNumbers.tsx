import Row from "@/components/atoms/Row";
import {
  Box,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./InformativoNumbers.module.scss";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PushPinIcon from "@mui/icons-material/PushPin";
import theme from "@/theme/theme";
import { useInView } from "react-intersection-observer";

const InformativoNumbers: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const t = useTranslations();
  const { ref: countUpRef, inView: inView } = useInView({ triggerOnce: true });

  return (
    <Container className={styles.infoContainer}>
      <Row>
        <Grid2 size={{ xs: 12, xxl: 4 }}>
          <Box className={styles.textBox}>
            <Typography variant="h3" component={"div"} className={styles.title}>
              {t("garden_numbers_title")}
            </Typography>
            <Typography
              variant="body1"
              component={"div"}
              className={styles.desc}
            >
              {t("garden_numbers_desc")}
            </Typography>
          </Box>
        </Grid2>
        <Grid2
          size={{ xs: 0, xxl: 1 }}
          display={{ xs: "none", xxl: "block" }}
        ></Grid2>
        <Grid2 size={{ xs: 12, xxl: 7 }}>
          <Box className={styles.numbersBox} ref={countUpRef}>
            <Box className={styles.numberItem}>
              <SquareFootIcon
                sx={{
                  fontSize: isMobile ? theme.spacing(48) : theme.spacing(64),
                }}
              />
              {inView && (
                <CountUp
                  end={2600}
                  duration={2}
                  separator=","
                  suffix="m²"
                  className={styles.countup}
                />
              )}
              <Typography
                variant="body1"
                component={"div"}
                className={styles.numberTitle}
              >
                {t("garden_area")}
              </Typography>
            </Box>
            <Box className={styles.numberItem}>
              <ApartmentIcon
                sx={{
                  fontSize: isMobile ? theme.spacing(48) : theme.spacing(64),
                }}
              />
              {inView && (
                <CountUp end={5} duration={5} className={styles.countup} />
              )}
              <Typography
                variant="body1"
                component={"div"}
                className={styles.numberTitle}
              >
                {t("garden_floors")}
              </Typography>
            </Box>
            <Box className={styles.numberItem}>
              <PushPinIcon
                sx={{
                  fontSize: isMobile ? theme.spacing(48) : theme.spacing(64),
                }}
              />
              {inView && (
                <CountUp
                  end={500}
                  duration={2}
                  suffix="m"
                  className={styles.countup}
                />
              )}
              <Typography
                variant="body1"
                component={"div"}
                className={styles.numberTitle}
              >
                {t("garden_location")}
              </Typography>
            </Box>
          </Box>
        </Grid2>
      </Row>
    </Container>
  );
};

export default InformativoNumbers;
