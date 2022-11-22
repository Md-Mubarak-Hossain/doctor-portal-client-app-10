import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
const Service = () => {
    return (
        <>
            <div className='text-center'>
                <h2 className='text-lg uppercase text-primary'>Our Services</h2>
                <h2 className='text-2xl'>Service We Provide</h2>
            </div>
            <div className='w-full gap-4 grid grid-cols-1 lg:grid-cols-3'>
                <div className='lg:p-2'>
                    <div className="mx-auto card w-80 shadow-xl flex flex-col justify-center items-center">
                        <figure className="px-10 pt-10">
                            <img src={fluoride} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-xl">Fluoride Treatment</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, necessitatibus.</p>
                        </div>
                    </div>
                </div>
                <div className='lg:p-2'>
                    <div className="mx-auto card w-80 shadow-xl flex flex-col justify-center items-center">
                        <figure className="px-10 pt-10">
                            <img src={cavity} alt='cavity' className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-xl">Cavity filling</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, necessitatibus.</p>
                        </div>
                    </div>
                </div>
                <div className='lg:p-2'>
                    <div className="mx-auto card w-80 shadow-xl flex flex-col justify-center items-center">
                        <figure className="px-10 pt-10">
                            <img src={whitening} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-xl">Teeth whitening</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, necessitatibus.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-20 p-10">
                    <div className='lg:ml-5 p-2 lg:p-8'>
                        <img src={treatment} className="rounded-lg" alt='/' />
                    </div>
                    <div className='lg:mr-5'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care on Your Terms</h1>
                        <p className="py-6 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore minima voluptatum numquam, fugit distinctio in delectus totam debitis. Quos non saepe nihil aut tempore fugiat quas harum consectetur atque? Saepe dicta nam, maiores numquam rem natus. Minus quisquam hic illum libero ab quos est, autem quidem quasi ex tenetur doloribus amet perferendis labore quae suscipit doloremque eius esse ullam beatae quaerat? Adipisci aliquam accusamus temporibus!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;