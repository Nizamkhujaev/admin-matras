import React from 'react'
import './techItem.scss'

import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function TechItem({ names, text, videoLink, id, setDeletedCategory,editCategory,setEditCategory,setRouteName,editTech,setEditTech,setEditTechId }) {

    function click(e) {
        setEditCategory(!editCategory)
        setDeletedCategory(e.target.parentNode.parentNode.dataset.tech)
        setRouteName('/technology')
    }

    function editter(e) {
        setEditTechId(e.target.parentNode.parentNode.dataset.tech)
        setEditTech(!editTech)
    }

    return (
        <tr data-tech={id} className='tech-item'>
            <td>{names}</td>
            <td>{text}</td>
            <td>
                <a rel="noreferrer" href={videoLink} target='_blank'>{videoLink}</a>
            </td>
            <td className='end-tech'>
                <div onClick={editter} className="edit">
                    <ModeEditIcon />
                </div>
                <div onClick={click} className="delete">
                    <RestoreFromTrashIcon />
                </div>
            </td>
        </tr>
    )
}

export default TechItem
