import React from 'react'
import './techItem.scss'

import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function TechItem({ names, text, videoLink, id }) {
    return (
        <tr data-tech={id} className='tech-item'>
            <td>{names}</td>
            <td>{text}</td>
            <td>{videoLink}</td>
            <td className='end-tech'>
                <div className="edit">
                    <ModeEditIcon />
                </div>
                <div className="delete">
                    <RestoreFromTrashIcon />
                </div>
            </td>
        </tr>
    )
}

export default TechItem
