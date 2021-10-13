import React from 'react'
import './location.scss'

import LocationTable from '../../containers/locationTable'

function Location({setDeletedCategory,editCategory,setEditCategory,setRouteName}) {
    return (
        <div className='location'>
            <LocationTable
                setDeletedCategory={setDeletedCategory}
                setRouteName={setRouteName}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
            />
        </div>
    )
}

export default Location
