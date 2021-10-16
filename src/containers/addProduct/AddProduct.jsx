import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { SliderConfig } from '../../helpers/SliderConfig';
import './addProduct.scss'

import AddIcon from '@mui/icons-material/Add';
import AddImg from '../../assets/images/icons/addimg.svg'

function AddProduct({ addProduct, setAddProduct }) {

    const productPicRef = useRef(null)
    const productPicRef1 = useRef(null)
    const productPicRef2 = useRef(null)

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

    const PriceInput = ({ initialValue = "", isNumber }) => {
        const [value, updateValue] = useState(initialValue);

        const update = (val) => {
            if (isNumber) {
                val = val.replace(/,/g, "");
                const x = Number(val);

                updateValue(x.toLocaleString());
            } else {
                updateValue(val);
            }
        };

        return (
            <input id='product-price' value={value} type="text" onChange={e => update(e.target.value)} placeholder='masalan: 20 000' className="add-product-form-2-wrapper__input" />
        );
    };

    return (
        <div className={`add-product  ${addProduct ? 'add-product-show' : ''}`}>
            <button onClick={() => setAddProduct(!addProduct)} className="add-category-top">
                <AddIcon />
            </button>

            <h4 className="add-product__title">
                Qo’shish
            </h4>

            <form className="add-product-form">


                <div className="upload-images">
                    <Slider {...SliderConfig}>
                        <div className="slider-wrapper">
                            <label className='slider-wrapper__label' htmlFor="img01">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>
                            <input onChange={handlePic} ref={productPicRef} accept="image/*" className='slider-wrapper__input' type="file" id='img01' />
                        </div>
                        <div id='second-img' className="slider-wrapper1">
                            <label className='slider-wrapper1__label1' htmlFor="img02">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>
                            <input onChange={handlePic1} ref={productPicRef1} accept="image/*" className='slider-wrapper1__input1' type="file" id='img02' />
                        </div>
                        <div className="slider-wrapper2">
                            <label className='slider-wrapper__label' htmlFor="img03">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>
                            <input onChange={handlePic2} ref={productPicRef2} accept="image/*" className='slider-wrapper__input' type="file" id='img03' />
                        </div>
                    </Slider>
                </div>



                <div className="add-product-form-2">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="select" className="add-product-form-2-wrapper-select-label">
                            Toifalar
                        </label>
                        <select id="select" className="add-product-form-2-wrapper-select">
                            <option defaultValue='1'  className="add-product-form-2-wrapper-select__option">masalan: Model C</option>
                            <option value="Model C" className="add-product-form-2-wrapper-select__option">Model C</option>
                            <option value="Model A" className="add-product-form-2-wrapper-select__option">Model A</option>
                            <option value="Model B" className="add-product-form-2-wrapper-select__option">Model B</option>
                            <option value="Model D" className="add-product-form-2-wrapper-select__option">Model D</option>
                        </select>
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-name" className="add-product-form-2-wrapper-select-label">
                            Tovar nomi
                        </label>
                        <input id='product-name' type="text" placeholder='masalan: Lux Soft Memory' className="add-product-form-2-wrapper__input" />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-price" className="add-product-form-2-wrapper-select-label">
                            Tovar nomi
                        </label>
                        <PriceInput initialValue={''} isNumber={true} />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-weight" className="add-product-form-2-wrapper-select-label">
                            Yuklama
                        </label>
                        <input id='product-weight' type="text" placeholder='masalan: 200 kg' className="add-product-form-2-wrapper__input" />
                    </div>

                </div>
                <div className="add-product-form-3">

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-size" className="add-product-form-2-wrapper-select-label">
                            Razmeri
                        </label>
                        <input id='product-size' type="text" placeholder='masalan: 200 x 140 x 40' className="add-product-form-2-wrapper__input" />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-garanty" className="add-product-form-2-wrapper-select-label">
                            Kafolat
                        </label>
                        <input id='product-garanty' type="text" placeholder='masalan: 1 yil' className="add-product-form-2-wrapper__input" />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-capacity" className="add-product-form-2-wrapper-select-label">
                            Sig’m
                        </label>
                        <input id='product-capacity' type="text" placeholder='masalan: 2' className="add-product-form-2-wrapper__input" />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-cost" className="add-product-form-2-wrapper-select-label">
                            Aksiya Narxi
                        </label>
                        <input id='product-cost' type="text" placeholder='masalan: 1 200 000' className="add-product-form-2-wrapper__input" />
                    </div>

                </div>

                <div className="add-product-form-4">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-textarea" className="add-product-form-2-wrapper-select-label">
                            Aksiya Narxi
                        </label>
                        <textarea placeholder='info' id="product-textarea" className="add-product-form-2-wrapper__textarea"></textarea>
                    </div>

                    <div className="add-product-form-2-wrapper flexed">
                        <label htmlFor="product-new" className="add-product-form-2-wrapper-select-label">
                            Navinka
                        </label>
                        <label className="switch">
                            <input id='product-new' type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div className="add-product-form-2-wrapper flexed">
                        <label htmlFor="product-active" className="add-product-form-2-wrapper-select-label">
                            Active
                        </label>
                        <label className="switch">
                            <input id='product-active' type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <button className="add-product-form-4__btn">
                        Qo’shish
                    </button>

                </div>
            </form>
        </div>
    )
}

export default AddProduct
