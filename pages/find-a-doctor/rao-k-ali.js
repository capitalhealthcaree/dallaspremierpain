import React from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import AppointmentForm from "../../components/Appointment/AppointmentForm";
import Footer from "../../components/_App/Footer";

const conditionsWeTreat = {
  heaging: "Conditions We Treat",
  treatment: [
    { url: "/conditions-we-treat/shoulder-pain", name: "Shoulder Pain" },
    { url: "/conditions-we-treat/sports-injury", name: "Sports Injury" },
    { url: "/conditions-we-treat/headaches", name: "Headaches" },
    { url: "/conditions-we-treat/back-pain", name: "Back Pain" },
    { url: "/conditions-we-treat/neck-pain", name: "Neck Pain" },
    { url: "/conditions-we-treat/knee-pain", name: "Knee Pain" },
    { url: "/conditions-we-treat/joint-pain", name: "Joint Pain" },
    { url: "/conditions-we-treat/leg-pain", name: "Leg Pain" },
  ],
};
const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>
          Dr. Rao K. Ali M.D: Interventional Pain Management Physician
        </title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}find-a-doctor/rao-k-ali`}
        />
        <meta
          name="description"
          content="Dr. Rao K. Ali is a dual fellowship-trained, double board-certified Physiatrist and Interventional Pain Management physician. Schedule an appointment today."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Dr. Rao K. Ali M.D."
        homePageUrl="/"
        homePageText="Home"
        activePageText="Dr. Rao K. Ali"
        bgImage="/images/doctor.jpg"
      />

      <div className="doctor-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <img src="/images/doctors/doctor1.jpg" alt="Doctor" />
                <div className="blog-details-item">
                  <div className="blog-details-category ps-3">
                    <h3>{conditionsWeTreat.heaging}</h3>
                    <ul>
                      {conditionsWeTreat.treatment.map((item, i) => {
                        return (
                          <li key={i}>
                            <Link href={item.url}>{item.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>
                      <b>Dr. Rao K. Ali M.D.</b>
                    </h3>
                    <h4>(Interventional Pain Management Physician)</h4>
                  </div>
                  <div className="doctor-details-biography">
                    <h3>Biography</h3>

                    <p>
                      Dr. Rao Ali is a dual fellowship-trained, double
                      board-certified Physiatrist and Interventional Pain
                      Management physician who runs the state of art{" "}
                      <Link href="/interventional-pain-management">
                        interventional pain management
                      </Link>{" "}
                      practice for over eight years.
                    </p>

                    <p>
                      Dr. Ali Completed his medical school in 2000 and General
                      Surgery Internship in 2006, Physical Medicine and
                      Rehabilitation Residency in 2009 at the prestigious
                      Montefiore Medical Center NY, Interventional Spine
                      Fellowship in 2010, and Anesthesia-based Pain Medicine
                      Fellowship at Case Western University Hospitals in 2011.
                      He is an expert in interventional pain procedures
                      including Epidurals, Nerve Blocks, Radio-frequency
                      Ablation,{" "}
                      <Link href="/treatments//joint-injections">
                        Joint Injections
                      </Link>
                      , Kyphoplasty, Discectomy,
                      <Link href="/treatments/spinal-cord-stimulation">
                        Spinal cord stimulator
                      </Link>{" "}
                      trial, and implantation and Intrathecal pumps.
                    </p>

                    <p>
                      He has presented over 20 posters and publications
                      nationally as well as internationally. He has run CME
                      programs and has trained physicians in workshops
                      nationally and internationally. He is past president of
                      Richland County Medical Society and is an active member of
                      ASIPP, NANS, and Texas Pain Society. He is a
                      sociopolitical activist. He loves traveling and spending
                      time with his family and friends.
                    </p>
                    <p></p>
                  </div>
                  <div className="doctor-details-contact">
                    <h3>Contact info</h3>
                    <ul>
                      <li>
                        <i className="icofont-ui-call"></i>
                        Call: 469-562-4188
                      </li>
                      <li>
                        <i className="icofont-ui-message"></i>
                        admin@dallaspremierpain.com
                      </li>
                    </ul>
                  </div>
                  <div className="doctor-details-biography"></div>
                  <div className="doctor-details-work">
                    <h3>Working hours</h3>
                    <div className="appointment-item-two-right">
                      <div className="appointment-item-content">
                        <ul>
                          <li>
                            Monday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Tuesday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Wednesday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Thursday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Friday <span>9:00 AM - 5:00 PM</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-100">
        <AppointmentForm />
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
