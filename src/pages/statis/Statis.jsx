import React, { useState, useEffect } from 'react'
import request from '../../services/http'
import './statis.scss'

import Language from '../../lang'
import { useLang } from '../../context/LanguageProvider'
import Laoder from '../../components/loader/Loader'

 
function Statis({stat,setStat}) {

    const [result, setResult] = useState({
        isFetched: false,
        data: [],
        error: null
    })

    const [lang] = useLang()

    useEffect(() => {
        request.get('/stats')
            .then(response => {
                setResult({
                    isFetched: true,
                    data: response.data,
                    error: false
                })
            })
            .catch(err => {
                console.log(err)
                setResult({
                    isFetched: false,
                    data: [],
                    error: err
                })
            })
    }, [])

    return (
        <div className='results'>
            <table className="result-inner">

                <thead>
                    <tr>
                        <td>{Language[lang].res.exp}</td>
                        <td>{Language[lang].res.clients}</td>
                        <td>{Language[lang].res.garant}</td>
                        <td>{Language[lang].res.del}</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        result.isFetched && result.data.data ? (
                            result.data.data.map((item, index) => (

                                <tr className='result-inner-top' key={index}>
                                    <td className="result-inner-exp">{item.experiance}</td>

                                    <td className="result-inner-clients">{item.clients}</td>

                                    <td className="result-inner-garant">{item.graduate}</td>

                                    <td className="result-inner-log">{item.delivery}</td>
                                </tr>
                            ))
                        ) : <tr><td><Laoder/></td></tr>
                    }
                </tbody>

            </table>
            <div className="product-table-add">
                <button onClick={() => setStat(!stat)} className="product-table__btn-add">
                    {Language[lang].categoryAdd.edit}
                </button>
            </div>
        </div>
    )
}

export default Statis
