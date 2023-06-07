import React from "react";
import Head from "next/head";
import GoTop from "./GoTop";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <title>Pain Management Specialists in Dallas</title>

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}`} />
        <meta
          name="description"
          content="At Dallas Premier Pain, we offer top quality pain management using some of the least invasive, most effective pain procedures possible. Schedule an Appointment!"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="google-site-verification"
          content="STslxvbYcwrVsi_MXXKSwuMAXsXEq0oBl5kUS63I0ok"
        />
      </Head>

      {children}

      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </>
  );
};

export default Layout;