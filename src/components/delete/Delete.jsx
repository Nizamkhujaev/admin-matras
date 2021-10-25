import React from 'react'
import { useLang } from '../../context/LanguageProvider'
import Language from '../../lang'
import './delete.scss'


function Delete({editCategory,setEditCategory,deletedCategory,routeName}) {
    const [lang] = useLang()

    async function deleteCategory() {

        let obj = {
            id: parseInt(deletedCategory),
            token: window.localStorage.getItem('sessionToken')
        }


        let response = await fetch(`http://localhost:4500${routeName}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(obj)
        })

        response = await response.json()
        console.log(response)
        if(response.status === 200) {
            setEditCategory(!editCategory)
            window.location.reload()
        }
        // console.log(response)
        // return response
    }

    return (
        <div className={`delete-wrapper ${editCategory ? 'delete-category' : ''}`}>
            <h4 className="delete-wrapper__title">
                {Language[lang].delete.deleteTitle}
            </h4>

            <div className="delete-wrapper-bottom">
                <button
                    onClick={() => setEditCategory(!editCategory)}
                    className="delete-wrapper-bottom__no"
                >
                    {Language[lang].delete.no}
                </button>
                
                <button
                    onClick={deleteCategory}
                    className="delete-wrapper-bottom__yes"
                >
                    {Language[lang].delete.yes}
                </button>
            </div>
        </div>
    )
}

export default Delete
