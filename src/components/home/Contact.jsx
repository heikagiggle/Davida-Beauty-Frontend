import "./Contact.css";
import logo from "../../assets/db.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="">
        <h3>Contact</h3>
        <div className="contact-left">
          <div className="left">
            <p>vidadeey@gmail.com </p>
            <p>
              Eziobodo, <br /> Federal University <br /> of Technology <br />{" "}
              Owerri
            </p>
            <p>0903 507 7476</p>
            <a href="#" className="contact-map">
              View in maps
            </a>
          </div>
          <div className="right">
            <div className="one">
              <p>
                Monday - Saturday <br />
                9am - 8pm{" "}
              </p>
            </div>
            <div className="two">
              <p>
                Sunday <br />
                1pm - 8pm{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-right">
        <img src={logo} alt="logo" className="contact-logo" />
      </div>
    </div>
  );
};

export default Contact;
