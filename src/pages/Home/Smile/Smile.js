import React from 'react';
import bg from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import { MdOutlineWatchLater } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { TbPhoneCall } from 'react-icons/tb';

const Smile = () => {
    return (
        <div className="hero min-h-screen">
            <img src={bg} alt="/" />
            <div className="hero-overlay bg-opacity-0">
            </div>
            <div className="flex flex-col">
                <div className="hero-content w-full">
                    <div className="hero-content flex-col lg:flex-row-reverse w-full justify-center items-center lg:px-10 lg:mx-10">
                        <div className='lg:w-1/2 lg:px-5'>
                            <img src={chair} className="w-full rounded-lg shadow-2xl" alt='/' />
                        </div>
                        <div className='lg:w-1/2'>
                            <h1 className="text-3xl font-bold lg:w-2/3">Your New Smile Starts Here</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 p-10 my-12'>
                    <div className="m-2 p-4 rounded-lg text-white bg-primary lg:flex">
                        <div className='text-6xl px-2 text-center flex flex-col justify-center items-center mb-5'>
                            <MdOutlineWatchLater></MdOutlineWatchLater>
                        </div>
                        <div>
                            <h2>Opening Hours</h2>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="m-2 p-4 rounded-lg text-white bg-black lg:flex">
                        <div className='text-6xl px-2 text-center flex flex-col justify-center items-center mb-5'>
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                        </div>
                        <div>
                            <h2>Visit Our Location</h2>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <div className="m-2 p-4 rounded-lg text-white  bg-primary lg:flex">
                        <div className='text-6xl px-2 text-center flex flex-col justify-center items-center mb-5'>
                            <TbPhoneCall></TbPhoneCall>
                        </div>
                        <div>
                            <h2>Contact us now</h2>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Smile;