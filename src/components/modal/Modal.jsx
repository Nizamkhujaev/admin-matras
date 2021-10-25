import React from 'react'
import './modal.scss'

import Language from '../../lang'
import { useLang } from '../../context/LanguageProvider'

import AddIcon from '@mui/icons-material/Add';

function Modal({modal,setModal}) {

    const [lang] = useLang()

    function uz() {
        window.localStorage.setItem('lang', 'uz')
        window.location.reload()
    }

    function ru() {
        window.localStorage.setItem('lang', 'ru')
        window.location.reload()
    }

    function en() {
        window.localStorage.setItem('lang', 'en')
        window.location.reload()
    }

    function logOut() {
        window.localStorage.removeItem('sessionToken')
        window.localStorage.removeItem('admin__name')
        window.localStorage.removeItem('admin_img')
        window.localStorage.removeItem('lang')
        window.location.reload()
    }

    return (
        <div className={`modal ${modal ? 'modal-show' : ''}`}>
             <button onClick={() => setModal(!modal)} className="add-category-top">
                <AddIcon />
            </button>
            <div className="modal-top">
                <h4 onClick={uz} className={`modal-top__lang ${window.localStorage.getItem('lang') === 'uz' ? 'add' : ''}`}>Uz</h4>
                <h4 onClick={ru} className={`modal-top__lang ${window.localStorage.getItem('lang') === 'ru' ? 'add' : ''}`}>Ru</h4>
                <h4 onClick={en} className={`modal-top__lang ${window.localStorage.getItem('lang') === 'en' ? 'add' : ''}`}>En</h4>
            </div>

            <button onClick={logOut} className="modal__btn">
                {Language[lang].login.logOut}
            </button>
        </div>
    )
}

export default Modal
