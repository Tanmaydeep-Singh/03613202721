import React from 'react'

    const Card = ({ productName, price, availability, rating, discount }) => {

    return (
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg w-full md:w-96 mx-auto shadow-xl m-6 rounded-md">
        <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{productName}</div>
            <p className="mt-2 text-gray-600">${price}</p>
            <p className="mt-2 text-gray-600">Availability: {availability}</p>
            <p className="mt-2 text-gray-600">Rating: {rating}</p>
            <p className="mt-2 text-gray-600">Discount: {discount}% off</p>
            <div className="mt-4">
                <a href="#" className="text-indigo-500 hover:text-indigo-600 font-semibold">View Details</a>
            </div>
        </div>
    </div>
    
    )
}

export default Card