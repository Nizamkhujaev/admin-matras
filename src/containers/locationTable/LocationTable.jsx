import React, {useState,useEffect} from 'react'
import './locationTable.scss'
import request from '../../services/http'
import Loader from '../../components/loader'

import Language from '../../lang'
import {useLang} from '../../context/LanguageProvider'

import LocationItem from '../../components/locationItem'

function LocationTable({ setDeletedCategory, editCategory, setEditCategory, setRouteName, editLocation,setEditLocation,editLoc,setEditLoc,setEditLocId }) {

    const [location, setLocation] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    const [lang] = useLang()

    useEffect(() => {
        request.get('/location')
        .then(response => {
            setLocation({
                isFetched: true,
                data: response.data,
                error: false
            })
        })
        .catch(err => {
            setLocation({
                isFetched: false,
                data: [],
                error: err
            })
        })
    }, [])

    return (
        <div className='location-table'>
            <table className='location-table-main'>
                <thead>
                    <tr>
                        <th>{Language[lang].location.locationName}</th>
                        <th>{Language[lang].location.text}</th>
                        <th>{Language[lang].location.locationPlace}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        location.isFetched ? (
                            location.data.data.map((item, index) => (
                                <LocationItem
                                    key={index}
                                    location={item.address}
                                    locationLink={item.location}
                                    text={item.text}
                                    id={item.id}
                                    setDeletedCategory={setDeletedCategory}
                                    setRouteName={setRouteName}
                                    editCategory={editCategory}
                                    setEditCategory={setEditCategory}
                                    editLoc={editLoc}
                                    setEditLoc={setEditLoc}
                                    setEditLocId={setEditLocId}
                                />
                            ))
                        ) : <tr><td> <Loader/> </td></tr>
                    }
                </tbody>
            </table>

            <div className="category-add">
                <button onClick={() => setEditLocation(!editLocation)} className="category__btn-add">
                    {Language[lang].location.add}
                </button>
            </div>
            
        </div>
    )
}

export default LocationTable
