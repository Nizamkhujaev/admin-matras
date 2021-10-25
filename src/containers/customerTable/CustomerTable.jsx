import React, { useState, useEffect } from 'react'
import './customertable.scss'
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import request from '../../services/http';
import Loader from '../../components/loader/Loader'
import { useLang } from '../../context/LanguageProvider'
import Language from '../../lang'

function CustomerTable({ setDeletedCategory, editCategory, setEditCategory, setRouteName }) {

    const [customer, setCustomer] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    const [lang] = useLang()

    const [changeInput,setChangeInput] = useState(false)

    function change(e) {
        setChangeInput(e.target.checked)
        request.patch('/calls', {
            id: e.target.parentNode.parentNode.parentNode.dataset.id,
            token: localStorage.getItem('sessionToken')
        })
        .then(response => {
            if(response.data.status === 200) {
                setCustomer(customer)
                // console.log(customer)
            }
        })
        .catch(err => {})
    }

    try {
        useEffect(() => {
            let abortController = new AbortController();
            request.get('/calls?page=1&limit=28')
                .then(response => {
                    // console.log(response.data.data)
                    setCustomer({
                        isFetched: true,
                        data: response.data,
                        error: false
                    })
                })
                .catch(err => { })
                return () => {
                    abortController.abort();
                  }
        }, [changeInput])
    } catch (error) {

    }


    function click(e) {
        //    console.log(e.target.parentNode.parentNode.dataset.id)
        setEditCategory(!editCategory)
        setDeletedCategory(e.target.parentNode.parentNode.dataset.id)
        setRouteName('/calls')
    }

    return (
        <div className='customer-table'>
            <table className='table-main'>
                <thead className='table-main-header'>
                    <tr>
                        <th>ID</th>
                        <th>{Language[lang].customers.date}</th>
                        <th>{Language[lang].customers.phone}</th>
                        <th>{Language[lang].customers.againCommunication}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customer.isFetched && customer.data.data.length > 0 ? (
                            customer.data.data.map((item, index) => (
                                <tr data-id={item.id} key={index}>
                                    <th>{item.id}</th>
                                    <th>{item.date}</th>
                                    <td>{item.phone_number}</td>
                                    <td>
                                        <label className="switch">
                                            <input value={changeInput} onChange={change} checked={item.active ? true : false} type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div onClick={click} className='div-wrapper' data-delete={item.id}>
                                            <RestoreFromTrashIcon />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : <tr><td><Loader /></td></tr>
                    }

                </tbody>
            </table>
        </div>
    )
}

export default CustomerTable
