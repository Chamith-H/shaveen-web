import "../../styles/layout/Header.css";
import { useState, useEffect, useRef } from "react";

export const Header = () => {
  const [route, setRoute] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const ref = useRef(null);

  const handle_ClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    const path = window.location.pathname.substring(1);
    setRoute(path);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handle_ClickOutside);

    return () => {
      document.removeEventListener("mousedown", handle_ClickOutside);
    };
  });

  return (
    <div className="Header px-4 px-md-5" ref={ref}>
      <div className="Header-Logo">
        <a href="" className="d-flex">
          <img
            src="/images/logo/logo.png"
            alt="shaveen-logo"
            className="me-1"
          />
          <div>
            <h6 className="mb-0">HAVEEN</h6>
            <p className="mb-0">Coach For You</p>
          </div>
        </a>
      </div>

      <div className="d-none d-md-block">
        <div className="Desktop-Navigations">
          <a
            className={route === "" ? "active-route" : "deactive-route"}
            href="/"
          >
            Home
          </a>
          <a
            className={
              route === "why-coaching"
                ? "active-route ms-4"
                : "deactive-route ms-4"
            }
            href="/why-coaching"
          >
            Why Coaching
          </a>
          <a
            className={
              route === "our-services"
                ? "active-route ms-4"
                : "deactive-route ms-4"
            }
            href="/our-services"
          >
            My Services
          </a>
          <a
            className={
              route === "why-shaveen"
                ? "active-route ms-4"
                : "deactive-route ms-4"
            }
            href="/why-shaveen"
          >
            Why Shaveen
          </a>

          <a
            className={
              route === "contact-us"
                ? "active-route ms-4"
                : "deactive-route ms-4"
            }
            href="/contact-us"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="d-md-none">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="Toggle-button"
        >
          {isExpanded && (
            <div>
              <i class="bi bi-sliders2"></i>
            </div>
          )}

          {!isExpanded && (
            <div className="rotate-180">
              <i class="bi bi-sliders2"></i>
            </div>
          )}
        </button>
      </div>

      <div className={isExpanded ? "Expanded" : "Collapsed"}>
        <div className="row">
          <div className="col-6">
            <div className="Desktop-Navigations-mobile px-4 py-4">
              <a
                className={
                  route === "" ? "active-route-m mt-3" : "deactive-route-m mt-3"
                }
                href="/"
              >
                Home
              </a>
              <a
                className={
                  route === "why-coaching"
                    ? "active-route-m mt-3"
                    : "deactive-route-m mt-3"
                }
                href="/why-coaching"
              >
                Why Coaching
              </a>

              <a
                className={
                  route === "our-services"
                    ? "active-route-m mt-3"
                    : "deactive-route-m mt-3"
                }
                href="/our-services"
              >
                My Services
              </a>

              <a
                className={
                  route === "why-shaveen"
                    ? "active-route-m mt-3"
                    : "deactive-route-m mt-3"
                }
                href="/why-shaveen"
              >
                Why Shaveen
              </a>

              <a
                className={
                  route === "contact-us"
                    ? "active-route-m mt-3"
                    : "deactive-route-m mt-3"
                }
                href="/contact-us"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
