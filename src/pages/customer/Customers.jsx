import React from 'react'
import './customer.scss'

import CustomerTable from '../../containers/customerTable'

function Customers({setDeletedCategory,deletedCategory,editCategory,setEditCategory,routeName,setRouteName}) {
    return (
        <div className='customers'>
            <CustomerTable
                deletedCategory={deletedCategory}
                setDeletedCategory={setDeletedCategory}
                editCategory={editCategory}
                setEditCategory={setEditCategory}
                setRouteName={setRouteName}
            />
        </div>
    )
}

export default Customers
