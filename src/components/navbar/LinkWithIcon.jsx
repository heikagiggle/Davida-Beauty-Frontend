/* eslint-disable react/prop-types */
import "./LinkWithIcon.css";
import { NavLink } from "react-router-dom";

//create reusable components, title, link, emoji
const LinkWithIcon = ({ title, link,  sidebar, onLinkClick, emoji }) => {
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
      {title} <img src={emoji} alt='' className='link_emoji' />
    </NavLink>
  );
};

export default LinkWithIcon;
