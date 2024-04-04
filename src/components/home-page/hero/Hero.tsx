import { Box, Button, Container, Typography } from "@mui/material";
import { Item } from "../why-us/WhyUs";

type Props = {
    data: Item;
}

export default function Hero({ data }: Props) {
    return (
        <Box component="section" position="relative">
            <Box sx={{
                backgroundImage: `url("${data.banner}")`,
                width: '100%',
                height: '70vh',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }} />
            <Box position="absolute" top={0} left={0} right={0} bottom={0} bgcolor="rgba(0,0,0,0.7)" color="common.white" textAlign="center">
                <Container maxWidth="md" sx={{
                    py: 7
                }}>
                    <Typography variant="h4" component="h1" fontWeight={700}>{data.title}</Typography>
                    <Typography variant="body1" mt={1}>{data.description}</Typography>
                    <Button href="#" variant="contained" color="secondary" sx={{
                        mt: 4
                    }}>Pelajari Lebih Lanjut</Button>
                </Container>
            </Box>
        </Box>
    )
}