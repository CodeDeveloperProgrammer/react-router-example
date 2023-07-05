import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        {/* <Link /> no tiene la clase active */}
        <NavLink
          className="btn btn-outline-primary"
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink
          className="btn btn-outline-primary"
          to="/nosotros"
        >
          Nosotros
        </NavLink>
        <NavLink
          className="btn btn-outline-primary"
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className="btn btn-outline-primary"
          to="/contacto"
        >
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
