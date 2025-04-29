import { NavLink } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

function Navitem() {
  const LinkActiveState = ({ isActive }) =>
    isActive
      ? "text-teal-800 bg-teal-200  hover:bg-teal-100 hover:text-teal-950 rounded-md px-3 py-2"
      : "text-white  hover:bg-teal-100 custom-hover-text rounded-md px-3 py-2";

  return (
    <>
      <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
        {/* <!-- Logo --> */}
        <NavLink className="flex flex-shrink-0  items-center mr-4" to="/">
          <img className="h-10 w-auto" src={logo} alt="React Jobs" />
          <span className="hidden md:block text-white text-2xl font-bold ml-2">
            React Jobs
          </span>
        </NavLink>
        <div className="md:ml-auto">
          <div className="flex space-x-2">
            <NavLink to="/" className={LinkActiveState}>
              Home
            </NavLink>
            <NavLink to="/jobs" className={LinkActiveState}>
              Jobs
            </NavLink>
            <NavLink to="/add-job" className={LinkActiveState}>
              Add Job
            </NavLink>
            <NavLink to="/login" className={LinkActiveState} id="login">
              Login <FaSignInAlt className="inline" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navitem;
