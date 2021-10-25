import React, { useState, useEffect } from 'react'
import './productTable.scss'
import request from '../../services/http';
import ProductItem from '../productItem';
import Loader from '../loader/Loader'

import {useLang} from '../../context/LanguageProvider'
import Language from '../../lang'

// import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';

function PrductTable({ deleteCategory, setDeletedCategory, setRouteName, editCategory, setEditCategory, addProduct, setAddProduct,editProduct,setProduct,setProductId }) {

    const [product, setProductt] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    const [lang] = useLang()

    useEffect(() => {
        request.get('/products')
            .then(response => {
                // console.log(response.data)
                setProductt({
                    isFetched: true,
                    data: response.data.data,
                    error: false
                })
            })
            .catch(err => {
                setProductt({
                    isFetched: false,
                    data: [],
                    error: err
                })
            })
    }, [])

    return (
        <div className='product-table'>
            <table className="product-table-main-table">
                <thead className='product-table-main-table-header'>
                    <tr>
                        <th>{Language[lang].products.productName}</th>
                        <th>{Language[lang].products.productCategory}</th>
                        <th>{Language[lang].products.price}</th>
                        <th>{Language[lang].products.weight}</th>
                        <th>{Language[lang].products.size}</th>
                        <th>{Language[lang].products.status}</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        product.isFetched && product.data ? (
                            product.data.map((item, index) => (
                                <ProductItem
                                    productName={item.product_name}
                                    category={item.category_name}
                                    price={item.price}
                                    weight={item.yuklama}
                                    size={item.olchami}
                                    status={item.active}
                                    key={index}
                                    id={item.product_id}
                                    deletedCategory={deleteCategory}
                                    setDeletedCategory={setDeletedCategory}
                                    setRouteName={setRouteName}
                                    editCategory={editCategory}
                                    setEditCategory={setEditCategory}
                                    editProduct={editProduct}
                                    setProduct={setProduct}
                                    setProductId={setProductId}
                                />
                            ))
                        ) : <tr><td><Loader /></td></tr>
                    }
                </tbody>


            </table>

            <div className="product-table-add">
                <button onClick={() => setAddProduct(!addProduct)} className="product-table__btn-add">
                    {Language[lang].products.add}
                </button>
            </div>
        </div>
    )
}

export default PrductTable
