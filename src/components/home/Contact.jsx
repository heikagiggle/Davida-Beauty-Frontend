import "./Contact.css";
import logo from "../../assets/logo.png";

const Contact = () => {
  return (
    <div className="contact">
      <div>
        <h3>Contact</h3>
        <div className="contact-left">
          <p>
            {" "}
            <span className="span">Location:</span> Odonko Plaza, 9 Nwaturuocha
            Street, Ikenegbu, Owerri 460242, Imo
          </p>
          <p>
            {" "}
            <span className="span">Phone:</span> 0705 589 6802
          </p>
          <a
            href="https://www.google.com/maps/place/Odonko+Plaza/@5.4893879,7.0413884,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x104259c114184c0f:0x87c29eadccf2f630!2sOdonko+Plaza,+9+Nwaturuocha+Street,+Ikenegbu,+Owerri+460242,+Imo!2m2!1d7.0439327!2d5.4893561!3m5!1s0x104259c114184c0f:0x87c29eadccf2f630!8m2!3d5.4893826!4d7.0439633!16s%2Fg%2F11s1s31t78?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            className="contact-map"
          >
            View in maps
          </a>
          <p>
            <span className="span">Work Hours: </span>
            Monday - Saturday,
            9am - 6pm{" "}
          </p>
        </div>
      </div>

      <div className="contact-right">
        <img src={logo} alt="logo" className="contact-logo" />
      </div>
    </div>
  );
};

export default Contact;
