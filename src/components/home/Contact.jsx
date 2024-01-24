import "./Contact.css";
import logo from "../../assets/db.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="">
        <h3>Contact</h3>
        <div className="contact-left">
          <div className="left">
            <p>
              Eziobodo, <br /> Federal University <br /> of Technology <br />{" "}
              Owerri
            </p>
            <p>0903 507 7476</p>
            <a href="https://www.google.com/maps/search/eziobodo+futo/@5.382381,6.9856462,15z/data=!3m1!4b1?entry=ttu" className="contact-map">
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
