"use client";

import {
  Box,
  Button,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./page.module.scss";
import Map from "@/components/atoms/Map";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Row from "@/components/atoms/Row";
import Link from "next/link";
import SendIcon from "@mui/icons-material/Send";
import theme from "@/theme/theme";

const Contacts: React.FC = () => {
  const t = useTranslations();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Container className={styles.contactsContainer}>
        <Row>
          <Grid2 size={5} className={styles.grid1}>
            <Box className={styles.imgBox}>
              <Link
                href={"https://maps.app.goo.gl/uisG3vD5gRauRJTH7"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapLink}
              >
                <Map width={"100%"} />
              </Link>
            </Box>
          </Grid2>
          <Grid2 size={7}></Grid2>
        </Row>
      </Container>
      <Container className={styles.formContainer}>
        <Row>
          <Grid2 size={12}>
            <Box className={styles.formBox}>
              <Box className={styles.text}>
                <Typography variant="h2" className={styles.title}>
                  {t("contacts_title")}
                </Typography>
                <Typography className={styles.description}>
                  {t("contacts_message")}
                </Typography>
              </Box>
              <Box className={styles.form}>
                <Box className={styles.inputBox}>
                  <TextField
                    id="name"
                    placeholder={t("name")}
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setName(event.target.value);
                    }}
                    className={styles.inputField}
                  />
                  <Box className="custom-bottom-border" />
                  <Box className="custom-left-border" />
                </Box>
                <Box className={styles.inputBox}>
                  <TextField
                    id="surname"
                    placeholder={t("surname")}
                    value={surname}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setSurname(event.target.value);
                    }}
                    className={styles.inputField}
                  />
                  <Box className="custom-bottom-border" />
                  <Box className="custom-left-border" />
                </Box>
                <Box className={styles.inputBox}>
                  <TextField
                    id="email"
                    placeholder={t("email")}
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setEmail(event.target.value);
                    }}
                    className={styles.inputField}
                  />
                  <Box className="custom-bottom-border" />
                  <Box className="custom-left-border" />
                </Box>
                <Box className={styles.inputBox}>
                  <TextField
                    id="phone"
                    placeholder={t("phone")}
                    value={phone}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setPhone(event.target.value);
                    }}
                    className={styles.inputField}
                  />
                  <Box className="custom-bottom-border" />
                  <Box className="custom-left-border" />
                </Box>
                <Box className={styles.inputBox}>
                  <TextField
                    id="message"
                    placeholder={t("message")}
                    value={message}
                    multiline
                    rows={4}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setMessage(event.target.value);
                    }}
                    className={styles.inputField}
                  />
                  <Box className="custom-bottom-border" />
                  <Box className="custom-left-border" />
                </Box>
              </Box>
              <Box className={styles.submitBox}>
                <Button
                  className={styles.cta}
                  endIcon={
                    <SendIcon
                      sx={{
                        fontSize: theme.spacing(24),
                        color: theme.palette.white[900],
                        marginLeft: theme.spacing(8),
                      }}
                    />
                  }
                >
                  <span className={styles.textWrapper}>
                    {t("send_message")}
                  </span>
                  <span className={styles.text}>{t("send_message")}</span>
                  <span className={styles.textHover}>{t("send_message")}</span>
                </Button>
              </Box>
            </Box>
          </Grid2>
        </Row>
      </Container>
    </>
  );
};

export default Contacts;
