import React from 'react'
import './categoryItem.scss'


import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
// import request from '../../services/http';

function CategoryItem({title,id,editCategory,setEditCategory,setEditCatId,setDeletedCategory,setRouteName,categoryBlock,setCategoryBlock}) {

    function deleteItem(e) {
        setEditCategory(!editCategory)
        setRouteName('/categories')
        setDeletedCategory(e.target.parentNode.parentNode.dataset.category)
    }

    async function editable(e) {
    //     let id = e.target.parentNode.parentNode.dataset.category
    //     request.get(`/categories/${id}`)
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
        setCategoryBlock(!categoryBlock)
        setEditCatId(e.target.parentNode.parentNode.dataset.category    )
    }

    return (
        <div data-category={id} className='category-item'> 
            <div className="category-item-left">
                <h4 className="category-item-left__title">{title}</h4>
            </div>
            <div className="category-item-right">
                <div onClick={editable} className="edit">
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
