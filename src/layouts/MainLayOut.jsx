import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayOut = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayOut;
