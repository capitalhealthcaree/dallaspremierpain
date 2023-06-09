import React from "react";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentFormSideBar from "../../components/Appointment/AppointmentFormSideBar";
import ConditionsWeTreatLeftSide from "../../components/Common/ConditionsWeTreatLeftSide";
import CarAccidentInjuryDetails from "../../components/ConditionsWeTreat/CarAccidentInjuryDetails";
import Footer from "../../components/_App/Footer";

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Emergency Treatment for Car Accident Injury In Dallas</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}conditions-we-treat/car-accident-injury`}
        />
        <meta
          name="description"
          content="When you need emergency treatment for car accident injury in Dallas, our medical team is here to provide prompt and comprehensive care."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      <PageBanner
        pageTitle="Car Accident Injury in Dallas"
        homePageUrl="/"
        homePageText="Home"
        activePageText="car-accident-injury"
        bgImage="/images/conditions-we-treat/car-accident-injury/car-accident-injury.jpg"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <ConditionsWeTreatLeftSide />
            </div>

            <div className="col-lg-8">
              <CarAccidentInjuryDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
