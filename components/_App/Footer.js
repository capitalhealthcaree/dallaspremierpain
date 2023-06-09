import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div
                  className="footer-contact"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Link href="/" className="navbar-brand">
                    <img src="/images/logo-footer.png" alt="logo" />
                  </Link>
                  <p className="pt-3" style={{ color: "white" }}>
                    At Premier Pain Centers, we offer top quality pain
                    management using some of the least invasive, most effective
                    pain procedures possible.
                  </p>
                  <div className="common-btn">
                    <Link href="/appointment" className="cmn-btn-right">
                      Schedule Appointment
                    </Link>
                  </div>
                  <ul className="mt-3">
                    <li>
                      <i
                        className="icofont-ui-message"
                        style={{ fontSize: "25px" }}
                      ></i>
                      <a href="mailto:admin@dallaspremierpains.com">
                        admin@dallaspremierpains.com
                      </a>
                    </li>

                    <li style={{ marginLeft: "-5px" }}>
                      <i
                        className="icofont-ui-call"
                        style={{ fontSize: "30px" }}
                      ></i>

                      <a href="tel:+14695624188">( +1 ) 469-562-4188</a>
                    </li>
                  </ul>
                  <ul
                    className="mt-4"
                    style={{ display: "flex", marginLeft: "-10px" }}
                  >
                    <li style={{ marginRight: "10px" }}>
                      <a
                        href="https://www.facebook.com/mypremierpain"
                        target="_blank"
                      >
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    {/* <li style={{ marginRight: "10px" }}>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li> */}
                    <li style={{ marginRight: "10px" }}>
                      <a
                        href="https://www.linkedin.com/in/premier-pain-centers-08582018a/"
                        target="_blank"
                      >
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li style={{ marginRight: "10px" }}>
                      <a
                        href="https://www.instagram.com/premier_pain_centers/"
                        target="_blank"
                      >
                        <i className="icofont-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <ul>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>RICHARDSON</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://www.google.com/maps?cid=4359111757237130564">
                        403 W Campbell Rd., Ste. 305
                      </a>
                      <a href="https://www.google.com/maps?cid=4359111757237130564">
                        Richardson, TX 75080
                      </a>
                      <a
                        href="/contact-locations/richardson"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>HILLSBORO</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://www.google.com/maps?cid=9063563001732813751">
                        1323 E. Franklin St., Ste. 102
                      </a>
                      <a href="https://www.google.com/maps?cid=9063563001732813751">
                        Hillsboro, TX 76645
                      </a>
                      <a
                        href="/contact-locations/hillsboro"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>FARMERS BRANCH</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://www.google.com/maps?cid=3934515186064169906">
                        Farmers Branch, TX 75234
                      </a>
                      <a href="https://www.google.com/maps?cid=3934515186064169906">
                        Richardson, TX 75080
                      </a>
                      <a
                        href="/contact-locations/farmers-branch"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>CLEBURNE</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://goo.gl/maps/SX3zQArg9RvyJZiD9?coh=178572&entry=tt">
                        131 S Westmeadow Dr,
                      </a>
                      <a href="https://goo.gl/maps/SX3zQArg9RvyJZiD9?coh=178572&entry=tt">
                        Cleburne, TX 76033
                      </a>
                      <a href="/contact-locations/cleburne" className="fw-bold">
                        View Site
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <ul>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>
                        NORTH RICHLAND HILLS
                      </h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://www.google.com/maps?cid=10580295200115195655">
                        7904 NE Loop 820, Ste. C
                      </a>
                      <a href="https://www.google.com/maps?cid=10580295200115195655">
                        North Richland Hills, TX 76180
                      </a>
                      <a
                        href="/contact-locations/north-richland-hills"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>LANCASTER</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://www.google.com/maps?cid=16681715367138219884">
                        2700 W. Pleasant Run Rd., Ste. 320
                      </a>
                      <a href="https://www.google.com/maps?cid=16681715367138219884">
                        Lancaster, TX 75146
                      </a>
                      <a
                        href="/contact-locations/lancaster"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    <li>
                      {" "}
                      <h3 style={{ marginBottom: "1px" }}>WAXAHACHIE OFFICE</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://www.google.com/maps?cid=16055043450728768858">
                        20 Northgate Dr.
                      </a>
                      <a href="https://www.google.com/maps?cid=16055043450728768858">
                        Waxahachie, TX 75165
                      </a>
                      <a
                        href="/contact-locations/waxahachie"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <ul>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>FORT WORTH</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://www.google.com/maps?cid=1967984420970158753">
                        1111 5th Ave,
                      </a>
                      <a href="https://www.google.com/maps?cid=1967984420970158753">
                        Fort Worth, TX 76104
                      </a>
                      <a
                        href="/contact-locations/fort-worth"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                    <li>
                      <h3 style={{ marginBottom: "1px" }}>DECATUR</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://goo.gl/maps/ajt2yjVWs8Lfn5CKA">
                        902 Preskitt Rd Suite 300,
                      </a>
                      <a href="https://goo.gl/maps/ajt2yjVWs8Lfn5CKA">
                        Decatur, TX 76234
                      </a>
                      <a href="/contact-locations/decatur" className="fw-bold">
                        View Site
                      </a>
                    </li>
                    <li>
                      {" "}
                      <h3 style={{ marginBottom: "1px" }}>CORSICANA</h3>
                      <i className="icofont-location-pin"></i>
                      <a href="https://goo.gl/maps/t3UcfhLPzrDX8rHH9">
                        3108 E. State HWY 22
                      </a>
                      <a href="https://goo.gl/maps/t3UcfhLPzrDX8rHH9">
                        Corsicana, TX 75102
                      </a>
                      <a
                        href="/contact-locations/corsicana"
                        className="fw-bold"
                      >
                        View Site
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright &copy; {currentYear} Design & Developed by{" "}
              <a href="https://dallaspremierpain.com" target="_blank">
                Dallas Premier Pain
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
