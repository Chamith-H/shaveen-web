import "../../styles/pages/WhyCoaching.css";
import { HeadTitle } from "../shared/HeadTitle";
import { SectionTitle } from "../shared/SectionTitle";

export const WhyCoaching = () => {
  return (
    <div className="WhyCoaching">
      <div className="coach-header-main">
        <div className="p-5 coach-header">
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
            <div className="col-6 pb-5">
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

              <div className="mt-5 coach-con">
                <h6 className="mb-0">
                  If any of these resonate with you, let’s start your
                  transformation today!{" "}
                </h6>

                <a href="">Contact me to get started.</a>
              </div>
            </div>

            <div className="col-6 coach-back-img">
              <img src="/images/coach/coachbody.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
