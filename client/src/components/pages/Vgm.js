import React from 'react'
import Contacts from '../contacts/Contacts';
import Bands from '../vgm/Bands'
import ContactFilter from '../contacts/ContactFilter'

const Vgm = () => {
    return (
        <div>
            <h1 className="text-center text-light">THE LIST</h1>

        <div>
        <ContactFilter />
            <Bands />
        </div>
        </div>
    )
}

export default Vgm;