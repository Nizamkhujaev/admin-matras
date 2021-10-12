import React,{useState,useEffect} from 'react'
import './customertable.scss'
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';

function CustomerTable() {

    
    let custo = [
        {
            id: 1,
            date: '12:13-12.05.2021',
            phone: '+998 90 123 45 67',
            feedBack: true,
            delete: ''
        },
        {
            id: 2,
            date: '12:13-12.05.2021',
            phone: '+998 90 123 45 67',
            feedBack: false,
            delete: ''
        },
    ]
    
    const [state, setState] = useState(custo)

    useEffect(() => {
        setState(state)
    },[state])

    function click(e) {
        // console.log(e.target.dataset.delete)

        let dataa = state.find(item => item.id === parseInt(e.target.parentNode.parentNode.dataset.id))
        custo.splice(dataa,1)
        setState(state)
        console.log(state)
        // console.log(custo)
    }

    return (
        <div className='customer-table'>
            <table className='table-main'>
                <thead className='table-main-header'>
                    <tr>
                        <th>ID</th>
                        <th>Sana</th>
                        <th>Telefon raqami</th>
                        <th>Qayta aloqa</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.length > 0 ? (
                            state.map((item, index) => (
                                <tr data-id={item.id} key={index}>
                                    <th scope="row">{item.id}</th>
                                    <th>{item.date}</th>
                                    <td>{item.phone}</td>
                                    <td>
                                        <label className="switch">
                                            <input onChange={e => e} checked={item.feedBack ? true : false} type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div className='div-wrapper' onClick={click} data-delete={item.id}>
                                            <RestoreFromTrashIcon />
                                        </div>
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

export default CustomerTable
