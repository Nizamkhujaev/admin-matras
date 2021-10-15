import React from 'react'
import './location.scss'

import LocationTable from '../../containers/locationTable'

function Location({setDeletedCategory,editCategory,setEditCategory,setRouteName,editLocation,setEditLocation}) {
    return (
        <div className='location'>
            <LocationTable
                setDeletedCategory={setDeletedCategory}
                setRouteName={setRouteName}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
                editLocation={editLocation}
                setEditLocation = {setEditLocation}
            />
        </div>
    )
}

export default Location
