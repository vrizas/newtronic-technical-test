"use client"

import { Box, Button, Modal, Typography } from "@mui/material";
import { DownloadSimple, X, Play } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';

export interface Playlist {
    id: number
    dir_id: number
    title: string
    description: string
    url: string
    type: string
    created_at: string
    updated_at: string
}

type Props = {
    item: Playlist
}

export default function PlaylistItem({ item }: Props) {
    const [show, setShow] = useState<boolean>(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
    const [isVideoLoading, setIsVideoLoading] = useState<boolean>(true);
    const [isVideoError, setIsVideoError] = useState<boolean>(false);

    async function downloadImage() {
        const image = await fetch(item.url)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
      
        const link = document.createElement('a')
        link.href = imageURL
        link.download = item.title
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    useEffect(() => {
        if (item.type === 'video') {
            fetch(item.url,
                { method: "HEAD", mode: "no-cors" }
            ).catch(() => {
                setIsVideoError(true);
            }).finally(() => {
                setIsVideoLoading(false);
            });
        }
    }, [item]);

    return (
        <Box position="relative" width="fit-content">
            <Button onClick={() => {
                setShow(true);
                if (item.type === 'video') setIsVideoPlaying(true);
            }} sx={{ cursor: 'pointer', p: 0 }}>
                {
                    item.type === 'video' ? (
                        <Image src="/images/responsibility-thumbnail.jpg" alt={item.title} width={548} height={365} style={{
                            objectFit: 'cover',
                            borderRadius: 12,
                            width: 250,
                            height: 200,
                        }} />
                    ) : (
                        <Image src={item.url} alt={item.title} width={548} height={365} style={{
                            objectFit: 'cover',
                            borderRadius: 12,
                            width: 250,
                            height: 200,
                        }} />
                    )
                }
            </Button>
            {
                item.type === 'video' ? (
                    <>
                        <Button href={!isVideoLoading && !isVideoError ? item.url : "/videos/responsibility.mp4"} color="primary" sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            borderRadius: '0 0 0 12px',
                        }} variant="contained" download>
                            <DownloadSimple size={24} />
                        </Button>
                        <Button onClick={() => {
                            setShow(true);
                            setIsVideoPlaying(true);
                        }} sx={{
                            position: 'absolute',
                            top: '40%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            borderRadius: 100,
                            width: 64,
                            height: 64,
                        }} variant="contained">
                            <Play size={32} />
                       </Button>
                    </>
                ) : (
                    <Button color="primary" sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        borderRadius: '0 0 0 12px',
                    }} variant="contained" onClick={() => downloadImage()}>
                        <DownloadSimple size={24} />
                    </Button>
                )
            }
            <Box position="absolute" bottom={-90} left="50%" width={300} boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" bgcolor="warning.main" color="warning.contrastText" borderRadius={5} py={2} px={3} sx={{
                transform: 'translateX(-50%)',
            }}>
                <Typography variant="body1" component="h4" fontWeight={700}>{item.title}</Typography>
                <Typography variant="body2" mt={1}>{item.description}</Typography>
            </Box>

            <Modal
                open={show}
                onClose={() => setShow(false)}
                aria-labelledby={item.title}
                aria-describedby={item.description}
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                }}
            >
                <>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}>
                        {
                            item.type === 'video' ? (
                                <ReactPlayer url={!isVideoLoading && !isVideoError ? item.url : "/videos/responsibility.mp4"} playing={isVideoPlaying} controls={true} />
                            ) : (
                                <Image src={item.url} alt={item.title} width={548} height={365} />
                            )
                        }
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: 2,
                    }}>
                        {
                            item.type === 'video' ? (
                                <Button href={!isVideoLoading && !isVideoError ? item.url : "/videos/responsibility.mp4"} sx={{ color: 'grey.100', p: 1 }} download>
                                    <DownloadSimple size={20} />
                                </Button>
                            ) : (
                            <Button onClick={() => downloadImage()} sx={{ color: 'grey.100', p: 1 }}>
                                <DownloadSimple size={20} />
                            </Button>
                            )
                        }
                        <Button onClick={() => setShow(false)} sx={{ color: 'grey.100', p: 1 }}>
                            <X size={20} />
                        </Button>
                    </Box>
                </>
            </Modal>
        </Box>
    )
}