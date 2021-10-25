import React, { useState, useRef } from 'react'
import './editStat.scss'

import AddIcon from '@mui/icons-material/Add';
import request from '../../services/http';
import Language from '../../lang'
import {useLang } from '../../context/LanguageProvider'

function EditStat({ stat, setStat }) {

    const [resYear, setResYear] = useState('')
    const [resClient, setResClient] = useState('')
    const [resGarant, setResGarant] = useState('')
    const [resLog, setResLog] = useState('')

    const year = useRef(null)
    const client = useRef(null)
    const garant = useRef(null)
    const log = useRef(null)

    const [lang] = useLang();

    if (stat) {
        request.get('/stats')
            .then(response => {
                setResYear(response.data.data[0].experiance)
                setResClient(response.data.data[0].clients)
                setResGarant(response.data.data[0].graduate)
                setResLog(response.data.data[0].delivery)
            })
            .catch(err => {
                console.log(err)
            })
    }

    function sub(e) {
        e.preventDefault()

        request.put('/stats', {
            id: 5,
            experiance: year.current.value,
            clients: client.current.value,
            graduate: garant.current.value,
            delivery: log.current.value,
            token: window.localStorage.getItem('sessionToken')
        })
        .then(res => {
            if(res.data.status === 200) {
                alert(res.data.message)
                setStat(!stat)
                window.location.reload()
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className={`edit-stat ${stat ? 'edit-stat-show' : ''}`}>
            <button onClick={() => setStat(!stat)} className="add-category-top">
                <AddIcon />
            </button>

            <form onSubmit={sub} className="edit-stat-form">

                <div className='edit-stat-form-left'>
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="prodduct-name" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].res.exp}
                        </label>

                        <input
                            id='prodduct-name'
                            type="text"
                            className="add-product-form-2-wrapper__input"
                            defaultValue={resYear}
                            onChange={(e) => setResYear(e.target.value)}
                            ref = {year}
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="proddduct-name" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].res.clients}
                        </label>

                        <input
                            id='proddduct-name'
                            type="text"
                            className="add-product-form-2-wrapper__input"
                            defaultValue={resClient}
                            onChange={e => setResClient(e.target.value)}
                            ref = {client}
                        />
                    </div>
                </div>

                <div>
                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="proodduct-name" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].res.garant}
                        </label>

                        <input
                            id='proodduct-name'
                            type="text"
                            className="add-product-form-2-wrapper__input"
                            defaultValue={resGarant}
                            onChange={e => setResGarant(e.target.value)}
                            ref = {garant}
                        />
                    </div>

                    <div className="add-product-form-2-wrapper">
                        <label htmlFor="prodductt-name" className="add-product-form-2-wrapper-select-label">
                            {Language[lang].res.del}
                        </label>

                        <input
                            id='prodductt-name'
                            type="text"
                            className="add-product-form-2-wrapper__input"
                            defaultValue={resLog}
                            onChange={e => setResLog(e.target.value)}
                            ref ={log}
                        />
                    </div>
                </div>

                <button className="edit-stat-form__btn">
                    Edit
                </button>

            </form>
        </div>
    )
}

export default EditStat
