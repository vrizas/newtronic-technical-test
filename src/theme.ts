'use client';
import { Manrope } from "next/font/google";

import { createTheme } from '@mui/material/styles';

const manrope = Manrope({ 
    weight: ['400', '500', '600', '700', '800'],
    subsets: ["latin"], 
    display: 'swap'
 });

const theme = createTheme({
    typography: {
      fontFamily: manrope.style.fontFamily,
    },
    palette: {
      primary: {
        light: '#2E69E8',
        main: '#1F479C',
        dark: '#1E2739',
        contrastText: '#fff',
      },
      secondary: {
        light: '#2E69E8',
        main: '#2E69E8',
        dark: '#1F479C',
        contrastText: '#fff',
      },
      warning: {
        light: '#ffcd00',
        main: '#f08200',
        dark: '#FFA000',
        contrastText: '#fff',
      },
      common: {
        black: '#1e1e1e',
        white: '#fff',
      },
    },

    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: 'linear-gradient(to right, #1F479C, #2E69E8)',
            height: '60px',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
    },
});

export default theme;