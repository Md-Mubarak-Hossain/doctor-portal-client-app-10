import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import doctorSmall from '../../../assets/images/doctor-small.png';

const Appointment = () => {
    return (
        <div className="hero bg-white h-full  lg:mt-60 text-white py-10">
            <img src={appointment} alt="" className='h-96 w-full relative' />
            <div className="hero-overlay">
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-10  absolute'>
                <div className='mb-32 pb-5 hidden lg:flex'>
                    <img src={doctorSmall} alt="doctorSmall" className='h-full' />
                </div>
                <div className='p-5 lg:pt-20 lg:mt-32 lg:pr-5'>
                    <h1 className="mb-5 text-xl font-bold text-primary">Appointment</h1>
                    <h1 className="mb-5 text-3xl font-bold">Make an Appointment today</h1>
                    <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus, nisi maiores necessitatibus et saepe doloribus culpa vitae magni. Iste aut cupiditate corporis soluta dolorem molestias, illo, perferendis iure ut.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Appointment;