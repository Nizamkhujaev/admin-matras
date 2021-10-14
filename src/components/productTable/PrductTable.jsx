import React from 'react'
import './productTable.scss'

import ProductItem from '../productItem';

// import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';

function PrductTable({ deleteCategory, setDeletedCategory, setRouteName,editCategory,setEditCategory,addProduct,setAddProduct }) {

    let products = [
        {
            id: 1,
            productName: 'Lux Soft Memory',
            category: 'Model C',
            price: '1 600 000 so’m',
            weight: '150 kg',
            size: '200 x 134 x 40',
            status: false
        },
        {
            id: 2,
            productName: 'Lux Soft Memory',
            category: 'Model C',
            price: '1 600 000 so’m',
            weight: '150 kg',
            size: '200 x 134 x 40',
            status: true
        },
        {
            id: 3,
            productName: 'Lux Soft Memory',
            category: 'Model C',
            price: '1 600 000 so’m',
            weight: '150 kg',
            size: '200 x 134 x 40',
            status: false
        },
    ]

    return (
        <div className='product-table'>
            <table className="product-table-main-table">
                <thead className='product-table-main-table-header'>
                    <tr>
                        <th>Mahsulot nomlari</th>
                        <th>Toifalar</th>
                        <th>Narxi</th>
                        <th>Yuklama</th>
                        <th>Razmeri</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        products && products.length > 0 ? (
                            products.map((item, index) => (
                                <ProductItem
                                    productName={item.productName}
                                    category={item.category}
                                    price={item.price}
                                    weight={item.weight}
                                    size={item.size}
                                    status={item.status}
                                    key={index}
                                    id={item.id}
                                    deletedCategory={deleteCategory}
                                    setDeletedCategory={setDeletedCategory}
                                    setRouteName={setRouteName}
                                    editCategory={editCategory}
                                    setEditCategory={setEditCategory}
                                />
                            ))
                        ) : ''
                    }
                </tbody>

                {/* <tbody>
                    <tr>
                        <td>Lux Soft Memory</td>
                        <td>Model C</td>
                        <td>1 600 000 so’m</td>
                        <td>150 kg</td>
                        <td>200 x 134 x 40</td>
                        <td>
                            <label className="switch">
                                <input type="checkbox" />
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
                </tbody> */}
            </table>

            <div className="product-table-add">
                <button onClick={() => setAddProduct(!addProduct)} className="product-table__btn-add">
                    Qo’shish
                </button>
            </div>
        </div>
    )
}

export default PrductTable
