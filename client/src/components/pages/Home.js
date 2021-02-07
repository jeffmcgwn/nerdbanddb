import React, { useContext, useEffect } from 'react'
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'
import AuthContext from '../../context/auth/authContext'

const Home = () => {
    const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <h4 className="text-center text-light">The Definitive List of Nerd Bands in the Convention Circuit</h4>
            <br/><br/>

            <div className="grid-2">
                <div>
                    <ContactForm />
                </div>
                <div>
                    <Contacts />
                </div>
            </div>
        </div>
    )
}

export default Home;