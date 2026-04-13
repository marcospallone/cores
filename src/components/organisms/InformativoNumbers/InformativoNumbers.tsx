import Row from "@/components/atoms/Row";
import {
  Box,
  Container,
  Grid2,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./InformativoNumbers.module.scss";
import { useLocale, useTranslations } from "next-intl";
import CountUp from "react-countup";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PushPinIcon from "@mui/icons-material/PushPin";
import theme from "@/theme/theme";
import { useInView } from "react-intersection-observer";

const InformativoNumbers: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const locale = useLocale();
  const t = useTranslations();
  const { ref: countUpRef, inView: inView } = useInView({ triggerOnce: true });
  const numberSeparator = locale === "it" ? "." : ",";

  const stats = [
    {
      icon: (
        <SquareFootIcon
          sx={{
            fontSize: isMobile ? theme.spacing(42) : theme.spacing(52),
          }}
        />
      ),
      end: 2600,
      duration: 2.2,
      separator: numberSeparator,
      suffix: " m²",
      label: t("garden_area"),
    },
    {
      icon: (
        <ApartmentIcon
          sx={{
            fontSize: isMobile ? theme.spacing(42) : theme.spacing(52),
          }}
        />
      ),
      end: 5,
      duration: 2,
      label: t("garden_floors"),
    },
    {
      icon: (
        <PushPinIcon
          sx={{
            fontSize: isMobile ? theme.spacing(42) : theme.spacing(52),
          }}
        />
      ),
      end: 500,
      duration: 2.1,
      suffix: " m",
      label: t("garden_location"),
    },
  ];

  return (
    <Container className={styles.infoContainer}>
      <Row>
        <Grid2 size={{ xs: 12, xxl: 4 }}>
          <Box className={styles.textBox}>
            <Typography className={styles.label}>
              {t("garden_numbers_label")}
            </Typography>
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
            {stats.map((stat) => (
              <Box key={stat.label} className={styles.numberItem}>
                <Box className={styles.iconBox}>{stat.icon}</Box>
                {inView && (
                  <CountUp
                    end={stat.end}
                    duration={stat.duration}
                    separator={stat.separator}
                    suffix={stat.suffix}
                    className={styles.countup}
                  />
                )}
                <Typography
                  variant="body1"
                  component={"div"}
                  className={styles.numberTitle}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid2>
      </Row>
    </Container>
  );
};

export default InformativoNumbers;
