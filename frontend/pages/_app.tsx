import "../styles/globals.css";

import type { AppProps } from "next/app";
import colors from "../theme/lightTheme";
import { ReactQueryDevtools } from "react-query/devtools";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";
import GlobalFonts from "../theme/theme";
import Head from "next/head";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import withApollo from "../hoc/withapplo";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import "react-image-crop/dist/ReactCrop.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-select-search/dist/cjs/useClassName";
import Online from "../online/online";
import Router from "next/router";
import "react-tagsinput/react-tagsinput.css";
import "react-rangeslider/lib/index.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <NextNProgress height={2} color="#ed247c" />

      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dwjlja8hw/image/upload/v1647601057/PULSEPLAY-LOGO_1_c2m0ht.png"
          type="image/x-icon"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ToastContainer
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ThemeProvider theme={colors}>
        <GlobalFonts />

        <Online />
        <Head>
          <title> PulsePlay Digital CMS </title>
        </Head>
        <Component {...pageProps} />

        <ScrollToTop smooth />
      </ThemeProvider>
    </>
  );
}

export default withApollo(MyApp);
