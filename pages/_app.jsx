import { AppContextProvider } from '../context/AppContext';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
   return (
      <AppContextProvider>
         <Head>
            <title>Awesome App</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
            <meta name="description" content="awesome next practice" />
            <meta name="keywords" content="Html, css, javascript, next" />
         </Head>
         <Component {...pageProps} />
      </AppContextProvider>
   );
}

export default MyApp;
