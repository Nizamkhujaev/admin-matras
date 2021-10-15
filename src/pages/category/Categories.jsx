import React, { useState, useEffect } from 'react'
import './category.scss'

import axios from 'axios'

import CategoryItem from '../../components/categoryItem'
import AddCategory from '../../components/addCategory'
import Loader from '../../components/loader'

function Categories({ addCategory, setAddCategory, editCategory, setEditCategory, setDeletedCategory, setRouteName }) {

    const [categories, setCategories] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    useEffect(() => {
        axios.get('https://matras-app.herokuapp.com/categories')
            .then((response) => {
                // console.log(response.data.data)
                setCategories({
                    isFetched: true,
                    data: response.data,
                    error: false
                })
            })
            .catch((error) => {
                // console.log(error)
                setCategories({
                    isFetched: false,
                    data: [],
                    error: error
                })
            })
    }, [])

    // let arr = [
    //     {
    //         id: 1,
    //         title: 'Model C'
    //     },
    //     {
    //         id: 2,
    //         title: 'Model B'
    //     },
    //     {
    //         id: 3,
    //         title: 'Model A'
    //     },
    //     {
    //         id: 4,
    //         title: 'Model W'
    //     },
    //     {
    //         id: 5,
    //         title: 'Model Q'
    //     },
    //     {
    //         id: 6,
    //         title: 'Model S'
    //     },
    // ]

    return (
        <div className={`category`}>
            <div className="category-table">
                <div className="category-table-top">
                    <h4 className="category-table-top__title">Toifalar</h4>
                </div>
                <div className="category-bottom">
                    {
                        // console.log(categories.data.data)
                        categories.isFetched ?  (
                            categories.data.data.map((item, index) => (
                                <CategoryItem
                                    key={index}
                                    title={item.category_name}
                                    id={item.category_id}
                                    editCategory={editCategory}
                                    setEditCategory={setEditCategory}
                                    setDeletedCategory={setDeletedCategory}
                                    setRouteName={setRouteName}
                                />
                            ))
                        ) : <Loader/>
                            
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
