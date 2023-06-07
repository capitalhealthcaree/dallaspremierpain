import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import OurDoctors from "../components/Common/OurDoctors";
import FeedbackSlider from "../components/Home/FeedbackSlider";
import Footer from "../components/_App/Footer";

const Testimonials = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
        bgImage="/images/testimonial-bg.jpg"
      />

      <OurDoctors />
      <div className="mb-5">
        <FeedbackSlider />
      </div>
      <Footer />
    </>
  );
};
export default Testimonials;
