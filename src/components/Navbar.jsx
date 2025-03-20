import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
      <header className='header bg-gray-900 p-4 flex justify-between items-center border-b-4 border-yellow-600 shadow-lg'>
          <NavLink to='/'>
              <img src={logo} alt='logo' className='w-16 h-16 object-contain' />
          </NavLink>

          <nav className='flex text-lg gap-7 font-bold text-yellow-400 tracking-wider'>
              <NavLink to='/about' className={({ isActive }) => isActive ? "text-yellow-500 underline" : "hover:text-yellow-300"}>
                  The Chronicle 📜
              </NavLink>
              <NavLink to='/projects' className={({ isActive }) => isActive ? "text-yellow-500 underline" : "hover:text-yellow-300"}>
                  Grand Deeds ⚔️
              </NavLink>
          </nav>
      </header>
  );
};

export default Navbar;
