import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-base-200">
      <div className="navbar-center">
        <nav className="flex gap-4 ml-[580px]">
          <NavLink className="px-2.5 py-3" to={"/"}>
            Home
          </NavLink>
          <NavLink className="px-2.5 py-3" to={"/about"}>
            About
          </NavLink>
          <NavLink className="px-2.5 py-3" to={"/contact"}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
