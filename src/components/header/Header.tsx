import { AppBar, Container } from "@mui/material";
import Image from "next/image";
import { Item } from "@/components/home-page/why-us/WhyUs";

type Props = {
    data: Item;
}

export default function Header({ data }: Props) {
    return (
        <AppBar>
            <Container maxWidth="lg" sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
            }}>
                <a href="/">
                    <Image src={data.logo} alt="logo" width={122} height={24} />
                </a>
            </Container>
        </AppBar>
    );
}