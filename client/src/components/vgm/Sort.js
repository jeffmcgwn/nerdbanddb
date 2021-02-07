import React, { useContext, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PublicContext from '../../context/public/publicContext'

const Sort = () => {
    const publicContext = useContext(PublicContext)

    const { pickContact, setCurrent, contacts, filtered, clearCurrent, loading, sortContacts, randomizeContacts } = publicContext;

    const test = e => {
        clearCurrent()
        sortContacts(e.target.value)

    }
    return (
        <div>
                <select className="btn-filter" id="dropdown" onChange={test} placeholder="Select Genre">
                <option value="" disabled selected>Select Genre</option>
                    <option value="VGM" className="btn-filter">VGM</option>
                    <option value="Nerd" className="btn-filter">Nerd Culture Band</option>
                    <option value="Chiptune" className="btn-filter">Chiptune</option>
                </select>
        </div>

    )
}

export default Sort