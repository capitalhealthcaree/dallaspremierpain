import React from "react";
import Link from "next/link";
const ServiceDetailsContent = () => {
  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="services-details-img">
            <img
              src="/images/treatments/neuroma-injection.jpg"
              alt="Neuroma Injection"
            />

            <h2>Neuroma Injection Facts & Information</h2>
            <p>
              An injury to the nerves at the site of the injury transmits
              abnormal pain signals to the brain. This results in persistent
              pain.As a result of nerve damage, neuromas form clusters of
              abnormal nerves. Neuroma injections are designed to prevent these
              nerve clusters from transmitting pain signals to the brain.
              Sweating, swelling, mobility impairments, and a discolored
              complexion may also be prevented by pain signals.
            </p>
            <blockquote>
              <i className="icofont-quote-left"></i>
              Please contact us online or call us at 469-562-4188 to learn more
              about how you can benefit from our dallas neuroma injection
              treatments options.
            </blockquote>
            <h2>Procedure</h2>
            <li>
              Upon your arrival at our clinic, a staff member will accompany you
              to the procedure room
            </li>
            <li>
              We will first clean the foot area and administer numbing
              medication before administering the injection.
            </li>
            <li>
              Application of a little amount of gel to the affected area should
              be warm.
            </li>
            <li>
              Using an ultrasound transducer (wand), the sonographer will take
              images of your foot tissues.
            </li>
            <li>
              On the basis of the images, our radiologists will determine the
              location of the neuroma. Your foot will be injected with
              medication via a needle after the needle is inserted.
              Consequently, you may experience some discomfort or pressure for a
              short period of time.
            </li>
            <li>
              The entire procedure will complete approximately in twenty
              minutes.
            </li>
            <h2>After the Procedure</h2>
            <li>
              The injection may be administered soon after you have returned
              home. You should rest your feet rest of the day.
            </li>
            <li>
              Immediately following a{" "}
              <Link href="/treatments/steroid-joint-injections">
                steroid injection
              </Link>
              , the patient should refrain from running and jumping for two
              weeks.
            </li>
            <li>
              A local anesthetic may relieve pain depending on its strength. For
              several days following the administration of steroids, there may
              be no relief from pain.
            </li>
            <li>
              Several injections may be necessary to alleviate alcohol-related
              pain.
            </li>
            <li>
              Occasionally, the area where the injection has been administered
              may be inflamed or swollen.
            </li>
            <li>
              The area can be treated with ice packs every day for twenty
              minutes.
            </li>
            <h2>Expected Results</h2>
            <p>
              The injection of neuromas is effective in reducing the symptoms of
              CRPS caused by nerve injuries. The procedure will be completed in
              a few minutes and you will be able to go back to your normal daily
              activities as soon as possible. The effects of these injections
              should begin to be felt within a few days of receiving them.
            </p>
          </div>
        </div>
      </div>
      <div className="row"></div>
    </>
  );
};

export default ServiceDetailsContent;
