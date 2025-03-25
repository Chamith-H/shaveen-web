import "../../styles/pages/Home.css";
import { HeadTitle } from "../shared/HeadTitle";
import { SectionTitle } from "../shared/SectionTitle";
import { SeeMore } from "../shared/SeeMore";

export const Home = () => {
  return (
    <div className="Home">
      <div className="Hero">
        <div className="p-4 p-md-5 hero-back">
          <div className="py-4">
            <HeadTitle
              title="COACH FOR YOU"
              description="CULTIVATING A THRIVING, RESILIENT COMMUNITY"
            />

            <p className="hero-des">
              Free guidance for building a strong mindset and achieving
              consistency for lasting results.
            </p>

            <div className="d-flex hero-cont mt-5 pt-md-5">
              <a href="">
                <i class="bi bi-whatsapp"></i>
              </a>
              <a href="" className="ms-3">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Hero-bottom px-4 px-md-5 py-4">
        <h6 className="mb-0">
          Are you ready to break free from limitations and step into your
          fullest potential?
        </h6>

        <p className="mb-0">
          Let's craft a personalized strategy to turn your vision into
          reality.&nbsp;&nbsp;
          <span>
            <a href="">Click here</a>
          </span>
          &nbsp;to check my services!
        </p>
      </div>

      {/* <div className="coaching p-4 p-md-5">
        <div className="py-4">
          <SectionTitle
            title="WHY COACHING"
            description="GAIN CLARITY, BREAK BARRIERS, ELEVATE YOUR LIFE"
          />

          <div className="row mt-3 gx-4 gy-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="coach-card-x p-4">
                <img src="/images/coach/search.gif" alt="" />
                <h6>Find clarity in the midst of chaos</h6>
                <p>
                  Life can feel overwhelming, with conflicting priorities
                  pulling you in different directions. Through coaching, we cut
                  through the noise and help you focus on what truly matters. By
                  gaining clarity, you’ll move forward with confidence and a
                  clear sense of purpose.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="coach-card-x p-4">
                <img src="/images/coach/line-chart.gif" alt="" />
                <h6>Identify and Break Negative Patterns</h6>
                <p>
                  Old habits and limiting beliefs can keep you stuck in the same
                  cycles. Coaching helps you uncover these patterns, understand
                  their root causes, and develop strategies to break free. With
                  the right mindset and tools, you’ll create new, empowering
                  habits that align with your goals.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="coach-card-x p-4">
                <img src="/images/coach/decision-making.gif" alt="" />
                <h6>Make Confident, Purpose-Driven Decisions</h6>
                <p>
                  Indecision and self-doubt can keep you from achieving your
                  full potential. Through structured coaching techniques, we’ll
                  refine your decision-making process so you can trust yourself,
                  act decisively, and align your choices with your values and
                  long-term vision.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="coach-card-x p-4">
                <img src="/images/coach/award.gif" alt="" />
                <h6>Overcome Obstacles and Stay Accountable</h6>
                <p>
                  Challenges are inevitable, but they don’t have to define your
                  journey. Coaching provides the guidance and accountability you
                  need to navigate setbacks, stay on track, and build
                  resilience. With consistent support, you’ll turn obstacles
                  into stepping stones for success.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="coach-card-x p-4">
                <img src="/images/coach/cost-per-lead.gif" alt="" />
                <h6>Lead with Confidence and Authenticity</h6>
                <p>
                  Whether in your personal life or professional career, true
                  leadership starts with self-awareness and confidence. Coaching
                  helps you unlock your leadership potential by embracing your
                  strengths, communicating with impact, and leading with
                  integrity.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-end">
              <SeeMore navigate="/why-coaching" />
            </div>
          </div>
        </div>
      </div> */}

      {/* <div className="o-services p-4 p-md-5">
        <div className="py-4">
          <SectionTitle
            title="MY SERVICES"
            description="COACHING & GROUP COACHING PROGRAMS"
          />

          <p className="mt-3">
            My coaching, rooted in personal experience and Biblical principles,
            is designed for individuals of all faith backgrounds. I help you
            develop a stronger mindset, stay consistent, and achieve sustainable
            success. My coaching, rooted in personal experience and Biblical
            principles, is designed for individuals of all faith backgrounds. I
            help you develop a stronger mindset, stay consistent, and achieve
            sustainable success.
          </p>

          <div className="row">
            <div className="col-md-6">
              <h6 className="sub-t">My coaching programs divided,</h6>
              <ul>
                <li>Faith Based Programs</li>
                <li>General Programs</li>
              </ul>
            </div>

            <div className="col-md-6 d-flex align-items-end">
              <SeeMore navigate="/our-services" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="my-life p-4 p-md-5">
        <div className="py-4">
          <SectionTitle
            title="WHY SHAVEEN"
            description="REAL GROWTH, REAL IMPACT & REAL RESULTS"
          />

          <div className="row mt-4 gx-4 gy-4">
            <div className="col-md-6">
              <div className="coach-card card-c-1 p-4">
                <div className="py-2">
                  <img src="/images/shaveen/impact.gif" alt="" />
                  <h6>My Perspective</h6>
                  <p>
                    I believe everyone deserves a life of dignity, prosperity,
                    and peace. True leadership doesn’t manipulate — it inspires
                    and empowers others to rise with integrity, compassion, and
                    a vision for a better future.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="coach-card card-c-2 p-4">
                <div className="py-2">
                  <img src="/images/shaveen/goals.gif" alt="" />
                  <h6>What I Do</h6>
                  <p>
                    I guide individuals and teams to uncover their purpose, set
                    meaningful goals, and transform vision into reality. Through
                    a structured, personalized approach, I help you gain
                    clarity, confidence, and courage.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="coach-card card-c-3">
                <div className="p-4 background-b">
                  <div className="py-2">
                    <img src="/images/shaveen/working-day.gif" alt="" />
                    <h6>How I Work</h6>
                    <ul>
                      <li>
                        I help you break self-limiting beliefs and unlock your
                        full potential.
                      </li>

                      <li>
                        I empower leaders and managers to build empathetic,
                        high-performing cultures that serve others effectively.
                      </li>

                      <li>
                        I specialize in financial freedom, leadership
                        development, and career growth to help you achieve
                        lasting success.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 pt-2">
              <SeeMore navigate="/why-shaveen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
