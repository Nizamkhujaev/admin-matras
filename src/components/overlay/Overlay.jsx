import React from 'react'
import './overlay.scss'

function Overlay({addCategory,editCategory, addProduct,addTech,editLocation}) {
    return (
        <div className={`overlay ${addCategory ? 'overlay-category' : editCategory ? 'overlay-category' : addProduct ? 'overlay-category' : addTech ? 'overlay-category' : editLocation ? 'overlay-category' : ''}`}></div>
    )
}

export default Overlay
