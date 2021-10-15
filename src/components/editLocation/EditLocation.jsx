import React, { useRef } from 'react'
import Slider from 'react-slick'
import { SliderConfig } from '../../helpers/SliderConfig';
import AddImg from '../../assets/images/icons/addimg.svg'
import './editLocation.scss'

import AddIcon from '@mui/icons-material/Add';

function EditLocation({editLocation, setEditLocation}) {

    const productPicRef = useRef(null)
    const productPicRef1 = useRef(null)
    const productPicRef2 = useRef(null)

    let uploadImg = ''
    function handlePic() {
        const reader = new FileReader();
        reader.addEventListener('load', function (e) {
            uploadImg = reader.result;
            document.querySelector('.edit-wrapper').style.backgroundImage = `url(${uploadImg})`
        })
        reader.readAsDataURL(productPicRef.current.files[0])
    }

    let uploadImg1 = ''
    function handlePic1() {
        const reader1 = new FileReader();
        reader1.addEventListener('load', function (e) {
            uploadImg1 = reader1.result;
            document.querySelector('.edit-wrapper1').style.backgroundImage = `url(${uploadImg1})`
        })
        reader1.readAsDataURL(productPicRef1.current.files[0])
    }

    let uploadImg2 = ''
    function handlePic2() {
        const reader2 = new FileReader();
        reader2.addEventListener('load', function (e) {
            uploadImg2 = reader2.result;
            document.querySelector('.edit-wrapper2').style.backgroundImage = `url(${uploadImg2})`
        })
        reader2.readAsDataURL(productPicRef2.current.files[0])
    }

    return (
        <div className={`edit-location ${editLocation ? 'edit-location-show' : ''}`}>
            <button onClick={() => setEditLocation(!editLocation)} className="add-category-top">
                <AddIcon />
            </button>

            <h4 className="edit-location__title">
                Tahrirlash
            </h4>

            <form className="edit-location-form">
                <div className="edit-location-form1">
                    <Slider {...SliderConfig}>
                        <div className="slider-wrapper edit-wrapper">
                            <label className='slider-wrapper__label' htmlFor="img04">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>
                            <input onChange={handlePic} ref={productPicRef} accept="image/*" className='slider-wrapper__input' type="file" id='img04' />
                        </div>
                        <div id='second-img' className="slider-wrapper1 edit-wrapper1">
                            <label className='slider-wrapper1__label1' htmlFor="img05">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>
                            <input onChange={handlePic1} ref={productPicRef1} accept="image/*" className='slider-wrapper1__input1' type="file" id='img05' />
                        </div>
                        <div className="slider-wrapper2 edit-wrapper2">
                            <label className='slider-wrapper__label' htmlFor="img06">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>
                            <input onChange={handlePic2} ref={productPicRef2} accept="image/*" className='slider-wrapper__input' type="file" id='img06' />
                        </div>
                    </Slider>
                </div>

                <div className="edit-location-form2">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-location" className="add-product-form-2-wrapper-select-label">
                            Manzil
                        </label>
                        <input id='product-location' type="text" className="add-product-form-2-wrapper__input" />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-locationn" className="add-product-form-2-wrapper-select-label">
                            Location
                        </label>
                        <input id='product-locationn' type="text" className="add-product-form-2-wrapper__input" />
                    </div>


                    <div className="add-product-form-2-wrapper flexed">
                        <label htmlFor="product-state" className="add-product-form-2-wrapper-select-label">
                            Holat
                        </label>
                        <label className="switch">
                            <input id='product-state' type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>


                </div>

                <div className="edit-location-form3">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="edit-textarea" className="add-product-form-2-wrapper-select-label">
                            Matn
                        </label>
                        <textarea id="edit-textarea" className="add-product-form-2-wrapper__textarea"></textarea>
                    </div>

                    <button className="add-product-form-4__btn">
                        Qo’shish
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditLocation
