/* eslint-disable react/prop-types */
import "./LinkWithIcon.css";
import { NavLink } from "react-router-dom";

//create reusable components, title, link, emoji
const LinkWithIcon = ({ title, link, emoji, sidebar }) => {
  return (
    <NavLink
      to={link}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title} <img src={emoji} alt="rocket" className="link_emoji" />
    </NavLink>
  );
};

export default LinkWithIcon;
