import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { WhyCoaching } from "../pages/WhyCoaching";
import { Services } from "../pages/Services";
import { WhyShaveen } from "../pages/WhyShaveen";
import { Contact } from "../pages/Contact";

export const Routings = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-coaching" element={<WhyCoaching />} />
        <Route path="/shaveen-services" element={<Services />} />
        <Route path="/why-shaveen" element={<WhyShaveen />} />
        <Route path="/contact-shaveen" element={<Contact />} />
      </Routes>
    </Router>
  );
};
