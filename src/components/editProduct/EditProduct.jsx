import React, { useState, useEffect,useRef } from 'react'
import Slider from 'react-slick'
import { SliderConfig } from '../../helpers/SliderConfig';
import './editProduct.scss'

import AddIcon from '@mui/icons-material/Add';
import AddImg from '../../assets/images/icons/addimg.svg'
import request from '../../services/http';
import { useLang } from '../../context/LanguageProvider'
import Language from '../../lang/index'

function EditProduct({ editProduct, setProduct, editProductId }) {

    const productPicRef = useRef(null)
    const productPicRef1 = useRef(null)
    const productPicRef2 = useRef(null)
    const productPicRef3 = useRef(null)

    const categoryNameRef = useRef(null)
    const productNameRef = useRef(null)
    const productPriceRef = useRef(null)
    const productWeightRef = useRef(null)
    const productSizeRef = useRef(null)
    const productGarantyRef = useRef(null)
    const productCapacityRef = useRef(null)
    const costPriceRef = useRef(null)
    const newProduct = useRef(null)
    const isActive = useRef(null)
    const myRef = React.createRef()

    const [categoryName,setCategoryName] = useState('')
    const [productName, setProductName] = useState('')
    const [productPrice,setProductPrice] = useState('')
    const [productWeight,setProductWeight] = useState('')
    const [productSize, setProductSize] = useState('')
    const [productGaranty,setProductGaranty] = useState('')
    const [productCapacity, setProductCapacity] = useState('')
    const [costPrice,setCostPrice] = useState('')
    const [productInfo, setProductInfo] = useState('')

    const [categories, setCategories] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    const [lang] = useLang();

    if(editProduct && categories.isFetched && categories.data.data) {
        request.get(`products/${editProductId}`)
        .then(response => {
            // console.log(response.data.data)
            setCategoryName(response.data.data.category_name)
            setProductName(response.data.data.product_name)
            setProductPrice(response.data.data.price)
            setProductWeight(response.data.data.yuklama)
            setProductSize(response.data.data.olchami)
            setProductGaranty(response.data.data.kafolat)
            setProductCapacity(response.data.data.sigimi)
            setCostPrice(response.data.data.aksiya_price)
            setProductInfo(response.data.data.description)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        if (editProduct) {
            request.get('/categories')
                .then(response => {
                    setCategories({
                        isFetched: true,
                        data: response.data,
                        error: false
                    })
                })
                .catch(err => {
                    setCategories({
                        isFetched: false,
                        data: [],
                        error: err
                    })
                })
        }
    }, [editProduct])


    let uploadImg = ''
    function handlePic() {
        const reader = new FileReader();
        reader.addEventListener('load', function (e) {
            uploadImg = reader.result;
            document.querySelector('.slider-wrappper').style.backgroundImage = `url(${uploadImg})`
        })
        reader.readAsDataURL(productPicRef.current.files[0])
    }

    let uploadImg1 = ''
    function handlePic1() {
        const reader1 = new FileReader();
        reader1.addEventListener('load', function (e) {
            uploadImg1 = reader1.result;
            document.querySelector('#second-immg').style.backgroundImage = `url(${uploadImg1})`
        })
        reader1.readAsDataURL(productPicRef1.current.files[0])
    }

    let uploadImg2 = ''
    function handlePic2() {
        const reader2 = new FileReader();
        reader2.addEventListener('load', function (e) {
            uploadImg2 = reader2.result;
            document.querySelector('.slider-wrappper2').style.backgroundImage = `url(${uploadImg2})`
        })
        reader2.readAsDataURL(productPicRef2.current.files[0])
    }

    let uploadImg3 = ''
    function handlePic3() {
        const reader3 = new FileReader();
        reader3.addEventListener('load', function (e) {
            uploadImg3 = reader3.result;
            document.querySelector('.slider-wrappper3').style.backgroundImage = `url(${uploadImg3})`
        })
        reader3.readAsDataURL(productPicRef3.current.files[0])
    }

    async function handleSubmit(e) {
        e.preventDefault();

        // console.log(myRef.current.value)

        let formData = new FormData();

        formData.append('productName', productNameRef.current.value)
        formData.append('id', editProductId)
        formData.append('price', productPriceRef.current.value)
        formData.append('yuklama', productWeightRef.current.value)
        formData.append('kafolat', productGarantyRef.current.value)
        formData.append('olchami', productSizeRef.current.value)
        formData.append('sigimi', productCapacityRef.current.value)
        formData.append('description', myRef.current.value)
        formData.append('category', categoryNameRef.current.value)
        formData.append('status', isActive.current.checked && newProduct.current.checked ? 'aksiya va yangi mahsulot' : newProduct.current.checked ? 'yangi mahsulot' : isActive.current.checked ? 'aksiya' : 'eski mahsulot')
        formData.append('aksiyaPrice', costPriceRef.current.value)
        formData.append('file', productPicRef.current.files[0] ? productPicRef.current.files[0] : null)
        formData.append('file', productPicRef1.current.files[0] ? productPicRef1.current.files[0] : null)
        formData.append('file', productPicRef2.current.files[0] ? productPicRef2.current.files[0] : null)
        formData.append('file', productPicRef3.current.files[0] ? productPicRef3.current.files[0] : null)
        formData.append('token', window.localStorage.getItem('sessionToken'))
        
        let response = await fetch(`http://localhost:4500/products`, {
            method: 'PUT',
            body: formData
        })

        response = await response.json()
        if(response.status === 200) {
            alert(response.message)
            window.location.reload()
        } else {
            alert('Something went wrong')
        }

    }

    return (
        <div className={`edit-product ${editProduct ? 'edit-product-show' : ''}`}>
            <button onClick={() => setProduct(!editProduct)} className="add-category-top">
                <AddIcon />
            </button>

            <h4 className="add-product__title">
                {Language[lang].categoryAdd.edit}
            </h4>

            <form onSubmit={handleSubmit} className="add-product-form">


                <div className="upload-images">
                    <Slider {...SliderConfig}>
                        <div className="slider-wrappper">
                            <label className='slider-wrapper__label' htmlFor="img21">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>

                            <input
                                accept="image/*"
                                className='slider-wrapper__input'
                                type="file" id='img21'
                                onChange={handlePic}
                                ref={productPicRef}
                            />

                        </div>
                        <div id='second-immg' className="slider-wrapper1">
                            <label className='slider-wrapper1__label1' htmlFor="img22">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>

                            <input
                                accept="image/*"
                                className='slider-wrapper1__input1'
                                type="file"
                                id='img22'
                                onChange={handlePic1}
                                ref={productPicRef1}
                            />

                        </div>
                        <div className="slider-wrappper2">
                            <label className='slider-wrapper__label' htmlFor="img23">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>

                            <input
                                accept="image/*"
                                className='slider-wrapper__input'
                                type="file"
                                id='img23'
                                onChange={handlePic2}
                                ref={productPicRef2}
                            />

                        </div>
                        <div className="slider-wrappper3">
                            <label className='slider-wrapper__label' htmlFor="img19">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>

                            <input
                                accept="image/*"
                                className='slider-wrapper__input'
                                type="file"
                                id='img19'
                                onChange={handlePic3}
                                ref={productPicRef3}
                            />

                        </div>
                    </Slider>
                </div>



                <div className="add-product-form-2">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="select" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].categoryAdd.categoryName}
                        </label>
                        <select ref={categoryNameRef} id="select" className="add-product-form-2-wrapper-select">
                            {/* <option defaultValue='Model C' className='add-product-form-2-wrapper-select__option'>masalan: Model C</option> */}
                            {
                                categories.isFetched && categories.data.data ? (
                                    categories.data.data.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.category_name}
                                            className='add-product-form-2-wrapper-select__option'
                                            defaultValue={categoryName}
                                        >
                                            {item.category_name}
                                        </option>
                                    ))
                                ) : ''
                            }
                        </select>
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-name" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.productName}
                        </label>

                        <input
                            id='product-name'
                            type="text"
                            placeholder='masalan: Lux Soft Memory'
                            className="add-product-form-2-wrapper__input"
                            defaultValue={productName}
                            onChange={e => setProductName(e.target.value)}
                            ref={productNameRef}
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-price" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.price}
                        </label>

                        <input
                            id='product-price'
                            type="text"
                            placeholder='masalan: 20 000'
                            className="add-product-form-2-wrapper__input"
                            defaultValue={productPrice}
                            onChange={e => setProductPrice(e.target.value)}
                            ref={productPriceRef}
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-weight" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.weight}
                        </label>

                        <input
                            id='product-weight'
                            type="text"
                            placeholder='masalan: 200 kg'
                            className="add-product-form-2-wrapper__input"
                            defaultValue={productWeight}
                            onChange={e => setProductWeight(e.target.value)}
                            ref={productWeightRef}
                        />
                    </div>

                </div>
                <div className="add-product-form-3">

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-size" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.size}
                        </label>

                        <input
                            id='product-size'
                            type="text"
                            placeholder='masalan: 200 x 140 x 40'
                            className="add-product-form-2-wrapper__input"
                            defaultValue={productSize}
                            onChange={(e) => setProductSize(e.target.value)}
                            ref={productSizeRef}
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-garanty" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.garanty}
                        </label>

                        <input
                            id='product-garanty'
                            type="text"
                            placeholder='masalan: 1 yil'
                            className="add-product-form-2-wrapper__input"
                            defaultValue={productGaranty}
                            onChange={e => setProductGaranty(e.target.value)}
                            ref={productGarantyRef}
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-capacity" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.capacity}
                        </label>

                        <input
                            id='product-capacity'
                            type="text"
                            placeholder='masalan: 2'
                            className="add-product-form-2-wrapper__input"
                            defaultValue={productCapacity}
                            onChange={e => setProductCapacity(e.target.value)}
                            ref={productCapacityRef}
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-cost" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.costPrice}
                        </label>

                        <input
                            id='product-cost'
                            type="text"
                            placeholder='masalan: 1 200 000'
                            className="add-product-form-2-wrapper__input"
                            defaultValue={costPrice}
                            onChange={e => setCostPrice(e.target.value)}
                            ref={costPriceRef}
                        />
                    </div>

                </div>

                <div className="add-product-form-4">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-textarea" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.info}
                        </label>

                        <textarea
                            placeholder='info'
                            id="product-textarea"
                            className="add-product-form-2-wrapper__textarea"
                            defaultValue={productInfo}
                            onChange={e => setProductInfo(e.target.value)}
                            ref={myRef}
                        ></textarea>
                    </div>

                    <div className="add-product-form-2-wrapper flexed">
                        <label htmlFor="product-new" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addProduct.new}
                        </label>
                        <label className="switch">
                            <input
                                id='product-new'
                                type="checkbox"
                                ref={newProduct}
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
                                id='product-active'
                                type="checkbox"
                                ref={isActive}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <button className="add-product-form-4__btn">
                        {Language[lang].categoryAdd.edit}
                    </button>

                </div>
            </form>
        </div>
    )
}

export default EditProduct
