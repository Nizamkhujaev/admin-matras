import React from 'react'
import './overlay.scss'

function Overlay({addCategory,editCategory, addProduct}) {
    return (
        <div className={`overlay ${addCategory ? 'overlay-category' : editCategory ? 'overlay-category' : addProduct ? 'overlay-category' : ''}`}></div>
    )
}

export default Overlay
