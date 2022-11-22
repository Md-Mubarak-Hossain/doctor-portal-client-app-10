import React from 'react';
import Service from '../Service/Service';
import Appointment from '../Appointment/Appointment';
import Testimonial from '../Testimonial/Testimonial';
import ContactUs from '../ContactUs/ContactUs';
import Smile from '../Smile/Smile';
const Home = () => {
    return (
        <div className='mb-0'>
            <div>
                <Smile></Smile>
            </div>
            <div>
                <Service></Service>
            </div>
            <div>
                <Appointment></Appointment>
            </div>
            <div>
                <Testimonial></Testimonial>
            </div>
            <div>
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;