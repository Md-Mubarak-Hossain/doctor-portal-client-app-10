import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../pages/Home/Home/Home';
import FourOfFour from '../FourOfFour/FourOfFour';

const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>

                }
            ]
        },
        {
            path: '/*',
            element: <FourOfFour></FourOfFour>

        }
    ])
    return (
        <RouterProvider router={router}>
        </RouterProvider >
    );
};

export default Route;