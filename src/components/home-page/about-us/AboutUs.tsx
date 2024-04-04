import { gradientText } from "@/app/customStyles";
import { Box, Button, Chip, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function AboutUs() {
    return (
        <Box component="section" pt={8} sx={{
            backgroundColor: 'grey.100',
        }}>
            <Container maxWidth="md">
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={{
                    xs: 'start',
                    md: 'space-between',
                }} alignItems={{
                    xs: 'center',
                    md: 'start',
                }} spacing={5}>
                    <Box>
                        <Typography variant="body1" component="h2" fontWeight={700} sx={gradientText} letterSpacing={2.5}>TENTANG KAMI</Typography>
                        <Typography variant="h5" component="h3" fontWeight={700} mt={1}>Kami menyediakan berbagai tipe pembelajaran</Typography>
                        <Typography variant="body1" mt={2}>
                            Siswa dapat memilih tipe pembelajaran yang sesuai dengan kebutuhan mereka.
                        </Typography>
                        <Divider sx={{
                            my: 3,
                            width: '20%',
                            borderColor: 'primary.main',
                            borderWidth: 1,
                            borderRadius: 20,
                        }} />
                        <Stack direction="row" gap={1.5} flexWrap="wrap">
                            <Chip label="Pembelajaran Visual" color="primary" variant="outlined" sx={{
                                width: 150
                            }} />
                            <Chip label="Pembelajaran Teks" color="primary" variant="outlined" sx={{
                                width: 150
                            }} />
                            <Chip label="Pembelajaran Audio" color="primary" variant="outlined" sx={{
                                width: 150
                            }} />
                        </Stack>
                        <Button href="#" variant="contained" color="primary" sx={{
                            mt: 4,
                            width: 'fit-content'
                        }}>Daftar Sekarang</Button>
                    </Box>
                    <Image src="/images/student.png" alt="student" width={408} height={612}/>
                </Stack>
            </Container>
        </Box>
    )
}