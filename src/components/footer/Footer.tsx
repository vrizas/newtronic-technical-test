import { Box, Container, Stack, Typography } from "@mui/material";
import { Item } from "../home-page/why-us/WhyUs";
import Image from "next/image";
import { InstagramLogo, FacebookLogo, XLogo, YoutubeLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

type Props = {
    data: Item;
}

export default function Footer({ data }: Props) {
    return (
        <Box component="footer" py={10} sx={{
            background: 'linear-gradient(to bottom, #1E2739, #32415F)',
            color: 'primary.contrastText',
        }}>
            <Container maxWidth="md">
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" gap={5}>
                    <Box maxWidth={300}>
                        <a href="/">
                            <Image src={data.logo} alt="logo" width={122} height={24} />
                        </a>
                        <Typography variant="body2" mt={1}>Jl. Ciwulan No.28, Cihapit, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40114</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" fontWeight={600}>Temukan Kami</Typography>
                        <Stack direction="row" gap={1.5} mt={1}>
                            <a href="#">
                                <InstagramLogo size={32} color="white" />
                            </a>
                            <a href="#">
                                <FacebookLogo size={32} color="white" />
                            </a>
                            <a href="#">
                                <XLogo size={32} color="white" />
                            </a>
                            <a href="#">
                                <YoutubeLogo size={32} color="white" />
                            </a>
                            <a href="#">
                                <LinkedinLogo size={32} color="white" />
                            </a>
                        </Stack>
                    </Box>
                    <Box>
                        <Typography variant="body1" fontWeight={600}>Didukung Oleh</Typography>
                        <Stack direction="row" gap={1.5} mt={1}>
                            <a href="https://www.google.com/" target="_blank" rel="noreferrer noopener">
                                <Image src="/images/google.svg" alt="google" width={42} height={42} />
                            </a>
                            <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer noopener">
                                <Image src="/images/aws.svg" alt="aws" width={42} height={42} />
                            </a>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}