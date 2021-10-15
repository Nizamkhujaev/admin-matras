import React from 'react'
import './techTable.scss'

import TechItem from '../techItem'

function TechTable({ setDeletedCategory, editCategory, setEditCategory, setRouteName,addTech,setAddTech }) {

    let arr = [
        {
            id: 1,
            name: 'С зависимыми пружинами',
            text: 'Enim urna...',
            link: 'https://www.youtube.com/watch?v=GzheULZBcs8'
        },
        {
            id: 2,
            name: 'Menory foam',
            text: 'Enim urna...',
            link: 'https://www.youtube.com/watch?v=AbGtXLRciLk&t=927s'
        },
        {
            id: 3,
            name: 'Menory foam',
            text: 'Ключевые цифры, характеризующие нашу продукцию',
            link: 'youtube.com...'
        },
    ]

    return (
        <div className='tech-table'>
            <table className='tech-table-main'>
                <thead className='tech-table-main-header'>
                    <tr>
                        <th>Nomlari</th>
                        <th>Matn</th>
                        <th>Video</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        arr && arr.length > 0 ? (
                            arr.map((item, index) => (
                                <TechItem
                                    key={index}
                                    names={item.name}
                                    videoLink={item.link}
                                    text={item.text}
                                    id={item.id}
                                    setDeletedCategory={setDeletedCategory}
                                    setRouteName={setRouteName}
                                    editCategory={editCategory}
                                    setEditCategory={setEditCategory}
                                />
                            ))
                        ) : ''
                    }
                </tbody>
            </table>

            <div className="tech-table-add">
                <button onClick={() => setAddTech(!addTech)} className="tech-table__btn-add">
                    Qo’shish
                </button>
            </div>
        </div>
    )
}

export default TechTable
