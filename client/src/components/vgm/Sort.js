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
        <div className="box">
                <select onChange={test}>
                <option value="">All Genres</option>
                    <option value="VGM" >VGM</option>
                    <option value="Nerd" >Nerd Culture</option>
                    <option value="Chiptune" >Chiptune</option>
                </select>
        </div>

    )
}

export default Sort