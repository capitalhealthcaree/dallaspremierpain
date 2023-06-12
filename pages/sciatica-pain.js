import React from "react";
import Head from "next/head";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AppointmentFormSideBar from "../components/Appointment/AppointmentFormSideBar";
import ConditionsWeTreatLeftSide from "../components/Common/ConditionsWeTreatLeftSide";
import SciaticaPain from "../components/SciaticaPain";
import Footer from "../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Sciatica Pain Treatment in Dallas, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}sciatica-pain`}
        />
        <meta
          name="description"
          content="Sciatica pain may result from an inflamed, compressed, or pinched nerve in the lower back or legs. In sciatica, the sciatic nerve is irritated, resulting in pain."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Sciatica Pain Relief In Dallas"
        homePageUrl="/"
        homePageText="Home"
        activePageText="sciatica-pain"
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
              <SciaticaPain />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
