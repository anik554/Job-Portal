import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user,signOutUser } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addJob"}>Add job</NavLink>
      </li>
      <li>
        <NavLink to={"/appliedJobs"}>Applied Jobs</NavLink>
      </li>
    </>
  );

  const handleSignOut=()=>{
    signOutUser().then(res =>{
      navigate("/")
      console.log("loggout", res)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Job Portal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end ">
          {user && user?.email ? (
            <>
              <button className="btn btn-sm">
                <Link onClick={handleSignOut} to="/">Sign out</Link>
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-sm">
                <Link to="/register">Register</Link>
              </button>
              &ensp;
              <button className="btn btn-sm">
                {" "}
                <Link to="/signIn">Sign in</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
