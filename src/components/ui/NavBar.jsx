import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import NavLink from './NavLink';
import { useState } from "react";
import HamburgerToggle from './HamburgerToggle';
import { useGetCartStatQuery } from '../../services/marketShellApi';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const cart_code = localStorage.getItem('cart_code')
    const {data} = useGetCartStatQuery({cart_code});

    return (
        <nav className="sticky top-0 z-[1030] bg-white shadow-sm py-3">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4">

                <Link className="text-xl font-bold uppercase" to="/">MARKET SHELL</Link>

                <div className="lg:hidden">
                    <HamburgerToggle onClick={() => setIsOpen(!isOpen)} />
                </div>

                <div className={`w-full ${isOpen? 'block' : 'hidden'} lg:!flex lg:items-center lg:w-auto`}>
                    <NavLink />

                    <Link
                        to="/cart"
                        className="btn bg-black text-white lg:ml-4 mt-4 lg:mt-0 rounded-full relative px-4 py-2 flex items-center gap-2 max-w-1/12 lg:max-w-none "
                    >
                        <FaCartShopping />
                        <span className="absolute -top-2 -right-2 text-xs px-2 py-1 rounded-full text-white" style={{ backgroundColor: '#6050DC' }}>
                            {data?.num_of_items || 0}
                        </span> 
                        
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
