import { NavLink, Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa";
import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";

function Navbar() {
  const { basket } = useContext(globalContext);

  return (
    <header className="bg-base-200 py-4">
      <div className="navbar-center">
        <nav className="flex gap-4 ml-[580px] mr-5">
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

        <Link to="/basket" className="indicator">
          <span className="indicator-item badge badge-secondary">
            {basket.length}
          </span>
          <button className="btn">
            <FaShopify className="text-3xl" />
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
