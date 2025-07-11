import React from 'react'
// import { useState } from 'react';
export default function CardProduct(props) {
    const product = props.product;
    const productList = props.productList;

    const countProduct = (id) => {
        const getProductCount = JSON.parse(localStorage.getItem("productCount")) || [];
        const findProduct = getProductCount.findIndex(product => {
            return product.id === id
        })
        getProductCount[findProduct].count += 1;
        localStorage.setItem('productCount', JSON.stringify(getProductCount));
    }
    const addProductLocal = (id) => {
        const findProduct = productList.find(product => {
            return product.id === id
        })// trả về object
        const getProduct = JSON.parse(localStorage.getItem("productShoping")) || [];
        const getProductCount = JSON.parse(localStorage.getItem("productCount")) || [];
        const findProductCount = getProductCount.find(product => {
            return product.id === id;
        })
        const existProduct = getProduct.find(product => {
            return product.id === id;
        })
        console.log(existProduct);
        console.log(findProductCount);
        if (existProduct && findProductCount) {
            countProduct(id);
        } else {
            getProduct.push(findProduct);
            localStorage.setItem('productShoping', JSON.stringify(getProduct));

            const count = { id: id, count: 1 }
            const getProductCount = JSON.parse(localStorage.getItem("productCount")) || [];
            getProductCount.push(count);
            localStorage.setItem('productCount', JSON.stringify(getProductCount));
        }

    }

    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#" data-modal-target="crud-modal" data-modal-toggle="crud-modal">
                <img className="p-8 rounded-t-lg" src={product.image} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white my-2 truncate w-[100%]">{product.name}</h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <a href="#" onClick={() => addProductLocal(product.id)} className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className="fa-solid fa-cart-shopping"></i> Add to cart</a>
                </div>
            </div>
        </div>
    )
}


