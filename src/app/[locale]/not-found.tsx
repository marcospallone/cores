import theme from "@/theme/theme";
import { Box, Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations();

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.grey[900],
          width: "100%",
          height: "100%",
          // minHeight: theme.spacing(500),
          py: theme.spacing(88),
          px: theme.spacing(32),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          component={"h2"}
          sx={{
            fontFamily: "Jost, sans-serif",
            fontWeight: 700,
            textTransform: "uppercase",
            mb: theme.spacing(32),
            textAlign: "center"
          }}
        >
          {t("notFound")}
        </Typography>
        <Button href="/" size="large">{t("notFoundButton")}</Button>
      </Box>
    </>
  );
}
