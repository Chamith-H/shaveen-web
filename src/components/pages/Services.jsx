import "../../styles/pages/Services.css";
import { HeadTitle } from "../shared/HeadTitle";
import { SectionTitle } from "../shared/SectionTitle";

export const Services = () => {
  return (
    <div className="OurServices">
      <div className="ServiceHeader">
        <div className="p-4 p-md-5 service-header">
          <div className="py-4">
            <HeadTitle
              title="MY SERVICES"
              description="COACHING & GROUP COACHING PROGRAMS"
            />

            <p className="serviceDes">
              My coaching, rooted in personal experience and Biblical
              principles, is designed for individuals of all faith backgrounds.
              I help you develop a stronger mindset, stay consistent, and
              achieve sustainable success. I’m certainly not a superhero, but
              I’m simply practicing a joyful way to do more of what matters and
              less of what doesn’t. Like any other relationship, the more you
              put into your coaching sessions, the more you'll benefit. Those
              who get the best results are receptive to feedback and open to
              doing the work at the end of each session.
            </p>
          </div>
        </div>
      </div>

      <div className="ServiceOpt py-4 py-md-5 px-4 px-md-5">
        <div className="py-4">
          <SectionTitle
            title="FAITH BASED PROGRAMS"
            description="GROWTH FINANCE, TIME, LIFE & PURPOSE"
          />

          <div className="row mt-2 gy-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/money-bag.gif" alt="" />
                </div>

                <h6>Financial Peace</h6>
                <p>Master money management & build generational wealth.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/time.gif" alt="" />
                </div>

                <h6>Time Management</h6>
                <p>Achieve more without burnout.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/life-skills.gif" alt="" />
                </div>

                <h6>Life Excellence</h6>
                <p>Dream planning & Goal setting.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/support.gif" alt="" />
                </div>

                <h6>Calling</h6>
                <p>Step into Faith-Driven Service.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/setting.gif" alt="" />
                </div>

                <h6>Ministry (or Church) Management</h6>
                <p>Stewarding with excellence.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/brain.gif" alt="" />
                </div>

                <h6>Bible to Brain</h6>
                <p>Professional career development with Biblical principles.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/analytics.gif" alt="" />
                </div>

                <h6>Bible to Business</h6>
                <p>Build a Purpose-Driven Enterprise.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/leadership.gif" alt="" />
                </div>

                <h6>Bible to Boldness</h6>
                <p>Develop Faith-Driven Leadership.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="div-border"></div>

      <div className="ServiceOpt py-4 py-md-5 px-4 px-md-5">
        <div className="py-4">
          <SectionTitle
            title="GENERAL PROGRAMS"
            description="FINANCIAL, TIME, CAREER & LEDERSHIP PROGRAMS"
          />

          <div className="row mt-2 gy-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/profits.gif" alt="" />
                </div>

                <h6>Financial Freedom Coaching</h6>
                <p>Gain control over finances & build lasting wealth.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/time-is-money.gif" alt="" />
                </div>

                <h6>Time Management</h6>
                <p>Maximize productivity & prevent burnout.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/path.gif" alt="" />
                </div>

                <h6>Career & Entrepreneur Coaching</h6>
                <p>Unlock potential & achieve career success.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/management.gif" alt="" />
                </div>

                <h6>
                  Organizational Culture Transformation & Leadership Development
                </h6>
                <p>Cultivate strong teams & impactful leadership.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-4 pb-md-5 px-4 px-md-5">
        <div className="service-contact-card py-5 px-4">
          <p className="serv-con-des text-center">
            Take the first step toward your breakthrough. Let's connect!
          </p>

          <a href="">
            <div className="service-con">
              <img src="/images/services/whatsapp.png" alt="" />
              <p className="mb-0 ms-2">Chat on WhatsApp</p>
            </div>
          </a>

          <a href="">
            <div className="service-con mt-3">
              <img src="/images/services/linkedin.png" alt="" />
              <p className="mb-0 ms-2">Connect with me on LinkedIn</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
