import React from 'react'
import './locationTable.scss'

import LocationItem from '../../components/locationItem'

function LocationTable({ setDeletedCategory, editCategory, setEditCategory, setRouteName }) {

    let locat = [
        {
            id: 1,
            locaiton: 'Toshkent, Parken...',
            text: 'Mo’ljal: Qoraqamish... ',
            locationLink: 'https://goo.gl/maps/uskYbsZbeYYei1N69'
        },
        {
            id: 2,
            locaiton: 'Toshkent, Parken...',
            text: 'Mo’ljal: Qoraqamish... ',
            locationLink: 'https://goo.gl/maps/uskYbsZbeYYei1N69'
        },
        {
            id: 3,
            locaiton: 'Toshkent, Parken...',
            text: 'Mo’ljal: Qoraqamish... ',
            locationLink: 'https://goo.gl/maps/uskYbsZbeYYei1N69'
        },
    ]

    return (
        <div className='location-table'>
            <table className='location-table-main'>
                <thead>
                    <tr>
                        <th>Manzil</th>
                        <th>Matn</th>
                        <th>Location</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        locat && locat.length > 0 ? (
                            locat.map((item, index) => (
                                <LocationItem
                                    key={index}
                                    location={item.locaiton}
                                    locationLink={item.locationLink}
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
        </div>
    )
}

export default LocationTable
