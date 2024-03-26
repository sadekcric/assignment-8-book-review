import { NavLink } from "react-router-dom";

const Nav = () => {
  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg py-2 px-6 font-semibold mr-2 hover:bg-[#23BE0A] hover:bg-opacity-40 hover:text-black"
              : "rounded-lg py-2 px-6 font-semibold mr-2 border-2 border-transparent"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/list"
          className={({ isActive }) =>
            isActive
              ? "border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg py-2 px-6 font-semibold mr-2 hover:bg-[#23BE0A] hover:bg-opacity-40 hover:text-black"
              : "rounded-lg py-2 px-6 font-semibold mr-2 border-2 border-transparent"
          }
        >
          Listed Books
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/pages"
          className={({ isActive }) =>
            isActive
              ? "border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg py-2 px-6 font-semibold mr-2 hover:bg-[#23BE0A] hover:bg-opacity-40 hover:text-black"
              : "rounded-lg py-2 px-6 font-semibold mr-2 border-2 border-transparent"
          }
        >
          Pages
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg py-2 px-6 font-semibold mr-2 hover:bg-[#23BE0A] hover:bg-opacity-40 hover:text-black"
              : "rounded-lg py-2 px-6 font-semibold mr-2 border-2 border-transparent"
          }
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg py-2 px-6 font-semibold mr-2 hover:bg-[#23BE0A] hover:bg-opacity-40 hover:text-black"
              : "rounded-lg py-2 px-6 font-semibold mr-2 border-2 border-transparent"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="space-y-4 bg-gray-100  menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
            {link}
            <div className=" lg:hidden">
              <a className="btn bg-[#23BE0A] text-white mr-3">Sign In</a>
              <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
          </ul>
        </div>

        <h1 className=" text-xl md:text-2xl font-bold hidden lg:block">Book Vibe</h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">{link}</ul>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:block">
          <a className="btn bg-[#23BE0A] text-white mr-3">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
        </div>
        <h1 className=" text-xl md:text-2xl font-bold lg:hidden">Book Vibe</h1>
      </div>
    </div>
  );
};

export default Nav;
