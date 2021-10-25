import React, {useState,useEffect,useRef} from 'react'
import './editCategory.scss'

import Language from '../../lang'
import {useLang} from '../../context/LanguageProvider'

import AddIcon from '@mui/icons-material/Add';
import request from '../../services/http/index'

function EditCategory({categoryBlock,setCategoryBlock,editCatId}) {
    const [editInputCategory, setEditInputCategory] = useState('')
    const inputRef = useRef(null)

    useEffect(() => {
        setEditInputCategory(editInputCategory)
    },[editInputCategory])

    if(categoryBlock) {
        request.get(`/categories/${editCatId}`)
        .then(response => {
            // console.log(response.data.data.category_name)
            if(response.data.status) {
                setEditInputCategory(response.data.data.category_name)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const [lang] = useLang()

    function editSubmit(e) {
        e.preventDefault();

        console.log(inputRef.current.value)

        request.put('/categories', {
            id: editCatId,
            categoryName: inputRef.current.value,
            token: window.localStorage.getItem('sessionToken')
        })
        .then(response => {
            if(response.data.status === 200) {
                setCategoryBlock(!categoryBlock)
                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className={`edit-category ${categoryBlock ? 'edit-category-show': ''}`}>
            <button onClick={() => setCategoryBlock(!categoryBlock)} className="add-category-top">
                <AddIcon />
            </button>
            <h4 className="add-category__title">
                {Language[lang].categoryAdd.edit}
            </h4>

            <form onSubmit={editSubmit} className="add-category-form">
                <label htmlFor="add-categoryy" className="add-category-form__label">{Language[lang].categoryAdd.categoryName} </label>
                <input
                    autoComplete='off'
                    ref={inputRef}
                    defaultValue={editInputCategory}
                    onChange={e => setEditInputCategory(e.target.value)}
                    type="text"
                    placeholder={Language[lang].categoryAdd.forExample}
                    id='add-categoryy'
                    className="add-category-form__input"
                />

                <button type='submit' className="add-category-form__btn">
                    {Language[lang].categoryAdd.edit}
                </button>
            </form>
        </div>
    )
}

export default EditCategory
