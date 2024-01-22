import "./Footer.css";
import logo from "../../assets/db.png";
import { FaInstagram, FaTiktok, FaFacebook, FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="footer-list">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <BsFillTelephoneFill /> 07055896802
            </li>
            <li>
              <FaHome /> Eziobodo, Futo, Owerri
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <FaInstagram className="icon" />
          <FaFacebook className="icon" />
          <FaTiktok className="icon" />
        </div>
      </div>
      <div className="bottom">
        <p>2024 heikagiggle | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
