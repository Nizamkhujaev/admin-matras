import React from 'react'
import './table.scss'

function Table() {

    let arr = [
        {
            id: 1,
            name: 'Mark',
            phone: '+998 90 123 45 67',
            productName: 'Ortopedik Eko matras',
            amount: '4',
            feedBack: true
        },
        {
            id: 2,
            name: 'Twen',
            phone: '+998 91 123 45 67',
            productName: 'Ortopedik Eko matras',
            amount: '4',
            feedBack: true
        },
        {
            id: 3,
            name: 'Zuckerberg',
            phone: '+998 92 123 45 67',
            productName: 'Ortopedik Eko matras',
            amount: '4',
            feedBack: false
        },
        {
            id: 4,
            name: 'Ilon',
            phone: '+998 93 123 45 67',
            productName: 'Ortopedik Eko matras',
            amount: '4',
            feedBack: true
        },
        
    ]

    function checking(e) {
        console.log(arr)
        let data = arr.find(item => item.id == e.target.parentNode.parentNode.parentNode.dataset.id)
        console.log(data, 'start')
        if(e.target.checked === false) {
            data.feedBack = false
        } else {
            data.feedBack = true
        }
        console.log(data, 'over')
    }

    return (
        <div className='table'>
            <table className='table-main'>
                <thead className='table-main-header'>
                    <tr>
                        <th>ID</th>
                        <th>Ismi</th>
                        <th>Telefon raqami</th>
                        <th>Mahsulot nomlari</th>
                        <th>Miqdor</th>
                        <th>Qayta aloqa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr && arr.length > 0 ? (
                            arr.map((item, index) => (
                                <tr data-id={item.id} key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.amount}</td>
                                    <td>
                                        <label className="switch">
                                            <input checked={item.feedBack ? true : false} onChange={checking} type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                </tr>
                            ))
                        ) : ''
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
