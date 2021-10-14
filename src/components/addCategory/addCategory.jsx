import React, {useRef} from 'react'
import './addCategory.scss'
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';



function AddCategory({addCategory,setAddCategory}) {

    const categoryName = useRef(null)
    const categoryState = useRef(null)

    function checked() {
        console.log(categoryState.current.checked)
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('https://matras-app.herokuapp.com/categories', {
            categoryName: categoryName.current.value,
            active: categoryState.current.checked
        })
        .then(response => {
            if(response.data.status === 201) {
                setAddCategory(!addCategory)
                window.location.reload()
            }
            // console.log(response.data.status)
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
                Qo’shish
            </h4>
            <form onSubmit={handleSubmit} className="add-category-form">
                <label htmlFor="add-category" className="add-category-form__label">Kategoriya nomi  </label>
                <input ref={categoryName} type="text" placeholder='masalan: Model B' id='add-category' className="add-category-form__input" />

                <div className="add-category-form-bottom">
                    <label htmlFor="category-state" className="add-category-form-bottom__label">Holat</label>
                    <label className="switch">
                        <input onChange={checked} ref={categoryState} id='category-state' type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>

                <button type='submit' className="add-category-form__btn">
                    Qo’shish
                </button>
            </form>
        </div>
    )
}

export default AddCategory
