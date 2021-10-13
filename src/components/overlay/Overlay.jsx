import React from 'react'
import './overlay.scss'

function Overlay({addCategory}) {
    return (
        <div className={`overlay ${addCategory ? 'overlay-category' : ''}`}></div>
    )
}

export default Overlay
