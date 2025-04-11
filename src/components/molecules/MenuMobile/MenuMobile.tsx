import { Box, Button } from "@mui/material";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./MenuMobile.module.scss";

const MenuMobile: React.FC = () => {
  const t = useTranslations();

  return (
    <Box className={styles.menuBox}>
      <Box className={styles.menuItems}>
        <Link className={styles.leftLink} href={"/properties"}>
          {t("properties")}
        </Link>
        <Link className={styles.leftLink} href={"/garden-hotel"}>
          {t("hotel")}
        </Link>
        <Link className={styles.leftLink} href={"/services"}>
          {t("services")}
        </Link>
      </Box>
      <Box className={styles.bottomBox}>
        <LanguageSwitcher />
        <Button className={styles.contactsButton} href={"/contacts"}>
          {t("contact_button")}
        </Button>
      </Box>
    </Box>
  );
};

export default MenuMobile;
