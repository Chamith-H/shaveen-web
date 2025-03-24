import "../../styles/pages/Contact.css";
import { HeadTitle } from "../shared/HeadTitle";
import { SeeMore } from "../shared/SeeMore";

export const Contact = () => {
  return (
    <div>
      <div className="Contact">
        <div className="cotact-back-align p-4 p-md-5">
          <div className="py-4">
            <HeadTitle
              title="CONTACT ME"
              description="IF YOU WANT TO GO SOMEWHERE, IT IS BEST TO FIND SOMEONE WHO HAS ALREADY BEEN THERE"
            />

            <p className="con-back-des">
              Making a change isn't easy, creating a consistent habit isn’t
              easy, building a fulfilling life isn’t easy – otherwise everyone
              would be doing it. Never limit YOUR future with current
              circumstances, past happenings, cultural and traditional
              practices, external pressure and other people’s opinions.
            </p>

            <div className="con-icons mt-5">
              <h5>Let's Start</h5>
              <a href="">
                <div className="service-con-x">
                  <img src="/images/services/whatsapp.png" alt="" />
                  <p className="mb-0 ms-2">Chat on WhatsApp</p>
                </div>
              </a>

              <a href="">
                <div className="service-con-x mt-3">
                  <img src="/images/services/linkedin.png" alt="" />
                  <p className="mb-0 ms-2">Connect with me on LinkedIn</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Other-say mx-4 mx-md-5 my-5">
        <div className="say-card px-5 py-5">
          <h6>What Others Say!</h6>
          <p className="mb-0 pb-4">
            Those who have worked with me describe me as a leader who inspires,
            mentors, and empowers. My approach blends strategic vision with
            empathy, ensuring that individuals and teams grow both
            professionally and personally. I am committed to fostering an
            environment of collaboration, innovation, and trust—guiding others
            toward success with wisdom, clarity, and unwavering support. Whether
            through mentorship, problem-solving, or leadership, I strive to
            create a lasting impact on the people and organizations I work with.
          </p>

          <SeeMore navigate="/why-coaching" />
        </div>
      </div>

      <div className="mx-4 mx-md-5 my-5 slogan-c">
        <h1 className="text-center">
          " Let’s embark on your journey toward growth, success, and impact! "
        </h1>
      </div>
    </div>
  );
};
