import React, {useEffect, useState} from 'react';
import Toggle from './Toggle';

const DarkModeToggle = () => {

  let isDarkMode = false;
  if (typeof window !== 'undefined') {
    isDarkMode = localStorage.getItem('theme') === 'dark' || false;
  }
  let [darkMode, setDarkMode] = useState(isDarkMode);

  useEffect(() => {
    let isMounted = true;
    setDarkMode(localStorage.getItem('theme') === 'dark')
    return () => { isMounted = false };
  }, [darkMode])

  const setDMode = (value) => {
    setDarkMode(value)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', value ? 'dark' : 'light');
    }
    value ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }

  return (
    <div className="flex justify-center sm:justify-start">
      <button type="button" className="h-2gut w-2gut focus:outline-none" onClick={() => setDMode(false)}>
        ☀
      </button>
      <Toggle checked={darkMode} onChange={() => setDMode(!darkMode)} />
      <button type="button" className="h-2gut w-2gut focus:outline-none" onClick={() => setDMode(true)}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;