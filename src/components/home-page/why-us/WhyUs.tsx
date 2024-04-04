"use client"

import { Box, Container, Stack, Typography } from '@mui/material';
import { gradientText } from '@/app/customStyles';
import PlaylistItem, { Playlist } from './components/PlaylistItem';

export interface Item {
    id: number
    title: string
    description: string
    banner: string
    logo: string
    created_at: string
    updated_at: string
    playlist: Playlist[]
}

type Props = {
    data: Item
}

export default function WhyUs({ data }: Props) {
    return (
        <Box component="section" pt={8} pb={20} textAlign="center">
            <Container maxWidth="md">
                <Typography variant="body1" component="h2" fontWeight={700} sx={gradientText} letterSpacing={2.5}>KENAPA KAMI?</Typography>
                <Typography variant="h5" component="h3" fontWeight={700} mt={1}>Kami menyediakan kemudahan untuk siswa</Typography>
                <Typography variant="body1" mt={2}>
                    Siswa dapat belajar dengan lebih mudah dan menyenangkan.
                </Typography>
                <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="center" gap={15} flexWrap="wrap" mt={8}>
                    {data.playlist.map((item) => (
                       <PlaylistItem key={item.id} item={item} />
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}