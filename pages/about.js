import React from "react";
import Head from "next/head";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import OurServices from "../components/Home/OurServices";
import OurDoctors from "../components/Common/OurDoctors";
import FeedbackSlider from "../components/Home/FeedbackSlider";
import LatestBlogPost from "../components/Common/LatestBlogPost";
import Footer from "../components/_App/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Dallas Premier Pain</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}about`}
        />
        <meta
          name="description"
          content="At Premier Pain Centers, we offer top quality pain management using some of the least invasive, most effective pain procedures possible."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />
      {/*  */}
      <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="about"
        bgImage="/images/page-banner1.jpg"
      />

      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <img loading="lazy" src="/images/about.webp" alt="About" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-item about-right">
                <img loading="lazy" src="/images/about-shape1.webp" alt="About" />
                <h2>About Our Hospital</h2>
                <p>
                  In Fort Worth, Lancaster, Hillsboro, and surrounding areas of
                  Dallas, Premier Pain Centers, offers advanced medical
                  solutions for pain management.{" "}
                </p>
                <p>
                  Dr. Rao Ali, a board-certified pain management physician,
                  leads the clinic, which specializes in nonsurgical treatment.
                  The physician has experience in the emergency room as well as
                  training in pain management and rehabilitation. As a personal
                  physician, he works with each patient to develop a treatment
                  plan that will minimize or eliminate their pain. Providing
                  expert diagnosis and treatment of a wide range of conditions,
                  Pain Management In Dallas, provides a comprehensive range of
                  services. These services include neck pain, back pain, hip and
                  knee pain, fibromyalgia, neuropathy, complex regional pain
                  syndrome, headaches, migraines, and many others.{" "}
                </p>
                <p>
                  Steroid injections and radiofrequency ablation are among the
                  pain management techniques used by the skilled medical staff.
                  We at Premier Pain Centers, are committed to optimizing the
                  comfort of our patients. In recognition of how disabling
                  ongoing pain can become, they strive to provide patients with
                  the best care possible so that they can return to living a
                  full and rewarding life.{" "}
                </p>
                <p>
                  Because of their staff's expert knowledge, continuing
                  education, and dedication to treating patients holistically,
                  they provide effective pain management. You can schedule a
                  consultation with Premier Pain Centers by calling or booking
                  an appointment online today.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurServices />
      <OurDoctors />
      <FeedbackSlider />
      <LatestBlogPost />

      <Footer />
    </>
  );
};

export default About;
