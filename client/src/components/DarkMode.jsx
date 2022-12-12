import { BsSun, BsMoon } from "react-icons/bs";

const checkDarkMode = () => {
  if (localStorage.darkMode == 'on') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

checkDarkMode();

const switchDarkMode = value => {
  localStorage.darkMode = value;
  checkDarkMode();
};

const DarkMode = () => (
  <li className="flex border border-gray-600 rounded">
    <div
      className="p-1 text-white bg-gradient-to-br from-gray-600 to-violet-600 dark:bg-none dark:cursor-pointer"
      onClick={() => switchDarkMode('off')}
    >
      <BsSun />
    </div>
    <div
      className="p-1 text-gray-800 cursor-pointer dark:text-white dark:bg-gradient-to-br dark:from-gray-600
        dark:to-violet-800 dark:cursor-auto"
      onClick={() => switchDarkMode('on')}
    >
      <BsMoon />
    </div>
  </li>
);

export { DarkMode };
