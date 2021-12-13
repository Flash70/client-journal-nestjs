import {CssBaseline, ThemeProvider} from '@mui/material';
import Head from 'next/head';
import {theme} from '../theme';
import {Header} from '../components/Header';
import '../styles/global.scss';
import React from 'react';

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>SJournal</title>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...pageProps} />
            </ThemeProvider>
        </>

    )
};