import React, {useRef} from 'react'
import './addTech.scss'

import AddIcon from '@mui/icons-material/Add';
import request from '../../services/http';

import Language from '../../lang'
import { useLang } from '../../context/LanguageProvider'

function AddTech({addTech,setAddTech}) {

    const titleRef = useRef(null)
    const textRef = useRef(null)
    const activeRef = useRef(null)
    const posterRef = useRef(null)
    const vidoRef = useRef(null)

    function handleSubmit(e) {
        e.preventDefault();


        request.post('technology', {
           name: titleRef.current.value,
           description: textRef.current.value,
           active: activeRef.current.checked,
           poster: posterRef.current.value,
           video: vidoRef.current.value,
           token: window.localStorage.getItem('sessionToken')
        })
        .then(response => {
            if(response.data.status === 201) {
                setAddTech(!addTech)
                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const [lang] = useLang()

    return (
        <div className={`add-tech ${addTech ? 'add-tech-show' : ''}`}>
            <button onClick={() => setAddTech(!addTech)} className="add-category-top">
                <AddIcon />
            </button>

            <h4 className="add-tech__title">
                {Language[lang].addTech.add}
            </h4>

            <form onSubmit={handleSubmit} className="add-tech-form">
                <div className="add-tech-form1">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-namee" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addTech.name}
                        </label>
                        <input
                            ref={titleRef}
                            id='product-namee'
                            type="text"
                            className="add-product-form-2-wrapper__input"
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-nameee" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addTech.text}
                        </label>
                        <input
                            ref={textRef}
                            id='product-nameee'
                            type="text"
                            className="add-product-form-2-wrapper__input"
                        />
                    </div>

                    <div className="add-product-form-2-wrapper flexed">
                        <label htmlFor="product-neww" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addTech.new}
                        </label>
                        <label className="switch">
                            <input ref={activeRef} id='product-neww' type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>

                </div>

                <div className="add-tech-form2">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-photo" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addTech.photo}
                        </label>

                        <input
                            ref={posterRef}
                            id='product-photo'
                            type="text"
                            className="add-product-form-2-wrapper__input"
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-video" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addTech.video}
                        </label>
                        <input
                            ref={vidoRef}
                            id='product-video'
                            type="text"
                            className="add-product-form-2-wrapper__input"
                        />
                    </div>

                    <button className="add-product-form-4__btn">
                        {Language[lang].addTech.add}
                    </button>
                </div>
            </form>

        </div>
    )
}

export default AddTech
