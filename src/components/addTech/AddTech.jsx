import React from 'react'
import './addTech.scss'

import AddIcon from '@mui/icons-material/Add';

function AddTech({addTech,setAddTech}) {
    return (
        <div className={`add-tech ${addTech ? 'add-tech-show' : ''}`}>
            <button onClick={() => setAddTech(!addTech)} className="add-category-top">
                <AddIcon />
            </button>

            <h4 className="add-tech__title">
                Qo’shish
            </h4>

            <form className="add-tech-form">
                <div className="add-tech-form1">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-namee" className="add-product-form-2-wrapper-select-label">
                            Nomi
                        </label>
                        <input id='product-namee' type="text" placeholder='masalan:' className="add-product-form-2-wrapper__input" />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-nameee" className="add-product-form-2-wrapper-select-label">
                            Nomi
                        </label>
                        <input id='product-nameee' type="text" placeholder='masalan:' className="add-product-form-2-wrapper__input" />
                    </div>

                    <div className="add-product-form-2-wrapper flexed">
                        <label htmlFor="product-neww" className="add-product-form-2-wrapper-select-label">
                            Navinka
                        </label>
                        <label className="switch">
                            <input id='product-neww' type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>

                </div>

                <div className="add-tech-form2">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-photo" className="add-product-form-2-wrapper-select-label">
                            Rasm
                        </label>
                        <input id='product-photo' type="text" className="add-product-form-2-wrapper__input" />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-video" className="add-product-form-2-wrapper-select-label">
                            Video
                        </label>
                        <input id='product-video' type="text" className="add-product-form-2-wrapper__input" />
                    </div>

                    <button className="add-product-form-4__btn">
                        Qo’shish
                    </button>
                </div>
            </form>

        </div>
    )
}

export default AddTech
