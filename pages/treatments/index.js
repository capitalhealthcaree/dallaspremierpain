import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Treatments from "../../components/Home/Treatments";
import AppointmentForm from "../../components/Home/AppointmentForm";
import LatestBlogPost from "../../components/Common/LatestBlogPost";
import Footer from "../../components/_App/Footer";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Pain Management Doctors in Dallas | Treatments Overview</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}treatments`}
        />
        <meta
          name="description"
          content="Find the best treatments for your health and wellness needs. Contact us today to schedule an appointment!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Treatments"
        homePageUrl="/"
        homePageText="Home"
        activePageText="treatments"
        bgImage="/images/contact-and-locations.jpg"
      />
      <Treatments />
      <AppointmentForm />
      <LatestBlogPost />

      <Footer />
    </>
  );
};

export default Contact;
