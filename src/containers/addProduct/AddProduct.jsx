import React, { useRef, useEffect, useState } from 'react'
import Slider from 'react-slick'
import { SliderConfig } from '../../helpers/SliderConfig';
import './addProduct.scss'
import request from '../../services/http';

import {useLang} from '../../context/LanguageProvider'
import Language from '../../lang'

import AddIcon from '@mui/icons-material/Add';
import AddImg from '../../assets/images/icons/addimg.svg'

function AddProduct({ addProduct, setAddProduct }) {

    const [categories, setCategories] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    const [lang] = useLang()

    useEffect(() => {
        if (addProduct) {
            request.get('/categories')
                .then(response => {
                    // console.log(response.data)
                    setCategories({
                        isFetched: true,
                        data: response.data,
                        error: false
                    })
                    // console.log(categories)
                })
                .catch(err => {
                    setCategories({
                        isFetched: false,
                        data: [],
                        error: err
                    })
                })
        }
    },[addProduct])

    async function handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData()

        formData.append('productName', productRef.current.value)
        formData.append('price', productPrice.current.value)
        formData.append('yuklama', productWeight.current.value)
        formData.append('kafolat', productGarany.current.value)
        formData.append('olchami', productSize.current.value)
        formData.append('sigimi', productCapacity.current.value)
        formData.append('description', productInfo.current.value)
        formData.append('category', categoryRef.current.value)
        formData.append('status', isActive.current.checked && newProduct.current.checked ? 'aksiya va yangi mahsulot' : newProduct.current.checked ? 'yangi mahsulot' : isActive.current.checked ? 'aksiya' : 'eski mahsulot')
        formData.append('aksiyaPrice', costPrice.current.value)
        formData.append('file', productPicRef.current.files[0] ? productPicRef.current.files[0] : null)
        formData.append('file', productPicRef1.current.files[0] ? productPicRef1.current.files[0] : null)
        formData.append('file', productPicRef2.current.files[0] ? productPicRef2.current.files[0] : null)
        formData.append('file', productPicRef3.current.files[0] ? productPicRef3.current.files[0] : null)
        formData.append('token', window.localStorage.getItem('sessionToken'))

        let response = await fetch(`http://localhost:4500/products`, {
            method: 'POST',
            body: formData
        })

        response = await response.json()

        if(response.status === 201) {
            alert(response.message)
            window.location.reload()
        }
    }

    const productPicRef = useRef(null)
    const productPicRef1 = useRef(null)
    const productPicRef2 = useRef(null)
    const categoryRef = useRef(null)
    const productRef = useRef(null)
    const productPrice = useRef(null)
    const productWeight = useRef(null)
    const productSize = useRef(null)
    const productGarany = useRef(null)
    const productCapacity = useRef(null)
    const costPrice = useRef(null)
    const productInfo = useRef(null)
    const newProduct = useRef(null)
    const isActive = useRef(null)
    const productPicRef3 = useRef(null)

    let uploadImg = ''
    function handlePic() {
        const reader = new FileReader();
        reader.addEventListener('load', function (e) {
            uploadImg = reader.result;
            document.querySelector('.slider-wrapper').style.backgroundImage = `url(${uploadImg})`
        })
        reader.readAsDataURL(productPicRef.current.files[0])
    }

    let uploadImg1 = ''
    function handlePic1() {
        const reader1 = new FileReader();
        reader1.addEventListener('load', function (e) {
            uploadImg1 = reader1.result;
            document.querySelector('#second-img').style.backgroundImage = `url(${uploadImg1})`
        })
        reader1.readAsDataURL(productPicRef1.current.files[0])
    }

    let uploadImg2 = ''
    function handlePic2() {
        const reader2 = new FileReader();
        reader2.addEventListener('load', function (e) {
            uploadImg2 = reader2.result;
            document.querySelector('.slider-wrapper2').style.backgroundImage = `url(${uploadImg2})`
        })
        reader2.readAsDataURL(productPicRef2.current.files[0])
    }

    let uploadImg3 = ''
    function handlePic3() {
        const reader3 = new FileReader();
        reader3.addEventListener('load', function (e) {
            uploadImg3 = reader3.result;
            document.querySelector('.slider-wrapper3').style.backgroundImage = `url(${uploadImg3})`
        })
        reader3.readAsDataURL(productPicRef3.current.files[0])
    }

    return (
        <div className={`add-product  ${addProduct ? 'add-product-show' : ''}`}>
            <button onClick={() => setAddProduct(!addProduct)} className="add-category-top">
                <AddIcon />
            </button>

            <h4 className="add-product__title">
                {Language[lang].addProduct.add}
            </h4>

            <form onSubmit={handleSubmit} className="add-product-form">


                <div className="upload-images">
                    <Slider {...SliderConfig}>
                        <div className="slider-wrapper">
                            <label className='slider-wrapper__label' htmlFor="img01">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>

                            <input
                                onChange={handlePic}
                                ref={productPicRef}
                                accept="image/*"
                                className='slider-wrapper__input'
                                type="file" id='img01'
                            />

                        </div>
                        <div id='second-img' className="slider-wrapper1">
                            <label className='slider-wrapper1__label1' htmlFor="img02">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>

                            <input
                                onChange={handlePic1}
                                ref={productPicRef1}
                                accept="image/*"
                                className='slider-wrapper1__input1'
                                type="file"
                                id='img02'
                            />

                        </div>
                        <div className="slider-wrapper2">
                            <label className='slider-wrapper__label' htmlFor="img03">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>

                            <input
                                onChange={handlePic2}
                                ref={productPicRef2}
                                accept="image/*"
                                className='slider-wrapper__input'
                                type="file"
                                id='img03'
                            />

                        </div>
                        <div className="slider-wrapper3">
                            <label className='slider-wrapper__label' htmlFor="img09">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>

                            <input
                                onChange={handlePic3}
                                ref={productPicRef3}
                                accept="image/*"
                                className='slider-wrapper__input'
                                type="file"
                                id='img09'
                            />

                        </div>
                    </Slider>
                </div>



                <div className="add-product-form-2">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="select" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.ategory}
                        </label>
                        <select ref={categoryRef} id="select" className="add-product-form-2-wrapper-select">
                            <option defaultValue='Model C' className='add-product-form-2-wrapper-select__option'>{Language[lang].categoryAdd.forExample}</option>
                            {
                                categories.isFetched && categories.data.data ? (
                                    categories.data.data.map((item,index) => (
                                        <option
                                            key={index}
                                            value={item.category_name}
                                            className='add-product-form-2-wrapper-select__option'
                                        >
                                            {item.category_name}
                                        </option>
                                    ))
                                ): ''
                            }
                        </select>
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-name" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.productName}
                        </label>

                        <input
                            ref={productRef}
                            id='product-name'
                            type="text"
                            className="add-product-form-2-wrapper__input"
                            placeholder={Language[lang].addProduct.forProduct}
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-price" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.price}
                        </label>

                        <input
                            ref={productPrice}
                            id='product-price'
                            type="text"
                            placeholder={Language[lang].addProduct.forPrice}
                            className="add-product-form-2-wrapper__input"
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-weight" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.weight}
                        </label>

                        <input
                            ref={productWeight}
                            id='product-weight'
                            type="text"
                            placeholder={Language[lang].addProduct.forWeight}
                            className="add-product-form-2-wrapper__input"
                        />
                    </div>

                </div>
                <div className="add-product-form-3">

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-size" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.size}
                        </label>

                        <input
                            ref={productSize}
                            id='product-size'
                            type="text"
                            placeholder={Language[lang].addProduct.forSize}
                            className="add-product-form-2-wrapper__input"
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-garanty" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.garanty}
                        </label>

                        <input
                            ref={productGarany}
                            id='product-garanty'
                            type="text"
                            placeholder={Language[lang].addProduct.forGarant}
                            className="add-product-form-2-wrapper__input"
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-capacity" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.capacity}
                        </label>

                        <input
                            ref={productCapacity}
                            id='product-capacity'
                            type="text"
                            placeholder={Language[lang].addProduct.forMas}
                            className="add-product-form-2-wrapper__input"
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-cost" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.costPrice}
                        </label>

                        <input
                            ref={costPrice}
                            id='product-cost'
                            type="text"
                            placeholder={Language[lang].addProduct.forCost}
                            className="add-product-form-2-wrapper__input"
                        />
                    </div>

                </div>

                <div className="add-product-form-4">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-textarea" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.info}
                        </label>

                        <textarea
                            ref={productInfo}
                            placeholder={Language[lang].addProduct.forInfo}
                            id="product-textarea"
                            className="add-product-form-2-wrapper__textarea"
                        ></textarea>
                    </div>

                    <div className="add-product-form-2-wrapper flexed">
                        <label htmlFor="product-new" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.new}
                        </label>
                        <label className="switch">
                            <input
                                ref={newProduct}
                                id='product-new'
                                type="checkbox"
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div className="add-product-form-2-wrapper flexed">
                        <label htmlFor="product-active" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.active}
                        </label>
                        <label className="switch">
                            <input
                                ref={isActive}
                                id='product-active'
                                type="checkbox"
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <button className="add-product-form-4__btn">
                        {Language[lang].addProduct.add}
                    </button>

                </div>
            </form>
        </div>
    )
}

export default AddProduct
