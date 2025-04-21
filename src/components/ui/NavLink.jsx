import { Link } from 'react-router-dom';

function NavLink() {
  return (
    <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0 lg:ml-auto">
      <li>
        <Link to="/" className="text-gray-700 font-semibold hover:text-indigo-600" >Home</Link>
      </li>
      <li>
        <Link to="/profile" className="text-gray-700 font-semibold hover:text-indigo-600">Shop</Link>
      </li>
      <li>
        <a className="text-gray-700 font-semibold hover:text-indigo-600" href="#!">About</a>
      </li>
      <li>
        <a className="text-gray-700 font-semibold hover:text-indigo-600" href="#!">Contact</a>
      </li>
    </ul>
  );
}

export default NavLink;
