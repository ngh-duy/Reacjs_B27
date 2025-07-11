import React, { useState } from 'react'
import CardProduct from './CardProduct'
import data from '../../data.json'
import Modal from './Modal';

export default function ListCardProduct({ onCartChange }) {
  const [productList, setProductList] = useState(data);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const renderListProduct = () => {
    return productList.map(product =>
      <CardProduct
        key={product.id}
        product={product}
        productList={productList}
        onImageClick={handleOpenModal}
        onCartChange={typeof onCartChange === 'function' ? onCartChange : undefined}
      />
    )
  }
  return (
    <>
      <h1 className='text-center text-2xl font-bold mt-28 mb-8'>FASHION SHOES</h1>
      <section className='grid grid-cols-4 gap-8 mx-4'>
        {renderListProduct()}
      </section>
      {selectedProduct && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  )
}
