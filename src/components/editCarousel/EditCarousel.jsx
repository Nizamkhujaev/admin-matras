import React, { useRef, useState } from 'react'
import './editCarousel.scss'
import request from '../../services/http/index.js'
import labelImg from '../../assets/images/icons/addimg.svg'
import AddIcon from '@mui/icons-material/Add';
import Language from '../../lang'
import { useLang } from '../../context/LanguageProvider'

function EditCarousel({ editCarousel, setEditCarousel, editedCarousel }) {

    const [text, setText] = useState('')

    const productPicRef = useRef(null)
    const title = useRef(null)

    if (editCarousel) {
        request.get(`/carousel/${editedCarousel}`)
            .then(res => {
                setText(res.data.data.title)
            })
            .catch(err => {
                console.log(err)
            })
    }

    let uploadImg = ''
    function handlePic() {
        const reader = new FileReader();
        reader.addEventListener('load', function (e) {
            uploadImg = reader.result;
            document.querySelector('.own-slider-form-wrapperr').style.backgroundColor = '#EABF9F'
            document.querySelector('.own-slider-form-wrapperr').style.backgroundImage = `url(${uploadImg})`
        })
        reader.readAsDataURL(productPicRef.current.files[0])
    }

    const [lang] = useLang();

    async function sub(e) {
        e.preventDefault();

        let formData = new FormData()

        formData.append('file', productPicRef.current.files[0])
        formData.append('id', editedCarousel)
        formData.append('title', title.current.value)
        formData.append('token', window.localStorage.getItem('sessionToken'))

        let response = await fetch('http://localhost:4500/carousel', {
            method: 'PUT',
            body: formData
        })

        response = await response.json()
        

        if(response.status === 200) {
            alert(response.message)
            window.location.reload();
        }
    }

    return (
        <div className={`edit-carousel ${editCarousel ? 'edit-carousel-show' : ''} `}>
            <button onClick={() => setEditCarousel(!editCarousel)} className="add-category-top">
                <AddIcon />
            </button>
            <form onSubmit={sub} className="own-slider-form">
                <div className="own-slider-form-wrapperr">
                    <label htmlFor="hero-slidere" className="own-slider-form__label">
                        <img src={labelImg} alt='' className="own-slider-form-lable__img" />
                    </label>
                    <input
                        type="file"
                        id='hero-slidere'
                        className="own-slider-form__input"
                        onChange={handlePic}
                        ref={productPicRef}
                        accept="image/*"
                    />
                </div>

                <div className="own-slider-form-bottom">
                    <label htmlFor="hero-title" className="own-slider-form-bottom__label">
                        {Language[lang].tech.text}
                    </label>
                    <input
                        type="text"
                        id='hero-title'
                        className="own-slider-form-bottom__input"
                        defaultValue={text}
                        onChange={e => setText(e.target.value)}
                        ref={title}
                    />
                </div>

                <button className="own-slider-form__btn">
                    {Language[lang].categoryAdd.edit}
                </button>
            </form>
        </div>
    )
}

export default EditCarousel
