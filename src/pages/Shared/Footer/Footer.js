import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    return (
        <div className='hero h-96'>
            <img src={footer} alt="img" />
            <div className="hero-overlay bg-opacity-10"></div>
            <div>
                <div className="hero-content grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-64 lg:my-16 py-10">
                    <div className='text-start'>
                        <span className="footer-title">Services</span>
                        <Link className="block link link-hover">Emergency CheckUp</Link>
                        <Link className="block link link-hover">Monthly CheckUp</Link>
                        <Link className="block link link-hover">Weekly CheckUp</Link>
                        <Link className="block link link-hover">Deep CheckUp</Link>
                    </div >
                    <div className='text-start'>
                        <span className="footer-title">Oral Health</span>
                        <Link className="block link link-hover">Fluoride Treatment</Link>
                        <Link className="block link link-hover" > Cavity filling</Link>
                        <Link className="block link link-hover" >Teeth Whithing</Link>
                    </div >
                    <div className='text-start'>
                        <span className="footer-title">Our address</span>
                        <Link className="block link link-hover">New York 101010-Hudson</Link>
                    </div>
                </div>
                <div className='hero-content' >
                    <h2>Copyright 2022 All rights reserved</h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;