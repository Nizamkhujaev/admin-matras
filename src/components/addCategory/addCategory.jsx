import React, {useRef} from 'react'
import './addCategory.scss'
// import axios from 'axios';
import request from '../../services/http';
import AddIcon from '@mui/icons-material/Add';

import Language from '../../lang'
import {useLang} from '../../context/LanguageProvider'

function AddCategory({addCategory,setAddCategory}) {

    const categoryName = useRef(null)
    const categoryState = useRef(null)

    function checked() {
        console.log(categoryState.current.checked)
    }

    const [lang] = useLang()

    function handleSubmit(e) {
        e.preventDefault()

        // console.log(categoryState.current.checked)

        request.post('categories', {
            categoryName: categoryName.current.value,
            active: categoryState.current.checked,
            token: localStorage.getItem('sessionToken')
        })
        .then(response => {
            // console.log(response)
                if(response.data.status === 201) {
                    setAddCategory(!addCategory)
                    window.location.reload()
                }
                console.log(response.data.status)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className={`add-category ${addCategory ? 'add-category-show' : ''}`}>
            <button onClick={() => setAddCategory(!addCategory)} className="add-category-top">
                <AddIcon />
            </button>
            <h4 className="add-category__title">
                {Language[lang].categoryAdd.addTitle}
            </h4>
            <form onSubmit={handleSubmit} className="add-category-form">
                <label htmlFor="add-category" className="add-category-form__label">{Language[lang].categoryAdd.categoryName}</label>
                <input ref={categoryName} type="text" placeholder={Language[lang].categoryAdd.forExample} id='add-category' className="add-category-form__input" />

                <div className="add-category-form-bottom">
                    <label htmlFor="category-state" className="add-category-form-bottom__label">{Language[lang].categoryAdd.state}</label>
                    <label className="switch">
                        <input onChange={checked} ref={categoryState} id='category-state' type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>

                <button type='submit' className="add-category-form__btn">
                    {Language[lang].categoryAdd.add}
                </button>
            </form>
        </div>
    )
}

export default AddCategory
