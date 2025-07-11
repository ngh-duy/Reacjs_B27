import React from 'react'
import CardProduct from './CardProduct'
import data from '../../data.json'
import { useState } from 'react';
export default function ListCardProduct() {

    const [productList, setProductList] = useState(data);
        console.log(productList);
    const renderListProduct = ()=>{
        return productList.map(product =>
              <CardProduct key={product.id} product ={product} productList={productList} />
        )
    }
  return (
    <>
    <h1 className='text-center text-2xl font-bold mt-28 mb-8'>FASHION SHOES</h1>
    <section className='grid grid-cols-4 gap-8 mx-4'>
        {renderListProduct()}
    </section>
    </>
  )
}
