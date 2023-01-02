import { Link } from "react-router-dom";

import LogoutButton from "../logOutBtn/logOutBtn";
//לבדוק עם הערה

const NavBar = () => {
  return (
    <ul>
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
