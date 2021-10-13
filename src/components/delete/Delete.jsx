import React from 'react'
import './delete.scss'

function Delete({editCategory,setEditCategory,deletedCategory,routeName}) {

    function deleteCategory() {
        console.log(deletedCategory)
        console.log(routeName)
        setTimeout(() => {
            setEditCategory(!editCategory)
        },50)
    }

    return (
        <div className={`delete-wrapper ${editCategory ? 'delete-category' : ''}`}>
            <h4 className="delete-wrapper__title">
                Haqiqatdan ham o’chirmoqchimisiz?
            </h4>

            <div className="delete-wrapper-bottom">
                <button onClick={() => setEditCategory(!editCategory)} className="delete-wrapper-bottom__no">YO’Q</button>
                <button onClick={deleteCategory} className="delete-wrapper-bottom__yes">HA</button>
            </div>
        </div>
    )
}

export default Delete
