import React from 'react'

export default function Drawer({ cartVersion }) {
    const [products, setProducts] = React.useState([]);
    const [counts, setCounts] = React.useState([]);

    React.useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("productShoping")) || []);
        setCounts(JSON.parse(localStorage.getItem("productCount")) || []);
    }, [cartVersion]);

    const addCountProduct = (id) => {
        const getProductCount = JSON.parse(localStorage.getItem("productCount")) || [];
        const findProduct = getProductCount.findIndex(product => {
            return product.id === id
        })
        getProductCount[findProduct].count += 1;
        localStorage.setItem('productCount', JSON.stringify(getProductCount));
        setCounts([...getProductCount]);
    }
    const deleteProduct = (id) => {
        const getProductCount = JSON.parse(localStorage.getItem("productCount")) || [];
        const findProduct = getProductCount.findIndex(product => {
            return product.id === id
        })
        localStorage.setItem('productCount', JSON.stringify(getProductCount));
        if (getProductCount[findProduct].id) {
            const existProductCount = getProductCount.filter(product => {
                return product.id !== getProductCount[findProduct].id;
            })
            const getProduct = JSON.parse(localStorage.getItem("productShoping")) || [];
            const existProduct = getProduct.filter(product => {
                return product.id !== getProductCount[findProduct].id;
            })
            localStorage.setItem('productCount', JSON.stringify(existProductCount));
            localStorage.setItem('productShoping', JSON.stringify(existProduct));
            setProducts([...existProduct]);
            setCounts([...existProductCount]);
        }
    }
    const subtractCountProduct = (id) => {
        const getProductCount = JSON.parse(localStorage.getItem("productCount")) || [];
        const findProduct = getProductCount.findIndex(product => {
            return product.id === id
        })
        getProductCount[findProduct].count -= 1;
        localStorage.setItem('productCount', JSON.stringify(getProductCount));
        if (getProductCount[findProduct].count === 0) {
            const existProductCount = getProductCount.filter(product => {
                return product.id !== getProductCount[findProduct].id;
            })
            const getProduct = JSON.parse(localStorage.getItem("productShoping")) || [];
            const existProduct = getProduct.filter(product => {
                return product.id !== getProductCount[findProduct].id;
            })
            localStorage.setItem('productCount', JSON.stringify(existProductCount));
            localStorage.setItem('productShoping', JSON.stringify(existProduct));
            setProducts([...existProduct]);
            setCounts([...existProductCount]);
        } else {
            setCounts([...getProductCount]);
        }
    }
    const renderProductShoping = () => {
        return products.map(product => {
            const findCount = counts.find(productCount => {
                return productCount.id === product.id;
            })
            return (
                <tr key={product.id} className="bg-white flex justify-between mx-2 items-center dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img className="rounded-t-lg" width={70} height={70} src={product.image} alt="product image" />
                    </th>
                    <td className="py-2 truncate w-[20%]">
                        {product.name}
                    </td>
                    <td className="px-2 py-2 flex justify-between">
                        <button onClick={() => addCountProduct(product.id)}><i className="fa-solid fa-plus"></i></button>
                        <h1 className='mx-2'>{findCount?.count || 0}</h1>
                        <button onClick={() => subtractCountProduct(product.id)}><i className="fa-solid fa-minus"></i></button>
                    </td>
                    <td>
                        <button onClick={() => deleteProduct(product.id)}><i className="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div id="drawer-right-example" className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-90 dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-right-label">
            <h5 id="drawer-right-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>Danh sách giỏ hàng</h5>
            <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close menu</span>
            </button>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                    {renderProductShoping()}
                </tbody>
            </table>
            <div className='items-end flex justify-end'><button className='p-2 bg-amber-300 text-center '>Thanh toán</button></div>
        </div>
    )
}
