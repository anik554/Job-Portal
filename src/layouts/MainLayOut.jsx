import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayOut = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayOut;
