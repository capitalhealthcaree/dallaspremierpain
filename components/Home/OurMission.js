import React from "react";
import Link from "next/link";

const OurMission = () => {
  return (
    <>
      <div className="spread-area pt-5 pb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="spread-content">
                <div className="section-title-two">
                  <h2>Your Source for Pain Management</h2>
                </div>

                <p>
                  At Premier Pain Centers, our mission is to provide patients
                  with top-quality care using cutting-edge technology and
                  minimally invasive techniques. We understand our patients live
                  occupied lives.
                </p>
                <ul>
                  <li>
                    <img loading="lazy" src="/images/our-mission/tick.png" alt="Spread" />
                    <p>
                      Premier Pain Centers operates in the most efficient way
                      possible to provide a safe environment and deliver the
                      most effective surgical services to patients in{" "}
                      <Link href="/contact-locations/richardson">
                        Richardson
                      </Link>
                      ,{" "}
                      <Link href="/contact-locations/fort-worth">
                        Fort Worth
                      </Link>
                      ,{" "}
                      <Link href="/contact-locations/lancaster">Lancaster</Link>
                      ,{" "}
                      <Link href="/contact-locations/hillsboro">Hillsboro</Link>
                      ,{" "}
                      <Link href="/contact-locations/corsicana">Corsicana</Link>{" "}
                      and the surrounding areas. When it comes to spine-related
                      issues, Premier Pain Centers offers the treatment and care
                      you deserve and expect. Regardless of the cause, our
                      experienced team is ready to help.
                    </p>
                  </li>

                  <li>
                    <img loading="lazy" src="/images/our-mission/tick.png" alt="Spread" />
                    <p>
                      We at Premier Pain Centers strive to utilize advanced
                      technology and remain at the forefront of medical
                      innovation. As a result of our minimally invasive
                      techniques, our patients are able to recover faster,
                      experience less discomfort, and experience less scarring
                      during the healing process.
                    </p>
                  </li>
                  <li>
                    <img loading="lazy" src="/images/our-mission/tick.png" alt="Spread" />
                    <p>
                      Our value proposition lies in our ability to offer timely,
                      same-day outpatient surgery procedures—such as M6
                      artificial disc replacements—to patients who travel from
                      all over the world to receive treatment from our skilled
                      team of experts.
                    </p>
                  </li>
                  <li>
                    <img loading="lazy" src="/images/our-mission/tick.png" alt="Spread" />
                    <p>
                      We offer expert diagnosis and treatment for pain and
                      dysfunction caused by deformity, degenerative disc
                      disease, trauma, and failed neck or back surgeries.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="spread-img">
                <img loading="lazy" src="/images/our-mission/pain-body.webp" alt="Spread" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
