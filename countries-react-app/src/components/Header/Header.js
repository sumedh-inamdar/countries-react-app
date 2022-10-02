import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='h-16 bg-dark-blue px-6'>
      <div className='max-w-6xl flex h-full justify-between items-center mx-auto my-auto'>
        <Link to='/'>
          <h1 className='font-extrabold'>
            Where in the world?
          </h1>
        </Link>
        <div className='flex items-center space-x-2'>
          <FontAwesomeIcon icon={faMoon} />
          <div className='text-sm'>Dark Mode</div>
        </div>
      </div>
    </header>
  );
}
