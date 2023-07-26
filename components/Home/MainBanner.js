import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <div
        className="slider-item"
        style={{ backgroundImage: `url(/images/home-slider-bg.webp)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="slider-text">
                {/* <div className="slider-shape">
                  <img
                    style={{ visibility:"hidden" }}
                    src="/images/circle-image.webp"
                    alt="Shape"
                  />
                </div> */}

                <h1>Relieving Pain Throughout Northern Texas</h1>
                <p>
                  At Premier Pain Centers, we offer top quality pain management
                  using some of the least invasive, most effective pain
                  procedures possible.
                </p>

                <div className="common-btn">
                  <Link href="/appointment">Schedule Appointment</Link>
                  <Link href="/contact-and-location" className="cmn-btn-right">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
