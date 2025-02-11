import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="content">
          <h2 className="header8">404</h2>
          <h4>Sorry! page not found</h4>
          <p>
            Oops! it seem like the pageyou're trying to access doesn't exist. if
            you believe there is an issue, feel free to report it, and we will
            look into it.
          </p>
          <div className="btns">
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
