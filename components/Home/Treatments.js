import React from "react";
import Link from "next/link";
const treatments = [
  {
    href: "/treatments/hip-joint-injections",
    name: " Hip Joint Injections",
  },
  {
    href: "/treatments//lumbar-sympathetic-injections",
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
];

const SymptomsCovid19 = () => {
  return (
    <>
      <div className="symptoms-area pt-5 pb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="symptoms-img">
                <img src="/images/symptoms.jpg" alt="Symptoms" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="symptoms-content">
                <div className="section-title">
                  <h2>Treatments</h2>
                </div>
                <p>
                  Our expert <Link href="/find-a-doctor">pain management doctors</Link> treat a variety of
                  conditions, from head to toe, using advanced diagnostic
                  techniques and non-surgical treatments. Don't know where to
                  start? Simply search by a treatment, or body part that is
                  bothering you.
                </p>
                <ul>
                  {treatments.map((item, i) => {
                    return (
                      <li key={i}>
                        <Link href={item.href}>
                          <span>
                            <i className="icofont-caret-right"></i>
                            {item.name}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SymptomsCovid19;
