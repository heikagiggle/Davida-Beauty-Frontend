/* eslint-disable react/prop-types */
import "./LinkWithIcon.css";
import { NavLink } from "react-router-dom";

//create reusable components, title, link, emoji
const LinkWithIcon = ({ title, link,  sidebar, onLinkClick }) => {
  const handleClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };
  
  return (
    <NavLink
      to={link}
      onClick={handleClick}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title} 
    </NavLink>
  );
};

export default LinkWithIcon;
