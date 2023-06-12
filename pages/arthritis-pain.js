import React from "react";
import Head from "next/head";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AppointmentFormSideBar from "../components/Appointment/AppointmentFormSideBar";
import ConditionsWeTreatLeftSide from "../components/Common/ConditionsWeTreatLeftSide";
import ArthritisPain from "../components/ArthritisPain";
import Footer from "../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Arthritis Pain Treatment in Dallas, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}arthritis-pain`}
        />
        <meta
          name="description"
          content="Depending on your daily activities, you may be able to reduce arthritis pain with the assistance of a physical therapist. Schedule an appointment today!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Arthritis Pain Relief In Dallas"
        homePageUrl="/"
        homePageText="Home"
        activePageText="arthritis-pain"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>

            <div className="col-lg-8">
              <ArthritisPain />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
