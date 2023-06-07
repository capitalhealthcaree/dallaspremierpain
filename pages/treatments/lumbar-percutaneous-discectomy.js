import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import LumbarPercutaneousDiscectomy from "../../components/Treatments/LumbarPercutaneousDiscectomyDetails";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import TreatmentsRightSide from "../../components/Common/TreatmentsRightSide";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Percutaneous Lumbar Discectomy Treatment in Dallas, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}treatments/lumbar-percutaneous-discectomy`}
        />
        <meta
          name="description"
          content="A lumbar percutaneous discectomy North Richland Hills carries fewer risks than other types of spinal surgery, as well as allowing for quicker recovery times."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Percutaneous Lumbar Discectomy in Dallas"
        homePageUrl="/"
        homePageText="Home"
        activePageText="lumbar-percutaneous-discectomy"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <LumbarPercutaneousDiscectomy />
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
