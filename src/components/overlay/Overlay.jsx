import React from 'react'
import './overlay.scss'

function Overlay({addCategory,editCategory, addProduct,addTech,editLocation,categoryBlock,editTech,editLoc,editProduct,addCarousel,editCarousel,stat}) {
    return (
        <div className={`overlay ${addCategory ? 'overlay-category' : editCategory ? 'overlay-category' : addProduct ? 'overlay-category' : addTech ? 'overlay-category' : editLocation ? 'overlay-category' : categoryBlock ? 'overlay-category' : editTech ? 'overlay-category': editLoc ? 'overlay-category': editProduct ? 'overlay-category' : addCarousel ? 'overlay-category' : editCarousel ? 'overlay-category' : stat ? 'overlay-category' : ''}`}></div>
    )
}

export default Overlay
