import React from 'react'
import './location.scss'

import LocationTable from '../../containers/locationTable'

function Location({setDeletedCategory,editCategory,setEditCategory,setRouteName,editLocation,setEditLocation,editLoc,setEditLoc,setEditLocId}) {
    return (
        <div className='location'>
            <LocationTable
                setDeletedCategory={setDeletedCategory}
                setRouteName={setRouteName}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
                editLocation={editLocation}
                setEditLocation = {setEditLocation}
                editLoc={editLoc}
                setEditLoc={setEditLoc}
                setEditLocId={setEditLocId}
            />
        </div>
    )
}

export default Location
