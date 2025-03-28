import { Box, Container } from "@mui/material";
import styles from "./MenuMobile.module.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface MenuMobileProps {
  open: boolean;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ open }) => {
  const t = useTranslations();

  return (
    <Container className={styles.menuBox}>
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
    </Container>
  );
};

export default MenuMobile;
