import React from 'react'
import './overlay.scss'

function Overlay({addCategory,editCategory}) {
    return (
        <div className={`overlay ${addCategory ? 'overlay-category' : editCategory ? 'overlay-category' : ''}`}></div>
    )
}

export default Overlay
