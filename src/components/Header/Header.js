import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='h-16 bg-dark-blue'>
      <div className='max-w-6xl flex h-full justify-between items-center mx-auto my-auto px-6'>
        <Link to='/'>
          <h1 className='font-extrabold'>
            Where in the world?
          </h1>
        </Link>
        <span className='flex items-center space-x-2'>
          <FontAwesomeIcon icon={faMoon} />
          <span className='text-sm'>Dark Mode</span>
        </span>
      </div>
    </header>
  );
}
