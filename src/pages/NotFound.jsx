import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <h1>404 NOT FOUND</h1>
      <Link className="btn btn-outline-primary bg-dark" to="/">
        Inicio
      </Link>
    </div>
  );
};

export default NotFound;
