import React from 'react'
import './locationItem.scss'

import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function LocationItem({ location, text, locationLink, id,setDeletedCategory,editCategory,setEditCategory,setRouteName }) {
    
    function click(e) {
        // console.log(e.target.parentNode.parentNode.parentNode.dataset.loc)
        setEditCategory(!editCategory)
       setDeletedCategory(e.target.parentNode.parentNode.parentNode.dataset.loc)
       setRouteName('location')
    }
    
    return (
        <tr data-loc={id} className='location-item'>
            <td>{location}</td>
            <td>{text}</td>
            <td>
                <a rel="noreferrer" className='location-item' target='_blank' href={locationLink}>
                    <LocationOnIcon />
                </a>
            </td>

            <td className='end-location'>
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

export default LocationItem
