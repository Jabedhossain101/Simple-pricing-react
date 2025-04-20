import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
  {
    name: 'Home',
    id: 1,
    path: '/home',
  },
  {
    name: 'About',
    id: 2,
    path: '/about',
  },
  {
    name: 'Services',
    id: 3,
    path: '/services',
  },
  {
    name: 'contract',
    id: 4,
    path: '/contact',
  },
  {
    name: 'Profile',
    id: 5,
    path: '/profile/:userId',
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navigationData.map(route => (
    <Link key={route.id} route={route}></Link>
  ));

  return (
    <nav className="flex justify-between mx-10 mt-6">
      <span className="flex gap-4" onClick={() => setOpen(!open)}>
        {open ? <X></X> : <Menu className="md:hidden"></Menu>}
        <ul
          className={`md:hidden ${
            open ? 'top-15' : '-top-80'
          } duration-1000 rounded-2xl p-4 absolute bg-sky-500`}
        >
          {links}
        </ul>

        <h3>My Navbar</h3>
      </span>
      <ul className="md:flex hidden ">{links}</ul>

      {/* <ul className="flex">
        {navigationData.map(route => (
          <li className="mr-10">
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul> */}

      {/* <ul className="flex">
        <li className="mr-10">
          <a href="/">Home</a>
        </li>
        <li className="mr-10">
          <a href="/About">About</a>
        </li>
        <li className="mr-10">
          <a href="/Blog">Blog</a>
        </li>
      </ul> */}
      <button>Sign in</button>
    </nav>
  );
};

export default Navbar;
