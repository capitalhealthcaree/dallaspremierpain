import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import LumbarSympatheticInjectionsDetails from "../../components/Treatments/LumbarSympatheticInjectionsDetails";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import TreatmentsRightSide from "../../components/Common/TreatmentsRightSide";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Lumbar Sympathetic Injections for Chronic Pain</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}treatments/lumbar-sympathetic-injections`}
        />
        <meta
          name="description"
          content="The lumbar sympathetic injections may be used to treat vascular insufficiency, complex regional pain syndrome, reflex sympathetic dystrophy, or shingles."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Lumbar Sympathetic Injections in Dallas"
        homePageUrl="/"
        homePageText="Home"
        activePageText="lumbar-sympathetic-injections"
        bgImage="/images/page-banner2.jpg"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-8">
              <LumbarSympatheticInjectionsDetails />
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
