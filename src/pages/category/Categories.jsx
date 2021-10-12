import React from 'react'
import './category.scss'

import CategoryItem from '../../components/categoryItem'

function Categories() {
    return (
        <div className='category'>
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
                <button className="category__btn-add">
                    Qo’shish
                </button>
            </div>
        </div>
    )
}

export default Categories
