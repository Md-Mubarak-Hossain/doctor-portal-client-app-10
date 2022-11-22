import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quate from '../../../assets/icons/quote.svg';
const Testimonial = () => {
    return (
        <div className='lg:m-12'>
            <div className='m-4  flex justify-between h-32'>
                <div className='px-2 w-1/2'>
                    <h2 className='text-primary'>Testimonial</h2>
                    <h2 className='text-2xl lg:text-4xl'>What Our Patients Says</h2>
                </div>
                <div className='h-32 ml-2'>
                    <img src={quate} alt="quate" className='h-24' />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 m-5 lg:mx-9 lg:my-5">
                <div >
                    <div className="w-full  items-center text-justify shadow-xl rounded-lg">
                        <div className="card-body ">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis excepturi esse suscipit eos optio eius cum voluptatibus blanditiis, laborum hic?</p>
                            <div className="flex pt-10">
                                <div className="w-1/2">
                                    <img src={people1} className="border-2 border-primary rounded-full w-16 " alt='img' />
                                </div>
                                <div className='w-full text-start mr-5 ml-2'>
                                    <p>Winson Herry</p>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
                <div >
                    <div className="w-full  items-center text-justify shadow-xl rounded-lg">
                        <div className="card-body ">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis excepturi esse suscipit eos optio eius cum voluptatibus blanditiis, laborum hic?</p>
                            <div className="flex pt-10">
                                <div className="w-1/2">
                                    <img src={people2} className="border-2 border-primary rounded-full w-16 " alt='img' />
                                </div>
                                <div className='w-full text-start mr-5 ml-2'>
                                    <p>Winson Herry</p>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="w-full  items-center text-justify shadow-xl rounded-lg">
                        <div className="card-body ">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis excepturi esse suscipit eos optio eius cum voluptatibus blanditiis, laborum hic?</p>
                            <div className="flex pt-10">
                                <div className="w-1/2">
                                    <img src={people3} className="border-2 border-primary rounded-full w-16 " alt='img' />
                                </div>
                                <div className='w-full text-start mr-5 ml-2'>
                                    <p>Winson Herry</p>
                                    <p>California</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Testimonial;