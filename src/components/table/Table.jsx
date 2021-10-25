import React, {useEffect,useState} from 'react'
import './table.scss'
import request from '../../services/http'
import Loader from '../loader'
import {useLang} from '../../context/LanguageProvider'
import Language from '../../lang'

function Table() {

    const [orders,setOrders] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    const [lang] = useLang();

    const [changeInput,setChangeInput] = useState(false)

    function change(e) {
        // console.log(e.target.parentNode.parentNode.parentNode.dataset.id)
        setChangeInput(e.target.checked)
        request.put(`/orders/${e.target.parentNode.parentNode.parentNode.dataset.id}`, {
            token: localStorage.getItem('sessionToken')
        })
        .then(response => {
            if(response.data.status === 200) {
                // setCustomer(customer)
                setOrders(orders)
                // console.log(customer)
            }
            // console.log(response)
        })
        .catch(err => {})
    }

    useEffect(() => {
        request.get('orders?page=1&limit=38')
        .then(response => {
            setOrders({
                isFetched: true,
                data: response.data,
                error: false
            })
        })
        .catch(err => {
            setOrders({
                isFetched: false,
                data: [],
                error: err
            })
        })
    }, [changeInput])

    // console.log(orders.data.data)

    return (
        <div className='table'>
            <table className='table-main'>
                <thead className='table-main-header'>
                    <tr>
                        <th>ID</th>
                        <th>{Language[lang].orders.name}</th>
                        <th>{Language[lang].orders.phone}</th>
                        <th>{Language[lang].orders.nameProducts}</th>
                        <th>{Language[lang].orders.amount}</th>
                        <th>{Language[lang].orders.againCommunication}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.isFetched && orders.data.data ? (
                            orders.data.data.map((item,index) => (
                                <tr data-id={item.order_id} key={index}>
                                    <th scope="row">{item.order_id}</th>
                                    <td>{item.client_name}</td>
                                    <td>{item.client_contact}</td>
                                    <td>{item.product_name}</td>
                                    <td>{item.count}</td>
                                    <td>
                                        <label className="switch">
                                            <input value={changeInput} checked={item.active ? true : false} onChange={change} type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                </tr>
                            ))
                        ) : <tr>
                            <td><Loader/></td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
