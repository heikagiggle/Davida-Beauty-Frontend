import "./Book.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const hairstylesList = [
  {
    name: "Hailee Steinfeld",
    description:
      "as Violet, a Zaunite orphan, later Piltover enforcer, and Jinx sister",
    price: "40,000",
    link: "/book/calendly",
  },
  {
    name: "Kevin Alejandro",
    description:
      "as Jayce Talis, a scientist, inventor, and eventual Councilor from Piltover, responsible for the creation of Hextech",
    price: "40,000",
    link: "/book/calendly",
  },
  {
    name: "Katie Leung",
    description:
      "as Caitlyn Kiramman, a Piltover enforcer, daughter of Councilor Cassandra Kiramman, and former lab assistant to Jayce Talis, who becomes a love interest",
    price: "40,000",
    link: "/book/calendly",
  },
  {
    name: "Toks Olagundoye",
    description:
      "as Mel Medarda, a council member who takes an interest in Jayce and experiments, later begins a relationship with him",
    price: "40,000",
    link: "/book/calendly",
  },
  {
    name: "Harry Lloyd",
    description:
      "as Viktor, a disabled partner and former assistant to Councilor Cecil B.",
    price: "40,000",
    link: "/book/calendly",
  },
  {
    name: "Jason Spisak",
    description:
      "as Silco, a crime lord in Zaun, second adoptive father, and leader of the chem-barons",
    price: "40,000",
    link: "/book/calendly",
  },
  {
    name: "Reed Shannon",
    description:
      "as Ekko, a childhood friend of Vi and Jinx, and the leader of the revolutionary Zaunite group, the Firelights",
    price: "40,000",
    link: "/book/calendly",
  },
];

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
