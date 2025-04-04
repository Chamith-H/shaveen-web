import "../../styles/pages/WhyCoaching.css";
import { HeadTitle } from "../shared/HeadTitle";
import { SectionTitle } from "../shared/SectionTitle";

export const WhyCoaching = () => {
  return (
    <div className="WhyCoaching">
      <div className="coach-header-main">
        <div className="p-4 p-md-5 coach-header">
          <div className="py-4">
            <HeadTitle
              title="WHY COACHING?"
              description="GAIN CLARITY, BREAK BARRIERS & ELEVATE YOUR LIFE"
            />

            <h6 className="more-des-coach">
              Coaching isn’t just about motivation — it’s about transformation.
            </h6>

            <p className="info-coach-tag mt-5">I help you,</p>

            <ol>
              <li>Find clarity in the midst of chaos</li>
              <li>Identify and break negative patterns</li>
              <li>Make confident, purpose-driven decisions</li>
              <li>Overcome obstacles and stay accountable</li>
              <li>Lead with confidence and authenticity</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="coach-cont pt-4 pt-md-5 px-4 px-md-5">
        <div className="pt-4">
          <div className="row">
            <div className="col-lg-6 pb-5">
              <SectionTitle
                title="NEED A COACH?"
                description="12 SIGNS YOU MIGHT NEED A COACH"
              />

              <ol>
                <li>You feel stuck in your personal or professional life.</li>
                <li>You lack clarity about your goals or next steps.</li>
                <li>Negative habits or patterns are holding you back.</li>
                <li>You struggle to balance work, life, and commitment.</li>
                <li>You feel overwhelmed when making decisions.</li>
                <li>You frequently doubt yourself and your abilities.</li>
                <li>
                  Communication challenges hinder your relationships or career.
                </li>
                <li>
                  You’re in a leadership role but feel unprepared or
                  ineffective.
                </li>
                <li>Chronic stress is affecting your well-being.</li>
                <li>
                  You’re navigating a significant life or career transition.
                </li>
                <li>You want growth but don’t know where to start.</li>
                <li>You struggle with self-discipline and accountability.</li>
              </ol>

              <div className="mt-5 coach-con d-flex flex-column align-items-center d-md-block">
                <h6 className="mb-0 text-center text-md-start">
                  If any of these resonate with you, let’s start your
                  transformation today!{" "}
                </h6>

                <a href="/contact-shaveen">
                  <button className="contact-me-button px-3 py-2 mt-2">
                    Contact me to get started
                  </button>
                </a>
              </div>
            </div>

            <div className="col-lg-6 coach-back-img">
              <img src="/images/coach/coachbody.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 px-md-5 py-4 py-md-5  coach-new-serv">
        <div className="py-4 service-des-bottom">
          <SectionTitle
            title="FAQ: WHAT DRIVES YOU TO OFFER FREE COACHING?"
            description="IT'S SIMPLY A JOY TO GIVE BACK AND WITNESS OTHERS SUCCEED."
          />

          <p className="mb-3">
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
