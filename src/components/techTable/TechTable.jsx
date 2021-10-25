import React, { useState, useEffect } from 'react'
import './techTable.scss'
import request from '../../services/http'
import Language from '../../lang'
import {useLang} from '../../context/LanguageProvider'

import TechItem from '../techItem'
import Loader from '../loader'

function TechTable({ setDeletedCategory, editCategory, setEditCategory, setRouteName, addTech, setAddTech,editTech,setEditTech,setEditTechId }) {

    const [tech, setTech] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    const [lang] = useLang();


    useEffect(() => {
        request.get('/technology')
            .then(response => {
                setTech({
                    isFetched: true,
                    data: response.data,
                    error: false
                })
            })
            .catch(err => { })
    }, [])

    return (
        <div className='tech-table'>
            <table className='tech-table-main'>
                <thead className='tech-table-main-header'>
                    <tr>
                        <th>{Language[lang].tech.name}</th>
                        <th>{Language[lang].tech.text}</th>
                        <th>{Language[lang].tech.video}</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tech.isFetched ? (
                            tech.data.data.map((item, index) => (
                                <TechItem
                                    key={index}
                                    names={item.name}
                                    videoLink={item.video_link}
                                    text={item.description}
                                    id={item.id}
                                    setDeletedCategory={setDeletedCategory}
                                    setRouteName={setRouteName}
                                    editCategory={editCategory}
                                    setEditCategory={setEditCategory}
                                    editTech={editTech}
                                    setEditTech = {setEditTech}
                                    setEditTechId={setEditTechId}
                                />
                            ))
                        ) :
                            <tr><td><Loader /></td></tr>
                    }
                </tbody>
            </table>

            <div className="tech-table-add">
                <button onClick={() => setAddTech(!addTech)} className="tech-table__btn-add">
                    {Language[lang].tech.add}
                </button>
            </div>
        </div>
    )
}

export default TechTable
