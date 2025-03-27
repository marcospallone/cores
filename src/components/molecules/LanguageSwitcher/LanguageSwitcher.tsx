"use client";

import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import styles from "./LanguageSwitcher.module.scss";

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const otherLocale = currentLocale === "en" ? "it" : "en";

  const switchLanguage = () => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${otherLocale}`);
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
          value="en"
          className={styles.toggleButton}
          sx={{
            "&.Mui-selected": {
              background: "none",
            },
          }}
        >
          <Typography className={styles.languageText}>EN</Typography>
        </ToggleButton>
        <ToggleButton
          className={styles.toggleButton}
          value="it"
          sx={{
            "&.Mui-selected": {
              background: "none",
            },
          }}
        >
          <Typography className={styles.languageText}>IT</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default LanguageSwitcher;
