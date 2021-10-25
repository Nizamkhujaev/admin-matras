import React, { useState, useEffect } from 'react'
import './sliderlist.scss'

import SliderListItem from '../../components/sliderList'
// import Photo from '../../assets/images/img/matras1.jpg'
import Loader from '../../components/loader'
import request from '../../services/http'
import Language from '../../lang'
import {useLang } from '../../context/LanguageProvider'

function SliderList({addCarousel,setAddCarousel,setRouteName,setDeletedCategory,editCategory,setEditCategory,editCarousel,setEditCarousel,setEditedCarousel}) {

    const [sliderItem, setSliderItem] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    const [lang] = useLang()


    useEffect(() => {
        request.get('carousel')
            .then(response => {
                setSliderItem({
                    isFetched: true,
                    data: response.data,
                    error: false
                })
                // console.log(sliderItem)
            })
            .catch(err => {
                setSliderItem({
                    isFetched: false,
                    data: [],
                    error: err
                })
            })
    }, [])

    return (
        <div className='slider-list'>
            <table className="table-main">
                <thead className='table-main-header'>
                    <tr>
                        <th>ID</th>
                        <th>{Language[lang].addTech.photo}</th>
                        <th>{Language[lang].addTech.name}</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        sliderItem.isFetched && sliderItem.data.data ? (
                            sliderItem.data.data.map((item, index) => (
                                <SliderListItem
                                    key={index}
                                    id={item.id}
                                    img={item.img_link}
                                    title={item.title}
                                    setRouteName={setRouteName}
                                    setDeletedCategory={setDeletedCategory}
                                    editCategory={editCategory}
                                    setEditCategory={setEditCategory}
                                    setEditCarousel = {setEditCarousel}
                                    editCarousel = {editCarousel}
                                    setEditedCarousel = {setEditedCarousel}
                        
                                />
                            ))
                        ) : <tr><td>
                            <Loader></Loader>
                        </td></tr>
                    }
                </tbody>
            </table>

            <div className="product-table-add">
                <button onClick={() => setAddCarousel(!addCarousel)} className="product-table__btn-add">
                    {Language[lang].products.add}
                </button>
            </div>
        </div>
    )
}

export default SliderList
