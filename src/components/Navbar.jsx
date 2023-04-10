import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12 bg-blue-900 text-white">
      <div className="flex items-center gap-x-10">
        <NavLink to="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="text-2xl font-semibold whitespace-nowrap">
            CRUD
          </span>
        </NavLink>

        <div className="hidden md:flex md:ml-4">
          <NavLink className="ml-4" to="/">
            Home
          </NavLink>
          <NavLink className="ml-4" to="/read">
            All Records
          </NavLink>
        </div>
      </div>

      <div className="md:hidden">
        <GiHamburgerMenu
          className="text-3xl"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      {collapsed && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-900 px-6 py-4">
          <NavLink
            className="block mb-4 font-semibold"
            to="/"
            onClick={() => setCollapsed(!collapsed)}
          >
            Home
          </NavLink>
          <NavLink
            className="block font-semibold"
            to="/read"
            onClick={() => setCollapsed(!collapsed)}
          >
            All Records
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
