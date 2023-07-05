import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
  return (
    <div className="container">
      <Outlet></Outlet>
      <footer className="footer my-3">
        <div className="container">By Ramón</div>
      </footer>
    </div>
  );
};

export default LayoutPublic;
