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
              description="1:1 COACHING & GROUP COACHING PROGRAMS"
            />

            {/* <p className="serviceDes">
              My coaching, rooted in personal experience and Biblical
              principles, is designed for individuals of all faith backgrounds.
              I help you develop a stronger mindset, stay consistent, and
              achieve sustainable success. I’m certainly not a superhero, but
              I’m simply practicing a joyful way to do more of what matters and
              less of what doesn’t. Like any other relationship, the more you
              put into your coaching sessions, the more you'll benefit. Those
              who get the best results are receptive to feedback and open to
              doing the work at the end of each session.
            </p> */}
          </div>
        </div>
      </div>

      <div className="py-4 px-4 px-md-5 service-base-intro">
        <h6 className="mb-0">
          What's calling your attention right now? &nbsp;In our 1:1 coaching,
          what area would you most like to focus on?
        </h6>
        <p className="mb-0">
          To make the most of our time, I'd love to hear what area you'd most
          like to focus on. Whether it’s personal growth, career goals,
          financial goals or anything else, let’s make it a session that’s
          tailored just for you.
        </p>

        <div className="mt-3 wtsapp-a">
          <a
            href="https://wa.me/94777428427?text=Hi%20Shaveen%20I%20am%20ready%20to%20embark%20on%20a%20transformative%20journey.%20How%20can%20you%20guide%20me"
            target="blank"
          >
            <img
              className="wtsappSup"
              src="/images/services/wtsappSup.png"
              alt=""
            />
            <div className="wtsapp-body py-1 pe-4 ps-4">
              <p className="mb-0">Contact me via WhatsApp</p>
              <h6 className="mb-0">+94 77 742 8427</h6>
            </div>
          </a>
        </div>
      </div>

      <div className="ServiceOpt py-4 py-md-5 px-4 px-md-5">
        <div className="py-4">
          <SectionTitle title="" description="FAITH BASED PROGRAMS" />

          <div className="row mt-2 gy-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/money-bag.gif" alt="" />
                </div>

                <h6>Financial Stewardship</h6>
                <p>
                  Cultivate financial peace and build generational wealth
                  through biblical principles.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/time.gif" alt="" />
                </div>

                <h6>Effective Time Management</h6>
                <p>
                  Maximize productivity and minimize burnout with faith-centered
                  strategies.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/life-skills.gif" alt="" />
                </div>

                <h6>Purposeful Life Planning</h6>
                <p>
                  Align your dreams and goals with God's vision for your life.{" "}
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/support.gif" alt="" />
                </div>

                <h6>Faith-Driven Calling</h6>
                <p>Discover and step into your divinely appointed mission. </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/setting.gif" alt="" />
                </div>

                <h6>Ministry Excellence</h6>
                <p>
                  Steward your ministry or church with integrity and
                  effectiveness.{" "}
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/coach/award.gif" alt="" />
                </div>

                <h6>Leadership Support</h6>
                <p>
                  Receive dedicated counseling and coaching for ministry leaders
                  and men.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/brain.gif" alt="" />
                </div>

                <h6>Bible to Brain</h6>
                <p>
                  Integrate biblical principles into your career path for
                  meaningful advancement.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/analytics.gif" alt="" />
                </div>

                <h6>Bible to Business</h6>
                <p>Build a business that honors God and serves others.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/leadership.gif" alt="" />
                </div>

                <h6>Bible to Boldness</h6>
                <p>Develop bold, faith-driven leadership skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="div-border"></div>

      <div className="ServiceOpt py-4 py-md-5 px-4 px-md-5">
        <div className="py-4">
          <SectionTitle title="" description="GENERAL PROGRAMS" />

          <div className="row mt-2 gy-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/profits.gif" alt="" />
                </div>

                <h6>Achieve Financial Freedom</h6>
                <p>Develop strategies for lasting financial security.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/time-is-money.gif" alt="" />
                </div>

                <h6>Master Time Management</h6>
                <p>Increase productivity and reduce stress.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/path.gif" alt="" />
                </div>

                <h6>Advance Your Career & Entrepreneurial Ventures</h6>
                <p>Gain guidance for professional success.</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/services/management.gif" alt="" />
                </div>

                <h6>
                  Cultivate Effective Leadership & Transform Organizational
                  Culture
                </h6>
                <p>Foster a positive and productive work environment.</p>
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

          <a
            href="https://wa.me/94777428427?text=Hi%20Shaveen%20I%20am%20ready%20to%20embark%20on%20a%20transformative%20journey.%20How%20can%20you%20guide%20me"
            target="blank"
          >
            <div className="service-con">
              <img src="/images/services/whatsapp.png" alt="" />
              <p className="mb-0 ms-2">Chat on WhatsApp</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/shaveenfernando/" target="blank">
            <div className="service-con mt-3">
              <img src="/images/services/linkedin.png" alt="" />
              <p className="mb-0 ms-2">Connect with me on LinkedIn</p>
            </div>
          </a>
        </div>
      </div>

      <div className="px-4 px-md-5 py-4 mb-4">
        <div className="py-4 service-des-bottom">
          <SectionTitle
            title="FAQ: WHAT DRIVES YOU TO OFFER FREE COACHING?"
            description="IT'S SIMPLY A JOY TO GIVE BACK AND WITNESS OTHERS SUCCEED."
          />

          <p>
            My professional career provides me with financial stability,
            allowing me to cover all my expenses comfortably. Therefore, I'm
            fortunate enough to offer my guidance freely. I find immense joy in
            sharing my time, knowledge and experience, believing that giving is
            far more rewarding than receiving. This is simply my way of passing
            on the blessings I've received.
          </p>
        </div>
      </div>
    </div>
  );
};
