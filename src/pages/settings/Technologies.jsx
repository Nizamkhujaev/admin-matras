import React from 'react'
import './teachnologies.scss'

import TechTable from '../../components/techTable'

function Technologies({setDeletedCategory,editCategory,setEditCategory,setRouteName,addTech,setAddTech,editTech,setEditTech,setEditTechId}) {
    return (
        <div className='technologies'>
            <TechTable
                setDeletedCategory={setDeletedCategory}
                setRouteName={setRouteName}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
                addTech={addTech}
                setAddTech={setAddTech}
                editTech={editTech}
                setEditTech = {setEditTech}
                setEditTechId={setEditTechId}
            />
        </div>
    )
}

export default Technologies
