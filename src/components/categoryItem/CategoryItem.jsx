import React from 'react'
import './categoryItem.scss'


import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function CategoryItem({title}) {
    return (
        <div className='category-item'> 
            <div className="category-item-left">
                <h4 className="category-item-left__title">{title}</h4>
            </div>
            <div className="category-item-right">
                <div className="edit">
                    <ModeEditIcon/>
                </div>
                <div className="delete">
                    <RestoreFromTrashIcon/>
                </div>
            </div>
        </div>
    )
}

export default CategoryItem
