import React from 'react'
import './category.scss'

import CategoryItem from '../../components/categoryItem'
import AddCategory from '../../components/addCategory'

function Categories({addCategory, setAddCategory,editCategory,setEditCategory,setDeletedCategory,setRouteName}) {

    let arr = [
        {
            id: 1,
            title: 'Model C'
        },
        {
            id: 2,
            title: 'Model B'
        },
        {
            id: 3,
            title: 'Model A'
        },
        {
            id: 4,
            title: 'Model W'
        },
        {
            id: 5,
            title: 'Model Q'
        },
        {
            id: 6,
            title: 'Model S'
        },
    ]

    return (
        <div className={`category`}>
            <div className="category-table">
                <div className="category-table-top">
                    <h4 className="category-table-top__title">Toifalar</h4>
                </div>
                <div className="category-bottom">
                    {
                        arr && arr.length > 0 ? (
                            arr.map((item,index) => (
                                <CategoryItem
                                    key={index}
                                    title={item.title}
                                    id={item.id}
                                    editCategory={editCategory}
                                    setEditCategory={setEditCategory}
                                    setDeletedCategory={setDeletedCategory}
                                    setRouteName={setRouteName}
                                />
                            ))
                        ) : ''
                    }
                </div>
            </div>

            <div className="category-add">
                <button onClick={() => setAddCategory(!addCategory)} className="category__btn-add">
                    Qo’shish
                </button>
            </div>

            <AddCategory
                addCategory={addCategory}
                setAddCategory={setAddCategory}
            />
        </div>
    )
}

export default Categories
