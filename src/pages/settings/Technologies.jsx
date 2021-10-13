import React from 'react'
import './teachnologies.scss'

import TechTable from '../../components/techTable'

function Technologies({setDeletedCategory,editCategory,setEditCategory,setRouteName}) {
    return (
        <div className='technologies'>
            <TechTable
                setDeletedCategory={setDeletedCategory}
                setRouteName={setRouteName}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
            />
        </div>
    )
}

export default Technologies
