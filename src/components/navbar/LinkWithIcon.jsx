/* eslint-disable react/prop-types */
import "./LinkWithIcon.css";
import { NavLink } from "react-router-dom";

//create reusable components, title, link, emoji
const LinkWithIcon = ({ title, link,  sidebar }) => {
  return (
    <NavLink
      to={link}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title} 
    </NavLink>
  );
};

export default LinkWithIcon;
