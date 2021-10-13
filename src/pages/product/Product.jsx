import React from 'react'
import './product.scss'

import PrductTable from '../../components/productTable'

function Product({deleteCategory,setDeletedCategory,setRouteName,editCategory,setEditCategory}) {
    return (
        <div className='product'>
            <PrductTable
                deletedCategory={deleteCategory}
                setDeletedCategory={setDeletedCategory}
                setRouteName={setRouteName}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
            />
        </div>
    )
}

export default Product
