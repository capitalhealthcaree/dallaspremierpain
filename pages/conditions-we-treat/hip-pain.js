import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import ConditionsWeTreatLeftSide from "../../components/Common/ConditionsWeTreatLeftSide";
import HipPainDetails from "../../components/ConditionsWeTreat/HipPainDetails";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Hip Pain Treatment In Dallas, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}conditions-we-treat/hip-pain`}
        />
        <meta
          name="description"
          content="At Premier Pain Centers in Dallas, TX we offer comprehensive hip pain treatment solutions. Book an appointment today for a personalized treatment plan."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Hip Pain Treatments In Dallas"
        homePageUrl="/"
        homePageText="Home"
        activePageText="hip-pain"
        bgImage="/images/conditions-we-treat/hip-pain/hip-pain-dallas.jpg"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>

            <div className="col-lg-8">
              <HipPainDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
