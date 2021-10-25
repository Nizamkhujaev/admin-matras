import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { SliderConfig } from '../../helpers/SliderConfig';
import AddImg from '../../assets/images/icons/addimg.svg'
import './edtiLoc.scss'
import request from '../../services/http';
import Language from '../../lang'
import { useLang } from '../../context/LanguageProvider'

import AddIcon from '@mui/icons-material/Add';

function EditLoc({ editLoc, setEditLoc, editLocId }) {

    const [address, setAdress] = useState('')
    const [location, setLocation] = useState('')
    const [desc, setDesc] = useState('')

    const adressText = useRef(null)
    const locationText = useRef(null)
    const activeText = useRef(null)
    const descText = useRef(null)

    async function handleSub(e) {
        e.preventDefault();

        let formData = new FormData();

        formData.append('file', productPicRef6.current.files[0])
        formData.append('file', productPicRef7.current.files[0])
        formData.append('file', productPicRef8.current.files[0])
        formData.append('address', adressText.current.value)
        formData.append('location', locationText.current.value)
        formData.append('active', activeText.current.checked)
        formData.append('text', descText.current.value)
        formData.append('id', editLocId)
        formData.append('token', window.localStorage.getItem('sessionToken'))
        
        let response = await fetch('http://localhost:4500/location', {
            method: 'PUT',
            body: formData
        })

        response = await response.json()

        if(response.status === 200) {
            window.location.reload();
            alert(response.message)
        } else {
            alert('Something went wrong')
        }
    }

    const [lang] = useLang()


    if (parseInt(editLocId) !== 0) {
        request.get(`location/${editLocId}`)
            .then(response => {
                setAdress(response.data.data.address)
                setLocation(response.data.data.location)
                setDesc(response.data.data.text)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const productPicRef6 = useRef(null)
    const productPicRef7 = useRef(null)
    const productPicRef8 = useRef(null)

    let uploadImg = ''
    function handlePic() {
        const reader = new FileReader();
        reader.addEventListener('load', function (e) {
            uploadImg = reader.result;
            document.querySelector('.edit-wrapperr').style.backgroundImage = `url(${uploadImg})`
        })
        reader.readAsDataURL(productPicRef6.current.files[0])
    }

    let uploadImg1 = ''
    function handlePic1() {
        const reader1 = new FileReader();
        reader1.addEventListener('load', function (e) {
            uploadImg1 = reader1.result;
            document.querySelector('.edit-wrapperr1').style.backgroundImage = `url(${uploadImg1})`
        })
        reader1.readAsDataURL(productPicRef7.current.files[0])
    }

    let uploadImg2 = ''
    function handlePic2() {
        const reader2 = new FileReader();
        reader2.addEventListener('load', function (e) {
            uploadImg2 = reader2.result;
            document.querySelector('.edit-wrapperr2').style.backgroundImage = `url(${uploadImg2})`
        })
        reader2.readAsDataURL(productPicRef8.current.files[0])
    }

    return (
        <div className={`edit-loc ${editLoc ? 'edit-loc-show' : ''}`}>
            <button onClick={() => setEditLoc(!editLoc)} className="add-category-top">
                <AddIcon />
            </button>
            <h4 className="add-category__title">
                {Language[lang].categoryAdd.edit}
            </h4>

            <form onSubmit={handleSub} className="edit-location-form">
                <div className="edit-location-form1">
                    <Slider {...SliderConfig}>
                        <div className="slider-wrapper edit-wrapperr">
                            <label className='slider-wrapper__label' htmlFor="img10">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>
                            <input
                                onChange={handlePic}
                                ref={productPicRef6}
                                accept="image/*"
                                className='slider-wrapper__input'
                                type="file"
                                id='img10'
                            />
                        </div>
                        <div id='second-img' className="slider-wrapper1 edit-wrapperr1">
                            <label className='slider-wrapper1__label1' htmlFor="img11">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>
                            <input
                                onChange={handlePic1}
                                ref={productPicRef7}
                                accept="image/*"
                                className='slider-wrapper1__input1'
                                type="file"
                                id='img11'
                            />
                        </div>
                        <div className="slider-wrapper2 edit-wrapperr2">
                            <label className='slider-wrapper__label' htmlFor="img12">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>
                            <input 
                                onChange={handlePic2}
                                ref={productPicRef8}
                                accept="image/*"
                                className='slider-wrapper__input'
                                type="file" id='img12'
                            />
                        </div>
                    </Slider>
                </div>

                <div className="edit-location-form2">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-location" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].location.locationName}
                        </label>
                        <input
                            defaultValue={address}
                            onChange={e => setAdress(e.target.value)}
                            id='product-location'
                            type="text"
                            className="add-product-form-2-wrapper__input"
                            ref={adressText}
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-locationn" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].location.locationPlace}
                        </label>
                        <input
                            defaultValue={location}
                            onChange={e => e.target.value}
                            id='product-locationn'
                            type="text"
                            className="add-product-form-2-wrapper__input"
                            ref={locationText}
                        />
                    </div>

                    <div className="add-category-form-bottom">
                        <label htmlFor="category-state" className="add-category-form-bottom__label">{Language[lang].categoryAdd.state}</label>
                        <label className="switch">
                            <input ref={activeText} id='category-state' type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>

                <div className="edit-location-form3">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="edit-textarea" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].location.text}
                        </label>
                        <textarea
                            defaultValue={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            id="edit-textarea"
                            ref={descText}
                            className="add-product-form-2-wrapper__textarea"></textarea>
                    </div>

                    <button className="add-product-form-4__btn">
                        {Language[lang].categoryAdd.edit}
                    </button>
                </div>

            </form>
        </div>
    )
}

export default EditLoc
