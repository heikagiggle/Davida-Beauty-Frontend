/* eslint-disable react/prop-types */
import "./Why.css";

const why = [
  {
    id: "1",
    title: "Expert Stylists",
    text: "Our highly skilled and experienced stylists are dedicated to bringing your vision to life with precision and flair.",
  },
  {
    id: "2",
    title: "Flexible Appointments",
    text: "We understand your busy schedule, which is why we offer flexible appointments to accommodate your lifestyle.",
  },
  {
    id: "3",
    title: "Exceptional Service ",
    text: "Experience unparalleled support and personalized attention from the moment you step into our salon.",
  },
  {
    id: "4",
    title: "Quality Products",
    text: "We use only the finest products and materials to ensure the best results and care for your hair and skin.",
  },
];

const Why = ({ title, image }) => {
  return (
    <section className="why_section">
      <div className="align_center">
        <img src={image} alt="" className="why_image" />
      </div>
      <div className="align_center ">
        <h2 className="hero_title">{title}</h2>

        <div className="why_grid">
          {why.map((item) => (
            <div key={item.id} className="why_item">
              <h3 className="why_title">{item.title}</h3>
              <p className="why_text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
