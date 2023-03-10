import { Link } from "react-router-dom";

import LogoutButton from "../logOutBtn/logOutBtn";

import "./style.css";

const NavBar = () => {
  return (
    <ul className="navBar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/ContactUs">ContactUs</Link>
      </li>
      <li>
        <Link to="/Products">Products</Link>
      </li>
      <li>
        <LogoutButton></LogoutButton>
      </li>
    </ul>
  );
};

export default NavBar;

/*
variant="pills"
className="flex-column"

className="justify-content-center"

*/
