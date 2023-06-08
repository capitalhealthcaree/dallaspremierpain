import React from "react";
import Link from "next/link";

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
    { url: "/conditions-we-treat/hip-pain", name: "Hip Pain" },
    { url: "/conditions-we-treat/foot-pain", name: "Foot Pain" },
    { url: "/conditions-we-treat/wrist-pain", name: "Wrist Pain" },
    {
      url: "/conditions-we-treat/car-accident-injury",
      name: "Car Accident Injury",
    },
  ],
};
const Treatments = {
  heaging: "Treatments",
  treatment: [
    {
      href: "/treatments/hip-joint-injections",
      name: " Hip Joint Injections",
    },
    {
      href: "/treatments/lumbar-sympathetic-injections",
      name: " Lumbar Sympathetic Injections",
    },
    {
      href: "/treatments/neuroma-injection",
      name: " Neuroma Injection",
    },
    {
      href: "/treatments/steroid-joint-injections",
      name: " Steroid Joint Injections",
    },
    {
      href: "/treatments/spinal-cord-stimulation",
      name: " Spinal Cord Stimulation",
    },
    {
      href: "/treatments/mild-procedure",
      name: "Mild Procedure",
    },
    {
      href: "/treatments/k-laser-therapy",
      name: " K-Laser Therapy",
    },
    {
      href: "/treatments/platelet-rich-plasma",
      name: " Platelet Rich Plasma",
    },
    {
      href: "/treatments/disc-regenerative-therapy",
      name: " Disc Regenerative Therapy",
    },
    {
      href: "/treatments/epidural-steroid-injection",
      name: " Epidural Steroid Injection",
    },
    {
      href: "/treatments/facet-joint-injection",
      name: " Facet Joint Injection",
    },
    {
      href: "/treatments/sympathetic-injections",
      name: " Sympathetic Injections",
    },
  ],
};
const ConditionsWeTreatLeftSide = () => {
  return (
    <>
      <div className="blog-details-item">
        <div className="blog-details-category ps-3">
          <h3>{conditionsWeTreat.heaging}</h3>
          <ul>
            {conditionsWeTreat.treatment.map((item) => {
              return (
                <li>
                  <Link href={item.url}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="departments-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="department-item">
                <h3>Dr. Rao K. Ali M.D.</h3>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-details-item">
        <div className="blog-details-tags">
          <h3>{Treatments.heaging}</h3>
          <ul>
            {Treatments.treatment.map((item, i) => {
              return (
                <li style={{ display: "block" }} key={i}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ConditionsWeTreatLeftSide;
