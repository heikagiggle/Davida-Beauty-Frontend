import { useState } from "react";
import "./Footer.css";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
// import { BsFillTelephoneFill,  FaHome } from "react-icons/bs";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email){
      setMessage("Please enter your email address");
      return;
    }
    setLoading(true);
    setMessage('')

    try {
      const emailCollection = collection(db, "emails");
      await addDoc(emailCollection, { email });
      setMessage("Subscription successful!");
      setEmail("");
    } catch (error) {
      setMessage("Failed to subscribe. Please try again later.");
    }finally{
      setLoading(false);
    }
   
  };

  return (
    <footer className="footer-footer">
      <div className="footer">
        <div className="footer-logo">
          <svg
            width="20"
            height="20"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0002 35.6668C28.2049 35.6668 35.6668 28.2049 35.6668 19.0002C35.6668 9.79542 28.2049 2.3335 19.0002 2.3335C9.79542 2.3335 2.3335 9.79542 2.3335 19.0002C2.3335 28.2049 9.79542 35.6668 19.0002 35.6668Z"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.6667 13.6819C24.9183 12.1569 22.6725 9.48944 18.1808 9.87027C13.6892 10.2519 10.32 14.4453 10.695 19.7811C11.07 25.1178 15.1867 28.1669 18.9292 28.1669C23.4208 28.1669 25.6667 24.5078 25.6667 24.5078"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Davida Beauty</p>
        </div>

        <div className="second-div">
          <h3>Subscribe</h3>
          <p>Sign up to our mailing list</p>
          <div className="input">
            <form action="" onSubmit={handleSubmit}>
              <input
                type="email"
                className="input-box"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="footerbtn" disabled={loading}>
                {loading ? "..." : "Ok"}
              </button>
            </form>
            {message && <p className="message">{message}</p>}
          </div>
        </div>
        <div className="footer-links">
          <a
            href="https://www.instagram.com/davida_beauty?igsh=emh2cTdzOWo0a2Z6&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://www.facebook.com/share/19iDvgYSCr/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </a>
          <a
            href="https://www.tiktok.com/@davida_beauty?_t=8ppSnnXmny9&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="icon" />
          </a>
        </div>
      </div>
      <div className="bottom">
        <p>2024 davidabeauty | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
