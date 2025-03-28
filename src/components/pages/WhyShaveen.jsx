import "../../styles/pages/WhyShaveen.css";
import { HeadTitle } from "../shared/HeadTitle";
import { SectionTitle } from "../shared/SectionTitle";

export const WhyShaveen = () => {
  return (
    <div className="WhyShaveen">
      <div className="ShaveenHead">
        <div className="px-4 px-md-5 py-4 py-md-5 shaveenHeadBack">
          <div className="py-4">
            <HeadTitle
              title="WHY SHAVEEN"
              description="RESET. REFOCUS. RESTART."
            />

            <p className="shaveen-des mb-0">
              As many times as you need to. Just don't quit.
            </p>

            <p className="py-5"></p>
          </div>
        </div>
      </div>

      <div className="shaveen-profile px-4 px-md-5 d-md-flex justify-content-start align-items-start">
        <div className="ShaveenImg">
          <img src="/images/shaveen/shaveenPic.jpg" alt="" />
        </div>

        <div className="shaveen-des-body ms-md-5">
          <h6>I'm Shaveen </h6>
          <p>
            I guide individuals and teams to uncover their purpose, set
            meaningful goals, and transform vision into reality. Through a
            structured, personalized approach, I help you gain clarity,
            confidence, and courage.
          </p>
        </div>
      </div>

      <div className="shaveen-body px-4 px-md-5 py-5">
        <SectionTitle
          title="HOW I WORK"
          description="LEAD WITH PURPOSE, SUCCEED WITH IMPACT"
        />

        <ul>
          <li>
            I help you break self-limiting beliefs and unlock your full
            potential.
          </li>

          <li>
            I empower leaders and managers to build empathetic, high-performing
            cultures that serve others effectively.
          </li>

          <li>
            I specialize in financial freedom coaching, leadership development,
            and career growth mentoring to help you achieve lasting success.
          </li>
        </ul>
      </div>

      <div className="contact-bar px-4 px-md-5 py-4 d-flex flex-column align-items-center">
        <p className="mb-0">Let’s craft your success story together.</p>
        <a href="/contact-shaveen">Contact me today!</a>
      </div>

      <div className="Life-journey px-4 px-md-5 py-5">
        <div className="py-4">
          <SectionTitle
            title="MY LIFE JOURNEY"
            description="A JOURNEY OF GROWTH, SERVICE & LEADERSHIP"
          />

          <p className="journey-des">
            I grew up in Moratuwa, Sri Lanka, where I learned the values of hard
            work (Proverbs 18:9) and diligence (Proverbs 22:29). Coming from a
            low-income family, I made a promise at the age of eight—I would
            never allow circumstances to limit my ability to support my family
            and impact others. I built my path across social enterprise
            development, humanitarian work, software engineering, leadership,
            and coaching. Today, I integrate my calling with my passion for
            growth, serving alongside my wife, three children, and a community
            of purpose-driven individuals.
          </p>

          <h6 className="mt-4">
            My leardership philosophy is simple :
            <span>
              &nbsp; Leadership inspires, not manipulates. It creates leaders,
              not dependents.
            </span>
          </h6>

          <p className="more-journey-des">
            Be free from pride-filled opinions, for they will only harm your
            cherished unity. Don’t allow self-promotion to hide in your hearts,
            but in authentic humility put others first and view others as more
            important than yourselves. Abandon every display of selfishness.
            Possess a greater concern for what matters to others instead of your
            own interests. And consider the example that Jesus, the Anointed
            One, has set before us. Let his mindset become your motivation
            (Philippians 2:3-5 ).
          </p>
        </div>
      </div>

      <div className="Life-journey-2 px-4 px-md-5 py-5">
        <div className="py-4">
          <SectionTitle
            title="MY STRENGTHS"
            description="FROM PLANNING TO EXECUTION, EXCELLENCE IN ACTION"
          />

          <div className="row mt-2 gy-4">
            <div className="col-12 col-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/shaveen/consulting.gif" alt="" />
                </div>

                <h6>Strategic Thinking</h6>
                <p>Planning ahead and anticipating challenges.</p>
              </div>
            </div>

            <div className="col-12 col-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/shaveen/trophy.gif" alt="" />
                </div>

                <h6>Achiever Mentality</h6>
                <p>Relentless pursuit of meaningful goals.</p>
              </div>
            </div>

            <div className="col-12 col-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/shaveen/relationship.gif" alt="" />
                </div>

                <h6>Relationship Builder</h6>
                <p>Creating authentic, lasting connections.</p>
              </div>
            </div>

            <div className="col-12 col-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/shaveen/book.gif" alt="" />
                </div>

                <h6>Lifelong Learner</h6>
                <p>Constantly growing to serve better.</p>
              </div>
            </div>

            <div className="col-12 col-6 col-lg-4">
              <div className="serviceCard">
                <div className="service-img mb-2">
                  <img src="/images/shaveen/feedback.gif" alt="" />
                </div>

                <h6>Responsibility-Driven</h6>
                <p>Fully committed to every mission I take on.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
