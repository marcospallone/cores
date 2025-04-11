"use client";

import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import styles from "./LanguageSwitcher.module.scss";

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const otherLocale = currentLocale === "en" ? "it" : "en";

  console.log(currentLocale);

  const switchLanguage = (
    _event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    const newPath =
      !value || value === currentLocale
        ? pathname
        : pathname.replace(`/${currentLocale}`, `/${otherLocale}`);
    router.push(newPath);
  };

  return (
    <Box className={styles.switcher}>
      <ToggleButtonGroup
        value={currentLocale}
        exclusive
        onChange={switchLanguage}
        className={styles.toggleGroup}
      >
        <ToggleButton
          className={
            currentLocale === "it"
              ? `${styles.toggleButton} ${styles.active}`
              : styles.toggleButton
          }
          value="it"
          sx={{
            "&.Mui-selected": {
              background: "none",
            },
          }}
        >
          <Typography className={styles.languageText}>IT</Typography>
        </ToggleButton>
        <ToggleButton
          value="en"
          className={
            currentLocale === "en"
              ? `${styles.toggleButton} ${styles.active}`
              : styles.toggleButton
          }
          sx={{
            "&.Mui-selected": {
              background: "none",
            },
          }}
        >
          <Typography className={styles.languageText}>EN</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default LanguageSwitcher;
