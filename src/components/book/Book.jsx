import "./Book.css";
import { CalendlyEmbed } from "./calendly-wrapper";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const navigate = useNavigate();
  return (
    <div className="book">
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
        <h1>Book an Appointment</h1>
        <p className="text">
          We’re excited to meet you! Please choose a convenient time to schedule
          your appointment. It is quick and easy.
        </p>
      </div>
      <div className="mt-5 xl:-mt-[30px]">
        <CalendlyEmbed url="https://calendly.com/davidabeauty-ng" />
      </div>
    </div>
  );
};

export default Book;
