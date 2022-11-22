import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className="hero">
            <img src={appointment} alt="img" className='h-full w-full' />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="flex flex-col justify-center items-center h-96">
                    <h1 className="mb-2 text-lg  text-primary">Contact Us</h1>
                    <h1 className="mb-5 text-2xl">Stay Contacted With Us</h1>
                    <input type="text" placeholder="Email Address" className="input  mb-3 input-bordered w-full" />
                    <input type="text" placeholder="Subject" className="input  mb-3 input-bordered w-full" />
                    <textarea className="textarea textarea-bordered h-24 w-full mb-3" placeholder="Your message"></textarea>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div >
    );
};

export default ContactUs;