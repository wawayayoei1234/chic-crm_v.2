import '../styles/globals.css'
import theme from '../utils/theme'
import { ThemeProvider } from '@mui/material'
import Head from 'next/head';
import { MyProvider } from '@/context';


export default function App({ Component, pageProps,session }) {
  const { user } = pageProps;
  return ( 
    <div>
    <Head>
      <meta name="viewport" content="viewport-fit=cover" />
    </Head>
    <ThemeProvider theme={theme}>

    <MyProvider>
      <Component {...pageProps} />
    </MyProvider>

    </ThemeProvider> 
    </div>
   );
 }

 