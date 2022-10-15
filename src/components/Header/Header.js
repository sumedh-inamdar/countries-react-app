import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function getInitialTheme() {
  if (localStorage.theme) return localStorage.theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function Header() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (theme === "light") document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <header className='h-16 bg-white dark:bg-dark-blue'>
      <div className='max-w-6xl flex h-full justify-between items-center mx-auto my-auto px-6'>
        <Link to='/'>
          <h1 className='font-extrabold'>Where in the world?</h1>
        </Link>
        <button className='flex items-center space-x-2' onClick={toggleTheme}>
          <FontAwesomeIcon icon={faMoon} />
          <span className='text-sm'>
            {theme === "light" ? "Light" : "Dark"} Mode
          </span>
        </button>
      </div>
    </header>
  );
}
