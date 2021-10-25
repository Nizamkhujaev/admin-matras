import React, { useState, useEffect } from 'react'
import './category.scss'
import request from '../../services/http'
import Language from '../../lang'
import { useLang } from '../../context/LanguageProvider'

import CategoryItem from '../../components/categoryItem'
import AddCategory from '../../components/addCategory'
import Loader from '../../components/loader'

function Categories({ addCategory,setEditCatId, setAddCategory, editCategory, setEditCategory, setDeletedCategory, setRouteName,categoryBlock,setCategoryBlock }) {

    const [categories, setCategories] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    const [lang] = useLang()

    try {

        useEffect(() => {
            let abortController = new AbortController();
            request.get('/categories')
                .then((response) => {
                    setCategories({
                        isFetched: true,
                        data: response.data,
                        error: false
                    })
                })
                .catch((error) => {
                    setCategories({
                        isFetched: false,
                        data: [],
                        error: error
                    })
                })
            return () => {
                abortController.abort();
            }
        }, [])
    } catch (error) {

    }

    return (
        <div className={`category`}>
            <div className="category-table">
                <div className="category-table-top">
                    <h4 className="category-table-top__title">{Language[lang].categories.categoryName}</h4>
                </div>
                <div className="category-bottom">
                    {
                        // console.log(categories.data.data)
                        categories.isFetched && categories.data.data ? (
                            categories.data.data.map((item, index) => (
                                <CategoryItem
                                    key={index}
                                    title={item.category_name}
                                    id={item.category_id}
                                    editCategory={editCategory}
                                    setEditCategory={setEditCategory}
                                    setDeletedCategory={setDeletedCategory}
                                    setRouteName={setRouteName}
                                    categoryBlock={categoryBlock}
                                    setCategoryBlock={setCategoryBlock}
                                    setEditCatId={setEditCatId}
                                />
                            ))
                        ) : <Loader />

                    }
                </div>
            </div>

            <div className="category-add">
                <button onClick={() => setAddCategory(!addCategory)} className="category__btn-add">
                    {Language[lang].categories.categoryAdd}
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
