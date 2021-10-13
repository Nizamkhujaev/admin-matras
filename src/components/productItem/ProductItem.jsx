import React from 'react'

import './productItem.scss'

import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function ProductItem({productName,category,price,weight,size,status, id}) {
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
                        <div className="delete">
                            <RestoreFromTrashIcon />
                        </div>
                    </div>
                </td>
        </tr>
    )
}

export default ProductItem
