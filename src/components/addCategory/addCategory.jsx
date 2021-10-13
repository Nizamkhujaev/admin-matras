import React from 'react'
import './addCategory.scss'
import AddIcon from '@mui/icons-material/Add';

function AddCategory({addCategory,setAddCategory}) {
    return (
        <div className={`add-category ${addCategory ? 'add-category-show' : ''}`}>
            <button onClick={() => setAddCategory(!addCategory)} className="add-category-top">
                <AddIcon />
            </button>
            <h4 className="add-category__title">
                Qo’shish
            </h4>
            <form className="add-category-form">
                <label htmlFor="add-category" className="add-category-form__label">Kategoriya nomi  </label>
                <input type="text" placeholder='masalan: Model B' id='add-category' className="add-category-form__input" />

                <div className="add-category-form-bottom">
                    <label htmlFor="category-state" className="add-category-form-bottom__label">Holat</label>
                    <label className="switch">
                        <input id='category-state' type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>

                <button className="add-category-form__btn">
                    Qo’shish
                </button>
            </form>
        </div>
    )
}

export default AddCategory
