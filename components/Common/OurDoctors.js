import React from "react";
import Link from "next/link";

const OurDoctors = () => {
  return (
    <>
      <div className="doctors-area pt-5 pb-5">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Doctors</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor1.jpg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/find-a-doctor/rao-k-ali">Dr. Rao K. Ali M.D.</Link>
                  </h3>
                  <span>Interventional Pain Management Physician</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor2.jpg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/find-a-doctor/dr-muhammad-zulqarnain">
                      DR. MUHAMMAD ZULQARNAIN M.D.
                    </Link>
                  </h3>
                  <span>Pain Management Physician</span>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className="doctor-item">
                <div className="doctor-top">
                  <img src="/images/doctors/doctor3.jpg" alt="Doctor" />
                  <Link href="/appointment">Get Appointment</Link>
                </div>
                <div className="doctor-bottom">
                  <h3>
                    <Link href="/find-a-doctor/ranjit-sandhu">Ranjit Sandhu M.D.</Link>
                  </h3>
                  <span>Pain Management Physician</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDoctors;
