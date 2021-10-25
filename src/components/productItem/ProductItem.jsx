import React from 'react'

import './productItem.scss'

import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import request from '../../services/http';

function ProductItem({productName,category,price,weight,size,status, id,editCategory, setEditCategory,setDeletedCategory,setRouteName, editProduct,setProduct,setProductId}) {
    
    function click(e) {
        setEditCategory(!editCategory)
        setDeletedCategory(e.target.parentNode.parentNode.parentNode.dataset.product)
        setRouteName('/products')
    }

    // console.log(status)

    function edited(e) {
        setProduct(!editProduct)
        setProductId(e.target.parentNode.parentNode.parentNode.dataset.product)
    }

    function changer(e) {

        request.patch('/products', {
            id: e.target.parentNode.parentNode.parentNode.dataset.product,
            token: window.localStorage.getItem('sessionToken')
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
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
                        <input
                            onChange={changer}
                            checked={status ? true : false}
                            type="checkbox"
                        />
                        <span className="slider round"></span>
                    </label>
                </td>
                <td className='end-product'>
                    <div className="category-item-right">
                        <div onClick={edited} className="edit">
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
