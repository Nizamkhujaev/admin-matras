import React, {useRef} from 'react'
import './slider.scss'

import labelImg from '../../assets/images/icons/addimg.svg'
import AddIcon from '@mui/icons-material/Add';

import request from '../../services/http/index'
import Language from '../../lang'
import { useLang } from '../../context/LanguageProvider'

function Slider({addCarousel,setAddCarousel}) {

    const productPicRef = useRef(null)
    const productName = useRef(null)

    const [lang] = useLang()

    let uploadImg = ''
    function handlePic() {
        const reader = new FileReader();
        reader.addEventListener('load', function (e) {
            uploadImg = reader.result;
            document.querySelector('.own-slider-form-wrapper').style.backgroundColor = '#EABF9F'
            document.querySelector('.own-slider-form-wrapper').style.backgroundImage = `url(${uploadImg})`
        })
        reader.readAsDataURL(productPicRef.current.files[0])
    }

    function handleSub(e) {
        e.preventDefault();

        let formData = new FormData();
        formData.append('file',productPicRef.current.files[0])
        formData.append('title', productName.current.value)
        formData.append('token', window.localStorage.getItem('sessionToken'))

        request.post('/carousel', formData)
        .then(response => {
            if(response.data.status === 201) {
                alert(response.data.message)
                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className={`own-slider ${addCarousel ? 'own-slider-show' : ''}`}>
            <button onClick={() => setAddCarousel(!addCarousel)} className="add-category-top">
                <AddIcon />
            </button>
            <form onSubmit={handleSub} className="own-slider-form">
                <div className="own-slider-form-wrapper">
                    <label htmlFor="hero-slider" className="own-slider-form__label">
                        <img src={labelImg} alt='' className="own-slider-form-lable__img" />
                    </label>
                    <input
                        type="file"
                        id='hero-slider'
                        className="own-slider-form__input"
                        onChange={handlePic}
                        ref={productPicRef}
                        accept="image/*"
                    />
                </div>

                <div className="own-slider-form-bottom">
                    <label htmlFor="hero-title" className="own-slider-form-bottom__label">{Language[lang].tech.text}</label>
                    <input
                        type="text"
                        id='hero-title'
                        className="own-slider-form-bottom__input"
                        ref={productName}
                    />
                </div>

                <button className="own-slider-form__btn">
                    {Language[lang].categoryAdd.add}
                </button>
            </form>
        </div>
    )
}

export default Slider
