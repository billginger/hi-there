import { DarkMode } from './DarkMode';
import './Navbar.css'

const MenuItems = ['Intro', 'Tech Stacks', 'Hobbies', 'Web3 Demo'];

const MenuItem = ({ name }) => (
  <li>
    <a
      href={`#${name}`}
      className="text-base font-semibold text-gray-800 dark:text-violet-50 hover:text-violet-500
        dark:hover:text-violet-400 transition duration-300"
    >
      {name}
    </a>
  </li>
);

const Navbar = () => {
  return (
    <div className="navbar bg-white dark:bg-gray-800">
      <div className="container mx-auto p-2 flex justify-between">
        <span className="logo">Hi there</span>
        <ul className="hidden md:flex flex-1 ml-32 max-w-screen-md list-none flex justify-between items-center">
          {MenuItems.map((item, index) => (
            <MenuItem key={item + index} name={item} />
          ))}
          <DarkMode />
        </ul>
      </div>
    </div>
  );
}

export { Navbar };
