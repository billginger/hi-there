import { useEffect, useState } from 'react';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(localStorage.darkMode);
  const switchDarkMode = () => {
    if (!darkMode) {
      localStorage.darkMode = true;
      setDarkMode(true);
    } else {
      localStorage.removeItem('darkMode');
      setDarkMode(false);
    }
  };

  const checkDarkMode = () => {
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  useEffect(() => {
    checkDarkMode();
  }, [darkMode]);

  return (
    <div onClick={switchDarkMode}>Dark Mode</div>
  );
}

export { DarkMode };
