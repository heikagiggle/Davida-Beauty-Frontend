import "./Calendly.css";
import { CalendlyEmbed } from "./calendly-wrapper";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { WhatsApp } from "../../../assets/icons/whatsapp-icon";
import { CaretRightIcon } from "../../../assets/icons/caret-right";
const CalendlyContainer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top of the page when the component is loaded
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="calendly">
      <div className="back-button" onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
          style={{ width: "24px", height: "24px", marginRight: "2px" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <span>Back</span>
      </div>

      <div className="book-header">
        <p className="calendly-text">
          We’re excited to meet you! Kindly choose a convenient time to schedule
          your appointment. It is quick and easy.
        </p>
      </div>

      <div>
        <CalendlyEmbed url="https://calendly.com/davidabeauty-ng?hide_landing_page_details=1&hide_gdpr_banner=1" />
      </div>

      <div className="whatsapp-container">
        <a
          href="https://wa.me/message/DPGCL43UFNF4N1"
          target="_blank"
          rel="noreferrer"
          className="whatsapp"
        >
          <WhatsApp />
          <p>Whatsapp Link</p>
          <CaretRightIcon />
        </a>
        <div className="cancellation-policy">
          <h2>Cancellation Policy</h2>
          <p>
            Please note that you can only cancel or reschedule 24 hours before
            your appointment time. Failure to do this will incur a cost of your
            deposit fee. Thank you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalendlyContainer;
