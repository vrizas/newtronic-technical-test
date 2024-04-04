import { AppBar, Box, Button, Chip, Container, Divider, Stack, Typography } from "@mui/material";
import type { Metadata } from "next";
import Image from "next/image";
import { gradientText } from "./customStyles";
import WhyUs, { Item } from "@/components/home-page/why-us/WhyUs";
import Header from "@/components/header/Header";
import Hero from "@/components/home-page/hero/Hero";
import AboutUs from "@/components/home-page/about-us/AboutUs";
import DownloadNow from "@/components/home-page/download-now/DownloadNow";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Newtronic Edu",
  description: "Aplikasi dalam bidang pendidikan yang dikembangkan oleh perusahaan newtronic",
};

const BASE_API_URL = 'http://103.183.75.112/api';

async function getData() {
    const response = await fetch(BASE_API_URL + '/directory/dataList');
   
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const responseJson = await response.json() as { data: Item[] };
   
    return responseJson.data[0];
  }

export default async function Home() {
    const data = await getData();

    return (
        <>
            <Header data={data} />
            <Box component="main" sx={{
                mt: '60px',
            }}>
                <Hero data={data} />
                <AboutUs />
                <WhyUs data={data} />
                <DownloadNow />
            </Box>
            <Footer data={data} />
        </>
    );
}
