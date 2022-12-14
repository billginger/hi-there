import { DarkMode } from './DarkMode';
import './Navbar.css';

const MenuItems = ['Intro', 'Skills', 'Hobbies', 'Web3 Demo'];

const MenuItem = ({ name }) => (
  <li>
    <a
      href={`#${name}`}
      className="font-semibold text-gray-800 dark:text-violet-50 hover:text-violet-500 dark:hover:text-violet-400
        transition duration-300"
    >
      {name}
    </a>
  </li>
);

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
