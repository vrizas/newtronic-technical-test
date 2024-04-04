import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function DownloadNow() {
    return (
        <Box component="section" py={8} textAlign="center" sx={{
            backgroundColor: 'warning.main',
            color: 'warning.contrastText',
        }}>
            <Container maxWidth="md">
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="center" alignItems="center" textAlign={{ xs: 'center', md: 'start' }} gap={5}>
                    <Box>
                        <Typography variant="body1" component="h2" fontWeight={700}letterSpacing={2.5}>TUNGGU APA LAGI?</Typography>
                        <Typography variant="h5" component="h3" fontWeight={700} mt={1}>Download sekarang!</Typography>
                        <Typography variant="body1" mt={2}>Aplikasi kami tersedia di berbagai platform.</Typography>
                        <Stack direction="row" alignItems="center" gap={1} mt={4}>
                            <a href="#">
                                <Image src="/images/google-play-badge.svg" alt="playstore" width={110} height={40} />
                            </a>
                            <a href="#">
                                <Image src="/images/app-store-badge.svg" alt="appstore" width={110} height={35} />
                            </a>
                        </Stack>
                    </Box>
                    <Image src="/images/mobile-app.png" alt="app" width={400} height={400} />
                </Stack>
            </Container>
        </Box>
    );
}