import React from 'react'
import './category.scss'

import CategoryItem from '../../components/categoryItem'
import AddCategory from '../../components/addCategory'

function Categories({addCategory, setAddCategory}) {

    return (
        <div className={`category`}>
            <div className="category-table">
                <div className="category-table-top">
                    <h4 className="category-table-top__title">Toifalar</h4>
                </div>
                <div className="category-bottom">
                    <CategoryItem
                        title='Model C'
                    />
                    <CategoryItem
                        title='Model C'
                    />
                    <CategoryItem
                        title='Model C'
                    />
                    <CategoryItem
                        title='Model C'
                    />
                    <CategoryItem
                        title='Model C'
                    />
                     <CategoryItem
                        title='Model C'
                    />
                     <CategoryItem
                        title='Model C'
                    />
                     <CategoryItem
                        title='Model C'
                    />

                     <CategoryItem
                        title='Model C'
                    />
                     <CategoryItem
                        title='Model C'
                    />
                     <CategoryItem
                        title='Model C'
                    />
                     <CategoryItem
                        title='Model C'
                    />
                     <CategoryItem
                        title='Model C'
                    />
                     <CategoryItem
                        title='Model C'
                    />
                     <CategoryItem
                        title='Model C'
                    />
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
