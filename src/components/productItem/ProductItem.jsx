import React from 'react'

import './productItem.scss'

import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function ProductItem({productName,category,price,weight,size,status, id,editCategory, setEditCategory,setDeletedCategory,setRouteName}) {
    
    function click(e) {
        // console.log(e.target.parentNode.parentNode.parentNode.dataset.product)
        setEditCategory(!editCategory)
        setDeletedCategory(e.target.parentNode.parentNode.parentNode.dataset.product)
        setRouteName('product')
    }
    
    return (
        <tr data-product={id} className='product-item'>
                <td>{productName}</td>
                <td>{category}</td>
                <td>{price}</td>
                <td>{weight}</td>
                <td>{size}</td>
                <td>
                    <label className="switch">
                        <input onChange={e => e} checked={status ? true: false} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </td>
                <td className='end-product'>
                    <div className="category-item-right">
                        <div className="edit">
                            <ModeEditIcon />
                        </div>
                        <div onClick={click} className="delete">
                            <RestoreFromTrashIcon />
                        </div>
                    </div>
                </td>
        </tr>
    )
}

export default ProductItem
