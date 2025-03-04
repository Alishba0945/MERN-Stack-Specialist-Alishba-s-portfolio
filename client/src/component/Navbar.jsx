import { NavLink } from "react-router-dom";
import "./Navbar.css";
//benifit of navlink if user enter anything in the website then page no refresh

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container ">
          <div className="signature-container">
            <span className="signature">MERN specialization</span>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>

              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
