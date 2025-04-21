import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Shop</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>

        <div className="mb-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
          <a href="#" className="hover:text-gray-400"><FaXTwitter /></a>
          <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
        </div>

        <p className="text-sm">&copy; 2025 MarketShell. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
