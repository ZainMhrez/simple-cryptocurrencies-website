import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between items-center">
        <li className="mr-10">
          <NavLink to="/" className="text-lg font-medium hover:text-slate-300">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exchanges"
            className="text-lg font-medium hover:text-slate-300"
          >
            Exchanges
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
