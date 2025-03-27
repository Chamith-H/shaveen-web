import "../../styles/layout/Footer.css";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="p-4 p-md-5">
        <div className="py-4">
          <div className="row gy-0">
            <div className="col-lg-8">
              <div className="head-col d-md-flex justify-content-start align-items-start h-100">
                <img src="/images/shaveen/shaveenF.jpg" alt="" />

                <div className="ms-md-4 d-flex flex-column justify-content-between h-100 mt-4 mt-md-0">
                  <div>
                    <h5 className="mb-0">SHAVEEN</h5>
                    <p className="mb-0">Coach For You</p>

                    <h6 className="mt-2">
                      My coaching, rooted in personal experience and Biblical
                      principles, is designed for individuals of all faith
                      backgrounds. I help you develop a stronger mindset, stay
                      consistent, and achieve sustainable success.
                    </h6>
                  </div>

                  <div className="d-none d-md-flex">
                    <a
                      href="https://wa.me/94777428427?text=Hi%20Shaveen%20I%20am%20ready%20to%20embark%20on%20a%20transformative%20journey.%20How%20can%20you%20guide%20me"
                      target="blank"
                    >
                      <i class="bi bi-whatsapp"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/shaveenfernando/"
                      className="ms-3"
                      target="blank"
                    >
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="d-flex d-md-none mobile-navs-ico">
                <a
                  href="https://wa.me/94777428427?text=Hi%20Shaveen%20I%20am%20ready%20to%20embark%20on%20a%20transformative%20journey.%20How%20can%20you%20guide%20me"
                  target="blank"
                >
                  <i class="bi bi-whatsapp"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/shaveenfernando/"
                  className="ms-3"
                  target="blank"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="d-block d-lg-none">
                <div className="div-border-x"></div>
              </div>
              <div className="quick-links d-flex justify-content-lg-end mt-5 mt-lg-0">
                <div className="me-5">
                  <h6>Quick Links</h6>

                  <div className="d-flex flex-column">
                    <a href="/">Home</a>
                    <a href="/why-coaching">Why Coaching</a>
                    <a href="/our-services">My Services</a>
                    <a href="/why-shaveen">Why Shaveen</a>
                    <a href="/contact-us">Contact Me</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
