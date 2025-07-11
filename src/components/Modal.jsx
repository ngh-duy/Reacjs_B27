import React from 'react'

export default function Modal({ product, onClose }) {
    if (!product) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-md max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Detail Product
                        </h3>
                        <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 md:p-5">
                        <div className="flex flex-col items-center gap-4">
                            <img src={product.image} alt={product.name} className="w-40 h-40 object-contain rounded" />
                            <div className="w-full space-y-2">
                                <div><span className="font-semibold">Name:</span> {product.name}</div>
                                <div><span className="font-semibold">Description:</span> {product.description}</div>
                                <div><span className="font-semibold">Short Description:</span> {product.shortDescription}</div>
                                <div><span className="font-semibold">Price:</span> ${product.price}</div>
                                <div><span className="font-semibold">Quantity:</span> {product.quantity}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
