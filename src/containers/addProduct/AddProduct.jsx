import React, {useRef} from 'react'
import Slider from 'react-slick'
import { SliderConfig } from '../../helpers/SliderConfig';
import './addProduct.scss'

import AddIcon from '@mui/icons-material/Add';
import AddImg from '../../assets/images/icons/addimg.svg'

function AddProduct() {

    const productPicRef = useRef(null)
    const productPicRef1 = useRef(null)
    const productPicRef2 = useRef(null)

    let uploadImg = ''
    function handlePic() {
        const reader = new FileReader();
        reader.addEventListener('load', function(e) {
            uploadImg = reader.result;
            document.querySelector('.slider-wrapper').style.backgroundImage = `url(${uploadImg})` 
        })
        reader.readAsDataURL(productPicRef.current.files[0])
    }

    let uploadImg1 = ''
    function handlePic1() {
        const reader1 = new FileReader();
        reader1.addEventListener('load', function(e) {
            uploadImg1 = reader1.result;
            document.querySelector('#second-img').style.backgroundImage = `url(${uploadImg1})` 
        })
        reader1.readAsDataURL(productPicRef1.current.files[0])
    }

    let uploadImg2 = ''
    function handlePic2() {
        const reader2 = new FileReader();
        reader2.addEventListener('load', function(e) {
            uploadImg2 = reader2.result;
            document.querySelector('.slider-wrapper2').style.backgroundImage = `url(${uploadImg2})` 
        })
        reader2.readAsDataURL(productPicRef2.current.files[0])
    }

    return (
        <div className='add-product'>
            <button className="add-category-top">
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
                            <label className='slider-wrapper1__label1' htmlFor="img01">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>
                            <input onChange={handlePic1} ref={productPicRef1} accept="image/*" className='slider-wrapper1__input1' type="file" id='img01' />
                        </div>
                        <div className="slider-wrapper2">
                            <label className='slider-wrapper__label' htmlFor="img01">
                                <img src={AddImg} alt="" className="slider-wrapper__img" />
                            </label>
                            <input onChange={handlePic2} ref={productPicRef2} accept="image/*" className='slider-wrapper__input' type="file" id='img01' />
                        </div>
                    </Slider>
                </div>



                <div className="add-product-form-2"></div>
                <div className="add-product-form-3"></div>
                <div className="add-product-form-4"></div>
            </form>
        </div>
    )
}

export default AddProduct
