import React,{ useState, useRef} from 'react'
import './editTech.scss'

import AddIcon from '@mui/icons-material/Add';
import request from '../../services/http';
import Language from '../../lang'
import { useLang } from '../../context/LanguageProvider'
 
function EditTech({editTech,editTechId,setEditTech}) {

    const [techName, setTechName] = useState('')
    const [techText, setTechText] = useState('')
    const [photo,setPhoto] =useState('')
    const [video,setVideo] =useState('')

    const inputName = useRef(null)
    const description = useRef(null)
    const poster = useRef(null)
    const videoRef = useRef(null)
    
    function editter(e) {
        e.preventDefault();

        request.put('/technology', {
            id: editTechId,
            name: inputName.current.value,
            description: description.current.value,
            poster: poster.current.value,
            video: videoRef.current.value,
            token: window.localStorage.getItem('sessionToken')
        })
        .then(response => {
            if(response.data.status === 200) {
                setEditTech(!editTech)
                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    const [lang] = useLang()

    if(editTech) {
        request.get(`/technology/${editTechId}`)
        .then(response => {
            if(response.data.status === 200) {
                setTechName(response.data.data.name)
                setTechText(response.data.data.description)
                setPhoto(response.data.data.poster_link)
                setVideo(response.data.data.video_link)
            }

            // console.log(techName,techText,techActive,photo,video)
        })
        .catch(err => {
            console.log(err)
        })
    }

    // useEffect(() => {
    //     setTechName(techName)
    //     setTechText(techText)
    //     setPhoto(photo)
    //     setVideo(video)
    // },[])

    return (
        <div className={`edit-tech ${editTech ? 'edit-tech-show': ''}`}>
            <button onClick={() => setEditTech(!editTech)} className="add-category-top">
                <AddIcon />
            </button>

            <h4 className="add-tech__title">
                {Language[lang].categoryAdd.edit}
            </h4>

            <form onSubmit={editter} className="add-tech-form">
                <div className="add-tech-form1">
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-namee" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addTech.name}
                        </label>
                        <input
                            ref={inputName}
                            defaultValue={techName}
                            onChange={(e) => setTechName(e.target.value)}
                            id='product-namee' type="text" placeholder='masalan:'
                            className="add-product-form-2-wrapper__input"
                            autoComplete='off'
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-nameee" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addTech.text}
                        </label>
                        <input
                            onChange={e => setTechText(e.target.value)}
                            defaultValue={techText} id='product-nameee'
                            type="text" placeholder='masalan:'
                            className="add-product-form-2-wrapper__input"
                            ref={description}
                            autoComplete='off'
                        />
                    </div>

                    <div className="add-product-form-2-wrapper flexed">
                        <label htmlFor="product-newww" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addTech.new}
                        </label>
                        <label className="switch">
                            <input id='product-newww' type="checkbox" />
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
                            onChange={e => setPhoto(e.target.value)}
                            defaultValue={photo} id='product-photo'
                            type="text"
                            className="add-product-form-2-wrapper__input"
                            ref={poster}
                            autoComplete='off'
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="product-video" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].addTech.video}
                        </label>
                        <input
                            onChange={e => setVideo(e.target.value)}
                            defaultValue={video} id='product-video'
                            type="text"
                            className="add-product-form-2-wrapper__input"
                            ref={videoRef}
                            autoComplete='off'
                        />
                    </div>

                    <button className="add-product-form-4__btn">
                        {Language[lang].categoryAdd.edit}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditTech
