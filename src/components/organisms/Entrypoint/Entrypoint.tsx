import Row from "@/components/atoms/Row";
import { Box, Container, Grid2 } from "@mui/material";
import styles from "./Entrypoint.module.scss";
import CardEntrypoint from "@/components/molecules/CardEntrypoint/CardEntrypoint";

interface EntrypointProps {
    card1Data: {
        title: string;
        description: string;
        image: string;
    };
    card2Data: {
        title: string;
        description: string;
        image: string;
    };
}

const Entrypoint: React.FC<EntrypointProps> = ({card1Data, card2Data}) => {
  return (
    <Container className={styles.entrypointContainer}>
        <Row>
            <Grid2 size={6}>
                <Box className={styles.info}>
                    <CardEntrypoint data={card1Data} />
                </Box>
            </Grid2>
            <Grid2 size={6}>
                <Box className={styles.info}>
                    <CardEntrypoint data={card2Data} />
                </Box>
            </Grid2>
        </Row>
    </Container>
  );
};

export default Entrypoint;