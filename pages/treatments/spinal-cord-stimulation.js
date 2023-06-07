import React from "react";
import Head from "next/head";

import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import SpinalCordStimulationDetails from "../../components/Treatments/SpinalCordStimulationDetails";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import TreatmentsRightSide from "../../components/Common/TreatmentsRightSide";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Spinal Cord Stimulation for Chronic Pain In Dallas</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}treatments/spinal-cord-stimulation`}
        />
        <meta
          name="description"
          content="Spinal cord stimulation is an advanced treatment option for chronic pain relief. During spinal cord stimulation, chest pain, nerve pain, and back pain related to the heart are treated."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Spinal Cord Stimulation in Dallas"
        homePageUrl="/"
        homePageText="Home"
        activePageText="spinal-cord-stimulation"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <SpinalCordStimulationDetails />
            </div>

            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <TreatmentsRightSide />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
