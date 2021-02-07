import React, { useContext, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PublicContext from '../../context/public/publicContext'

const BandRandomizer = () => {
    const publicContext = useContext(PublicContext)
    const text = useRef()

    const { pickContact, setCurrent, contacts, filtered, clearCurrent, loading, vgmContacts } = publicContext;

    const rand = Math.floor(Math.random() * 5)
    
    // useEffect(() => {
    //     if(filtered === null){
    //         text.current.value = ''
    //     }
    // })
    const onChange = e => {
        console.log(filtered)
        if(!loading && filtered !== null){
        setCurrent(filtered[rand])
        pickContact()
        } else {
            alert('no')
        }
    }

    return (
        <div>
            <Link to="/band">
            <button className="btn-filter" onClick={onChange}>Surprise me!</button>
            </Link>

        </div>

    )
}

export default BandRandomizer