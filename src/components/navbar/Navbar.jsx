import "./Navbar.css";
import logo from "../../assets/logo.png";
import LinkWithIcon from "./LinkWithIcon";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import circle from '../../assets/circle.png'
import booking from '../../assets/booking.png'
import box from '../../assets/box.png'
import login from '../../assets/login.png'
import signup from '../../assets/user.png'
import orders from '../../assets/test.png'
import logout from '../../assets/power.png'

const Navbar = () => {
  const [search, setSearch] = useState("");
  const user = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/products?search=${search.trim()}`);
    }
  };

  return (
    <nav className="align_center navbar">
      <div className="align_center ">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <form className="navbar_form" onSubmit={handleSubmit}>
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

      <div className=" align_center navbar_links">
        <LinkWithIcon title="Home" link="/" emoji={circle} />
        <LinkWithIcon title="Book" link="/book" emoji={booking} />
        <LinkWithIcon title="Products" link="/products" emoji={box} />
        {/* if user is not available loggedin, then display */}
        {!user && (
          <>
            {" "}
            <LinkWithIcon title="Login" link="/login" emoji={login} />
            <LinkWithIcon title="SignUp" link="/signup" emoji={signup} />
          </>
        )}
        {/* if user is available show this links  */}
        {user && (
          <>
            <LinkWithIcon title="Orders" link="myorders" emoji={orders} />
            <LinkWithIcon title="Logout" link="/logout" emoji={logout} />
            <NavLink to="/cart" className="align_center">
              Cart <p className="align_center cart_counts">{cart.length}</p>
            </NavLink>
          </>
        )}
      </div>
      <div className="app__navbar-smallscreen">
        <AiOutlineAlignRight
          fontSize={30}
          className="overlay__open"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <AiOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <LinkWithIcon
              title="Home ➣"
              link="/"
              onLinkClick={handleLinkClick}
            />
            <LinkWithIcon
              title="Book Now ➣"
              link="/book"
              onLinkClick={handleLinkClick}
            />
            <LinkWithIcon
              title="Products ➣"
              link="/products"
              onLinkClick={handleLinkClick}
            />
            {/* if user is not available loggedin, then display */}
            {!user && (
              <>
                {" "}
                <LinkWithIcon
                  title="LogIn ➣"
                  link="/login"
                  onLinkClick={handleLinkClick}
                />
                <LinkWithIcon
                  title="SignUp ➣"
                  link="/signup"
                  onLinkClick={handleLinkClick}
                />
              </>
            )}
            {/* if user is available show this links  */}
            {user && (
              <>
                <LinkWithIcon
                  title="My Orders ➣"
                  link="myorders"
                  onLinkClick={handleLinkClick}
                />
                <LinkWithIcon
                  title="Logout ➣"
                  link="/logout"
                  onLinkClick={handleLinkClick}
                />
                <NavLink
                  to="/cart"
                  className="align_center"
                  onClick={() => setToggleMenu(false)}
                >
                  Cart <p className="align_center cart_counts">{cart.length}</p>
                </NavLink>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
