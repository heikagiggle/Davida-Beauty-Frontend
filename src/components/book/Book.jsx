import "./Book.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { hairstylesList } from "./data";

const Book = () => {
  const navigate = useNavigate();
  return (
    <>
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
      <div className="book-container">
        <div className="book-header">
          <h1>Book an Appointment</h1>
          <p className="text">Kindly select your hairsyle below:</p>
        </div>
        <ul className="hairstyles">
          {hairstylesList.map((hairstyle, index) => (
            <li key={index}>
              <Link to={hairstyle.link}>
                <span className="links-text">{hairstyle.name}</span>
              </Link>{" "}
              {hairstyle.description}{" "}
              <span className="prices">{hairstyle.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Book;
