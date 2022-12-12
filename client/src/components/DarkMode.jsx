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
  <li className="flex border border-gray-600 rounded text-[13px]">
    <div
      className="p-1 text-white bg-gradient-to-br from-violet-600 to-gray-600 dark:bg-none dark:cursor-pointer"
      onClick={() => switchDarkMode('off')}
    >
      <BsSun />
    </div>
    <div
      className="p-1 text-gray-800 cursor-pointer dark:text-white dark:bg-gradient-to-br dark:from-gray-700
        dark:to-violet-900 dark:cursor-auto"
      onClick={() => switchDarkMode('on')}
    >
      <BsMoon />
    </div>
  </li>
);

export { DarkMode };
