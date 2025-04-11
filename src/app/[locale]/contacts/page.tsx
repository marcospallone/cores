"use client";

import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid2,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import styles from "./page.module.scss";
// import Map from "@/components/atoms/Map";
import FadeIn from "@/components/atoms/FadeIn";
import Row from "@/components/atoms/Row";
import theme from "@/theme/theme";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import SendIcon from "@mui/icons-material/Send";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/atoms/Map"), {
  ssr: false,
});

const Contacts: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const t = useTranslations();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [notCompiled, setNotCompiled] = useState(false);
  const [invalidEmail, setinvalidEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<null | {
    success: boolean;
    message: string;
  }>(null);

  const handleSend = async () => {
    setNotCompiled(false);
    setinvalidEmail(false);
    if (name === "" || surname === "" || email === "" || message === "") {
      setNotCompiled(true);
    } else {
      const emailValid = isValidEmail(email);
      const allFilled =
        name.trim() && surname.trim() && email.trim() && message.trim();

      if (!allFilled || !emailValid) {
        setinvalidEmail(true);
        return;
      }
      setLoading(true);
      setFeedback(null);
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, surname, email, phone, message }),
        });
        const data = await response.json();
        if (response.ok) {
          setFeedback({ success: true, message: data.message });
          setName("");
          setSurname("");
          setEmail("");
          setPhone("");
          setMessage("");
        } else {
          setFeedback({ success: false, message: data.message });
        }
      } catch (error) {
        setFeedback({ success: false, message: "Errore di rete o server." });
      } finally {
        setLoading(false);
      }
    }
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <>
      <Container className={styles.contactsContainer}>
        <Row>
          <Grid2 size={{ xs: 12, lg: 6 }} className={styles.grid1}>
            <Box className={styles.mapBox}>
              <Map />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 6 }} className={styles.grid2}>
            <Box className={styles.textBox}>
              <Box className={styles.addressBox}>
                <Typography variant="h4" className={styles.title}>
                  {t("contacts_address")}
                </Typography>
                <Link
                  href={"https://maps.app.goo.gl/uisG3vD5gRauRJTH7"}
                  target="_blank"
                  className={styles.description}
                >
                  {t("address")}
                </Link>
              </Box>
              <Box className={styles.phoneBox}>
                <Typography variant="h4" className={styles.title}>
                  {t("contacts_phone")}
                </Typography>
                <Link href={"tel:+390864747751"} className={styles.description}>
                  0864 747751
                </Link>
                <Link href={"tel:+393487921802"} className={styles.description}>
                  +39 348 7921802
                </Link>
              </Box>
              <Box className={styles.emailBox}>
                <Typography variant="h4" className={styles.title}>
                  {t("contacts_email")}
                </Typography>
                <Link
                  href={"mailto:p.spallone@libero.it"}
                  className={styles.description}
                >
                  p.spallone@libero.it
                </Link>
              </Box>
            </Box>
          </Grid2>
        </Row>
      </Container>
      <Container className={styles.formContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={loading ? "loading" : feedback ? "feedback" : "form"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            layout
            style={{ overflow: "hidden" }}
          >
            {loading && (
              <FadeIn>
                <Box className={styles.loaderBox}>
                  <CircularProgress sx={{ color: theme.palette.white[900] }} />
                </Box>
              </FadeIn>
            )}

            {feedback && (
              <FadeIn>
                <Box className={styles.feedbackBox}>
                  {feedback.success ? (
                    <>
                      <CheckCircleIcon
                        sx={{
                          fontSize: theme.spacing(48),
                        }}
                      />
                      <Typography variant="h4" className={styles.feedbackText}>
                        {feedback.message}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <ErrorIcon
                        sx={{
                          fontSize: theme.spacing(48),
                          color: theme.palette.secondary.dark,
                        }}
                      />
                      <Typography variant="h4" className={styles.feedbackText}>
                        {feedback.message}
                      </Typography>
                    </>
                  )}
                </Box>
              </FadeIn>
            )}
            {!loading && !feedback && (
              <FadeIn>
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
                        {notCompiled && isMobile && (
                          <FadeIn duration={0.5}>
                            <Typography className={styles.errorTextMobile}>
                              {t("not_compiled")}
                            </Typography>
                          </FadeIn>
                        )}
                        {invalidEmail && isMobile && (
                          <FadeIn duration={0.5}>
                            <Typography className={styles.errorTextMobile}>
                              {t("invalid_email")}
                            </Typography>
                          </FadeIn>
                        )}
                      </Box>
                      <Box className={styles.form}>
                        <Box className={styles.inputBox}>
                          <TextField
                            id="name"
                            placeholder={t("name")}
                            value={name}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setName(event.target.value);
                            }}
                            className={styles.inputField}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderColor:
                                  notCompiled && name === ""
                                    ? theme.palette.secondary.dark
                                    : "none",
                              },
                            }}
                          />
                          <Box className="custom-bottom-border" />
                          <Box className="custom-left-border" />
                        </Box>
                        <Box className={styles.inputBox}>
                          <TextField
                            id="surname"
                            placeholder={t("surname")}
                            value={surname}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setSurname(event.target.value);
                            }}
                            className={styles.inputField}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderColor:
                                  notCompiled && surname === ""
                                    ? theme.palette.secondary.dark
                                    : "none",
                              },
                            }}
                          />
                          <Box className="custom-bottom-border" />
                          <Box className="custom-left-border" />
                        </Box>
                        <Box className={styles.inputBox}>
                          <TextField
                            id="email"
                            placeholder={t("email")}
                            value={email}
                            type="email"
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              const value = event.target.value;
                              setEmail(value);
                            }}
                            className={styles.inputField}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderColor:
                                  invalidEmail || (notCompiled && email === "")
                                    ? theme.palette.secondary.dark
                                    : "none",
                              },
                            }}
                          />
                          <Box className="custom-bottom-border" />
                          <Box className="custom-left-border" />
                        </Box>
                        <Box className={styles.inputBox}>
                          <TextField
                            id="phone"
                            placeholder={t("phone")}
                            value={phone}
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              const input = event.target.value;
                              const filteredInput = input.replace(
                                /[^\d+ ]/g,
                                ""
                              );
                              setPhone(filteredInput);
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
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              setMessage(event.target.value);
                            }}
                            className={styles.inputField}
                            sx={{
                              "& .MuiOutlinedInput-root": {
                                borderColor:
                                  notCompiled && message === ""
                                    ? theme.palette.secondary.dark
                                    : "none",
                              },
                            }}
                          />
                          <Box className="custom-bottom-border" />
                          <Box className="custom-left-border" />
                        </Box>
                      </Box>
                      <Box className={styles.submitBox}>
                        {notCompiled && !isMobile && (
                          <FadeIn duration={0.5}>
                            <Typography className={styles.errorText}>
                              {t("not_compiled")}
                            </Typography>
                          </FadeIn>
                        )}
                        {invalidEmail && !isMobile && (
                          <FadeIn duration={0.5}>
                            <Typography className={styles.errorText}>
                              {t("invalid_email")}
                            </Typography>
                          </FadeIn>
                        )}
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
                          onClick={handleSend}
                        >
                          <span className={styles.textWrapper}>
                            {t("send_message")}
                          </span>
                          <span className={styles.text}>
                            {t("send_message")}
                          </span>
                          <span className={styles.textHover}>
                            {t("send_message")}
                          </span>
                        </Button>
                      </Box>
                    </Box>
                  </Grid2>
                </Row>
              </FadeIn>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </>
  );
};

export default Contacts;
