import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
      <header className="w-full h-[60px] bg-violet-300/50 px-6 p-2 flex justify-between items-center border-b-4 border-[#4B006E] shadow-lg">
          <NavLink to="/">
              <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          </NavLink>

          <nav className="flex text-lg gap-7 font-bold text-[#4B006E] tracking-wider">
              <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? "text-[#E07BE0] underline" : "hover:text-[#E07BE0]"}>
                  My Chronicle 📜
              </NavLink>
              <NavLink
                  to="/projects"
                  className={({ isActive }) => isActive ? "text-[#E07BE0] underline" : "hover:text-[#E07BE0]"}>
                  My Deeds ⚔️
              </NavLink>
          </nav>
      </header>
  );
};

export default Navbar;
