import React, { useRef } from 'react';
import useSmoothScroll from 'react-smooth-scroll-hook';
import { DarkMode } from './DarkMode';
import './Navbar.css';

const MenuItems = ['Intro', 'Skills', 'Hobbies', 'Web3'];

const MenuItem = ({ name }) => {
  const ref = useRef(document.documentElement);
  const { scrollTo } = useSmoothScroll({
    ref,
    speed: 60,
  });

  return (
    <li>
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          scrollTo(`#${name}`, -60);
        }}
        className="font-semibold text-gray-800 dark:text-violet-50 hover:text-violet-500 dark:hover:text-violet-400
          transition duration-300"
      >
        {name == 'Web3' ? 'Web3 Demo' : name}
      </a>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full bg-white dark:bg-gray-800 shadow-[0_0_8px_0_rgba(0,0,0,0.12)]">
      <div className="container mx-auto p-2 flex justify-between">
        <h1 className="logo">Hi there</h1>
        <ul className="hidden md:flex flex-1 ml-32 max-w-screen-md list-none flex justify-between items-center">
          {MenuItems.map((item, index) => (
            <MenuItem key={item + index} name={item} />
          ))}
          <DarkMode />
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
