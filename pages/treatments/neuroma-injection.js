import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import NeuromaInjectionDetails from "../../components/Treatments/NeuromaInjectionDetails";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import TreatmentsRightSide from "../../components/Common/TreatmentsRightSide";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Neuroma Injection Specialists in Dallas</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}treatments/neuroma-injection`}
        />
        <meta
          name="description"
          content="Neuroma Injection is a minimally invasive procedure that can reduce pain and inflammation caused by nerve irritation. Schedule an appointment today and get back to living your life."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Neuroma Injection in Dallas"
        homePageUrl="/"
        homePageText="Home"
        activePageText="neuroma-injection"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <NeuromaInjectionDetails />
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
