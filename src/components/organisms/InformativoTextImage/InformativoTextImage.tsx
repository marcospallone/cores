import { Box, Container, Grid2, Typography } from "@mui/material";
import styles from "./InformativoTextImage.module.scss";
import { useMessages, useTranslations } from "next-intl";
import Row from "@/components/atoms/Row";
import { richText } from "@/utils/richtext";
import Image from "next/image";

interface InformativoTextImageModel {
  imageRight?: boolean;
}

interface OverviewHighlight {
  title: string;
  description: string;
}

interface OverviewMessages {
  garden_overview_highlights: OverviewHighlight[];
}

const InformativoTextImage: React.FC<InformativoTextImageModel> = ({ imageRight }) => {
  const m = useMessages() as unknown as OverviewMessages;
  const t = useTranslations();
  const highlights = m?.garden_overview_highlights ?? [];
  const facts = [
    {
      value: t("garden_overview_fact1_value"),
      label: t("garden_overview_fact1_label"),
    },
    {
      value: t("garden_overview_fact2_value"),
      label: t("garden_overview_fact2_label"),
    },
  ];

  return (
    <Box className={styles.sectionBox}>
      <Container className={styles.informativoTextContainer}>
        <Row
          className={imageRight ? `${styles.row} ${styles.inverse}` : styles.row}
        >
          <Grid2 size={{ xs: 12, lg: 5 }} className={styles.textBox}>
            <Box className={styles.overviewBox}>
              <Box className={styles.header}>
                <Typography className={styles.label}>
                  {t("garden_overview_label")}
                </Typography>
                <Typography variant="h3" component="h3" className={styles.overview}>
                  {t("garden_overview_title")}
                </Typography>
              </Box>
              <Typography variant="body1" component={"div"} className={styles.text}>
                {richText(t, "garden_text1")}
              </Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 7 }}>
            <Box className={styles.visualBox}>
              <Box className={styles.mainImageBox}>
                <Image
                  src="/assets/171.jpg"
                  width={1500}
                  height={1100}
                  alt="Scale GH"
                  className={styles.overviewImage}
                />
                <Box className={styles.imageOverlay}></Box>
                <Box className={styles.imageCaption}>
                  <Typography className={styles.imageCaptionLabel}>
                    {t("garden_overview")}
                  </Typography>
                  <Typography className={styles.imageCaptionText}>
                    {t("garden_overview_image_caption_value")}
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.sideStack}>
                <Box className={styles.factCards}>
                  {facts.map((fact) => (
                    <Box key={fact.label} className={styles.factCard}>
                      <Typography className={styles.factValue}>{fact.value}</Typography>
                      <Typography className={styles.factLabel}>{fact.label}</Typography>
                    </Box>
                  ))}
                </Box>
                <Box className={styles.insetImageBox}>
                  <Image
                    src="/assets/Hero1.jpg"
                    width={1200}
                    height={720}
                    alt="Vista esterna Garden Hotel"
                    className={styles.insetImage}
                  />
                  <Box className={styles.insetCaption}>
                    <Typography className={styles.insetLabel}>
                      {t("garden_overview_image_caption_label")}
                    </Typography>
                    <Typography className={styles.insetText}>
                      {t("garden_overview_image_caption_value")}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Row>
        <Box className={styles.highlights}>
          {highlights.map(
            (
              highlight: { title: string; description: string },
              index: number
            ) => (
              <Box key={`${highlight.title}-${index}`} className={styles.highlightCard}>
                <Typography className={styles.highlightIndex}>
                  {String(index + 1).padStart(2, "0")}
                </Typography>
                <Typography className={styles.highlightTitle}>
                  {highlight.title}
                </Typography>
                <Typography className={styles.highlightDescription}>
                  {highlight.description}
                </Typography>
              </Box>
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default InformativoTextImage;
