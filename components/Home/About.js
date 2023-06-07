import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="about-area about-area-two pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <img src="/images/about.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-item about-right">
                <img src="/images/about-shape1.png" alt="About" />

                <h2>Multidisciplinary Pain Management in Dallas</h2>
                <p>
                  In Fort Worth, Lancaster, Hillsboro, and surrounding areas of
                  Dallas, Premier Pain Centers, offers advanced medical
                  solutions for pain management.
                </p>
                <p>
                  Dr. Rao Ali, a board-certified pain management physician,
                  leads the clinic, which specializes in nonsurgical treatment.
                  The physician has experience in the emergency room as well as
                  training in pain management and rehabilitation. As a personal
                  physician, he works with each patient to develop a treatment
                  plan that will minimize or eliminate their pain. Providing
                  expert diagnosis and treatment of a wide range of conditions,
                  Pain Management In Dallas, PA provides a comprehensive range
                  of services. These services include neck pain, back pain, hip
                  and knee pain, fibromyalgia, neuropathy, complex regional pain
                  syndrome, headaches, migraines, and many others.
                </p>

                <Link href="/appointment">Schedule An Appointment</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
