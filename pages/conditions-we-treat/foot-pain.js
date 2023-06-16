import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import ConditionsWeTreatLeftSide from "../../components/Common/ConditionsWeTreatLeftSide";
import FootPainDetails from "../../components/ConditionsWeTreat/FootPainDetails";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Foot Pain Specialist Clinic in Dallas, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}conditions-we-treat/foot-pain`}
        />
        <meta
          name="description"
          content="If you're suffering from foot pain, our team of specialists at the Premier Pain Centers Dallas is here to help. Schedule an appointment today!"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Foot Pain Treatments in Dallas"
        homePageUrl="/"
        homePageText="Home"
        activePageText="foot-pain"
        bgImage="/images/conditions-we-treat/foot-pain/foot-pain-treatment.jpg"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>

            <div className="col-lg-8">
              <FootPainDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
