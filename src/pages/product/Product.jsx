import React from 'react'
import './product.scss'

import PrductTable from '../../components/productTable'

function Product({deleteCategory,setDeletedCategory,setRouteName,editCategory,setEditCategory,addProduct,setAddProduct}) {
    return (
        <div className='product'>
            <PrductTable
                deletedCategory={deleteCategory}
                setDeletedCategory={setDeletedCategory}
                setRouteName={setRouteName}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
                addProduct={addProduct}
                setAddProduct = {setAddProduct}
            />
        </div>
    )
}

export default Product
