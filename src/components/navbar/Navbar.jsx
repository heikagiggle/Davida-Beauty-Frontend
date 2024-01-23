import "./Navbar.css";
import db from "../../assets/db.png";
// import rocket from "../../assets/rocket.png";
// import star from "../../assets/glowing-star.png";
// import idButton from "../../assets/id-button.png";
// import memo from "../../assets/memo.png";
// import order from "../../assets/package.png";
// import lock from "../../assets/locked.png";
import LinkWithIcon from "./LinkWithIcon";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const user = useContext(UserContext);
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/products?search=${search.trim()}`);
    }
  };

  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <div className="logo">
          <img src={db} alt="" />
        </div>

        <form className=" navbar_form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="search_button">
            Search
          </button>
        </form>
      </div>

      <div className="align_center navbar_links">
        <LinkWithIcon title="Home" link="/" />
        <LinkWithIcon title="Book Now" link="/book" />
        <LinkWithIcon title="Products" link="/products" />
        {/* if user is not available loggedin, then display */}
        {!user && (
          <>
            {" "}
            <LinkWithIcon title="LogIn" link="/login" />
            <LinkWithIcon title="SignUp" link="/signup" />
          </>
        )}
        {/* if user is available show this links  */}
        {user && (
          <>
            <LinkWithIcon title="My Orders" link="myorders" />
            <LinkWithIcon title="Logout" link="/logout" />
            <NavLink to="/cart" className="align_center">
              Cart <p className="align_center cart_counts">{cart.length}</p>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
