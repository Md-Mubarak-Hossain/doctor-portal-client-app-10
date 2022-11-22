import React from 'react';
import { Link } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';

const Navbar = () => {
    const menubar = <>
        <li><Link><button className='lg:btn'>Home</button></Link></li>
        <li><Link>About</Link></li>
        <li><Link>Appointment</Link></li>
        <li><Link>Reviews</Link></li>
        <li><Link>Contact Us</Link></li>
        <li><Link>Login</Link></li>
    </>
    return (
        <div className="navbar">
            <div className="flex-1 ml-5">
                <Link className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="flex-none mr-5">
                <ul className="hidden menu lg:menu-horizontal p-0">
                    {menubar}
                </ul>
                <div className='lg:hidden xl:hidden xxl:hidden'>
                    <label htmlFor="phone-menu"><GoThreeBars></GoThreeBars></label>
                    <input type="checkbox" id="phone-menu" className="modal-toggle" />
                    <label htmlFor="phone-menu" className="modal cursor-pointer">
                        <label className="modal-box relative" htmlFor="">
                            <ul className="menu p-0 w-full">
                                {menubar}
                            </ul>
                        </label>
                    </label>
                </div>
            </div>
        </div >
    );
};

export default Navbar;