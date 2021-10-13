import React from 'react'
import './categoryItem.scss'


import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function CategoryItem({title,id,editCategory,setEditCategory,setDeletedCategory,setRouteName}) {

    function deleteItem(e) {
        setEditCategory(!editCategory)
        setRouteName('category')
        setDeletedCategory(e.target.parentNode.parentNode.dataset.category)
    }

    return (
        <div data-category={id} className='category-item'> 
            <div className="category-item-left">
                <h4 className="category-item-left__title">{title}</h4>
            </div>
            <div className="category-item-right">
                <div className="edit">
                    <ModeEditIcon/>
                </div>
                <div onClick={deleteItem} className="delete">
                    <RestoreFromTrashIcon/>
                </div>
            </div>
        </div>
    )
}

export default CategoryItem
