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
          <h1>BOOK AN APPOINTMENT</h1>
          <p className="select-text">Select hairstyle to proceed.</p>
          <p className="text">
          Prices include all materials needed for the service EXCEPT hair extensions (e.g, braiding hair, attachment, kinky, passion twist, boho curls, locs, etc.), which will be charged separately.
          </p>
        </div>

        {hairstylesList.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category">
            <div className="category-header">
              <h3 className="category-title">{category.category}: </h3>
              {category.description && (
                <p className="category-description">{category.description}</p>
              )}
            </div>
            {/* <ul className="hairstyles">
              {category.items.map((hairstyle, index) => (
                <li key={index} className="hairstyle-item">
                  <Link to={hairstyle.link}>
                  {hairstyle.name.includes("My hairstyle is not on the list") ? "From " : ""}
                    <span className="links-text">{hairstyle.name}: </span>
                    <span className="links-desc">{hairstyle.desc} </span>
                  </Link>
                  <span className="prices">
                    {hairstyle.displayPricePrefix
                      ? `${hairstyle.displayPricePrefix} `
                      : ""}
                    ₦{hairstyle.price}
                  </span>
                </li>
              ))}
            </ul> */}
            <ul className="hairstyles">
              {category.items.map((hairstyle, index) => (
                <li
                  key={index}
                  className={`hairstyle-item ${
                    hairstyle.name.includes("My hairstyle is not on the list")
                      ? "not-on-list"
                      : ""
                  }`}
                  style={
                    hairstyle.name.includes("My hairstyle is not on the list")
                      ? { paddingTop: "2rem", paddingBottom: "2rem" }
                      : {}
                  }
                >
                  <Link to={hairstyle.link}>
                    <span className="links-text">{hairstyle.name}: </span>
                    <span className="links-desc">{hairstyle.desc}</span>
                  </Link>
                  <span className="prices">
                    {hairstyle.displayPricePrefix
                      ? `${hairstyle.displayPricePrefix} `
                      : ""}
                    ₦{hairstyle.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Book;
