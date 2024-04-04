'use client';
import { Theme } from "@mui/material";

export const gradientText = (theme: Theme) => ({
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
});