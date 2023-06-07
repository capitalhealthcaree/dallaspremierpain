import "../styles/bootstrap.min.css";
import "../styles/animate.css";
import "../styles/icofont.min.css";
import "../styles/meanmenu.css";
import "react-tabs/style/react-tabs.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";
import Head from "next/head";

// Global Style
import "../styles/style.css";
import "../styles/responsive.css";
// Global RTL Style
import "../styles/rtl.css";

import Layout from "../components/_App/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}`} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};
export default MyApp;
