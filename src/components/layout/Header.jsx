import "../../styles/layout/Header.css";

export const Header = () => {
  return (
    <div className="Header">
      <div className="px-4 px-md-5 w-100">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="company-brand-logo">
            <div className="d-flex align-items-center">
              <img src="/images/logo/logo.png" alt="" className="me-2" />
              <div>
                <h6 className="mb-1 mt-0">SHAVEEN FERNANDO</h6>
                <p className="mb-0">Coach For You</p>
              </div>
            </div>
          </div>
          <div className="desktop-navigations d-none d-md-flex">
            <a href="/">Home</a>
            <a href="/why-coaching">Why Coaching</a>
            <a href="/our-services">My Services</a>
            <a href="/why-shaveen">Why Shaveen</a>
            <a href="/contact-us">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};
