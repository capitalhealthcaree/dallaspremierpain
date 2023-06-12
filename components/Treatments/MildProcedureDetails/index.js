import React from "react";
import Link from "next/link";
const ServiceDetailsContent = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="services-details-img">
            <img
              src="/images/mild-procedure.png"
              alt="mild procedure"
            />

            <h2>MILD Procedure Facts & Information</h2>
            <p>
              Your legs or buttocks may become numb, tingly, or painful when you
              walk. In this situation, the condition is referred to as Lumbar
              Spinal Stenosis (LSS). MILD provides significant pain relief for
              patients suffering from LSS. The study showed that 79 percent of
              patients reduced their pain and improved their mobility. Using
              MILD treatment in an outpatient setting, our board-certified{" "}
              <Link href="/find-a-doctor/rao-k-ali">pain specialists</Link>{" "}
              diagnose and treat LSS-related pain accurately.
            </p>
            <h2>Benefits of MILD Procedure:</h2>
            <p>
              Lumbar spinal stenosis patients should have a{" "}
              <Link href="/contact-locations/north-richland-hills">
                mild procedure North Richland Hills
              </Link>{" "}
              like this. Several factors may help patients:
            </p>
            <li>The day after surgery, you can go home</li>
            <li>Relieving pain</li>
            <li>Feeling more mobile</li>
            <li>
              After a few days, you will be able to resume light activities
            </li>
            <li>With less pain, you can stand longer and walk farther</li>
            <blockquote>
              <i className="icofont-quote-left"></i>
              Please contact us online or call us at 469-562-4188 to learn more
              about how you can benefit from our dallas mild procedure
              treatments options.
            </blockquote>
            <h2>Spinal Stenosis: How Does It Happen?</h2>
            <p>
              A gradual wear-and-tear of joints is the major cause of LSS, most
              commonly associated with osteoarthritis. You can get
              osteoarthritis and it can press on your nerves. Osteoarthritis
              usually affects people over 50, with women more likely to suffer
              from it than men. LSS may be caused by a number of other
              conditions, including:
            </p>
            <div className="row">
              <div className="col-6">
                <li>Spinal injuries</li>
                <li>Surgery in the past</li>
              </div>{" "}
              <div className="col-6">
                <li>Tumors of the spinal column</li>
                <li>The spinal canal is narrow</li>{" "}
              </div>
              <div className="col-6">
                <li>Diseases of the bones</li>
                <p>The following symptoms are common: </p>
                <li>
                  <Link href="/conditions-we-treat/back-pain">Back pain</Link>
                </li>
                <li>
                  <Link href="/sciatica-pain">Sciatica </Link>is a burning
                  feeling going down the buttocks and into the legs.
                </li>
                <li>Numbness and tingling in legs</li>
                <li>Foot numbness</li>
                <li>
                  An abnormal foot drop occurs when the foot is weak and slaps
                  down.
                </li>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
