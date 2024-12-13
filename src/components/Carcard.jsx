import React, { useState } from 'react';
import Delete from '../assets/delete.png';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
const apiUrl = import.meta.env.VITE_API_URL;
function CarCard({ car }) {
    const { carPictureUrl, ownerName, carName, price, carId } = car;

    // The deleteCar function that makes the DELETE request to the backend
    const deleteCar = async () => {
        try {
            const response = await axios.delete(`${apiUrl}/car/${carId}`);
            console.log(response); // Log the full response for debugging
            toast.success(response.data.message);
            window.location.reload()
        } catch (error) {
            // Log the error to the console for debugging
            console.error(error);
            toast.error(error?.response?.data?.message || "Failed to delete car. Please try again.");
        }
    };

    return (
        <div className='h-56 w-48 bg-slate-200 shadow-xl rounded-lg relative'>
            <div className='h-28 w-full flex justify-center items-center'>
                <div className='h-24 w-36 rounded-full overflow-hidden'>
                    <img src={carPictureUrl} className='h-full w-full object-fill' alt={carName} />
                </div>
            </div>

            <div className='ml-2'>
                <p className='ml-2'>{carName}</p>
                <p className='ml-2'>
                    <span className='block'>Owner:</span> {ownerName}
                </p>
                <p>Price: {price}</p>
            </div>

            {/* The delete icon button */}
            <div>
                <img
                    src={Delete}
                    className='h-4 cursor-pointer absolute top-1 right-1'
                    onClick={deleteCar} // Corrected: Passing the function reference without invoking it
                />
            </div>

            {/* Toast notifications */}
            <Toaster />
        </div>
    );
}

export default CarCard;
