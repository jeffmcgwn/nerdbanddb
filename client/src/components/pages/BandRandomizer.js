import React, { useContext, useRef, useEffect } from 'react'
import PublicContext from '../../context/public/publicContext'

const BandRandomizer = () => {
    const publicContext = useContext(PublicContext)

    const { contacts, randomizeContacts, loading, filtered, clearCurrent } = publicContext;

      function shuffling() {

        if(!loading){
        const mix = setInterval(function() { randomizeContacts(filtered) }, 10)

        setTimeout(function() { clearInterval(mix) }, 1000)

        console.log(contacts)
      } else {
        alert('Please try again')
      }
    }

    return (
        <div>
            <button className="btn-filter" onClick={shuffling}>Mix it up!</button>
        </div>

    )
}

export default BandRandomizer