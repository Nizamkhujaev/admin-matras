import React from 'react'
import './sliderlistItem.scss'

import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function SliderListItem({id, img,title,setRouteName,setDeletedCategory,editCategory,setEditCategory,editCarousel,setEditedCarousel,setEditCarousel}) {

    function deleted() {
        setEditCategory(!editCategory)
        setDeletedCategory(id)
        setRouteName('/carousel')
    }

    function edited() {
        setEditedCarousel(id)
        setEditCarousel(!editCarousel)
    }

    return (
        <tr data-slider={id} className='slider-list-item'>
            <td>
                {id}
            </td>
            <td>
                <img src={img} alt="" className="slider-list-item__img" />
            </td>
            <td>
                <h4 className="slider-list-item__title">{title}</h4>
            </td>

            <td className='end-location'>
                <div className="category-item-right">
                    <div onClick={edited} className="edit">
                        <ModeEditIcon />
                    </div>
                    <div onClick={deleted} className="delete">
                        <RestoreFromTrashIcon />
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default SliderListItem
