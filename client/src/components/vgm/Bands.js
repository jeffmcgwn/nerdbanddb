import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import BandItem from './BandItem'
import ContactContext from '../../context/contact/contactContext'
import PublicContext from '../../context/public/publicContext'
import BandRandomizer from '../pages/BandRandomizer'
import BandPicker from '../pages/BandPicker'
import Sort from '../vgm/Sort'
import Spinner from '../layout/Spinner'

const Bands = ({ contact }) => {
    const publicContext = useContext(PublicContext)

    const { contacts, filtered, randomized, getPublic, loading, current, setCurrent, randomizeContacts } = publicContext;


    useEffect(() => {
        getPublic();

        // eslint-disable-next-line
    }, [])


    if(contacts !== null && contacts.length === 0 && !loading) {
        return <h4>List is empty</h4>
    }
    return (
        

            <div>
                
                <div className="btn-container">

                <BandRandomizer/>
                <BandPicker />

                </div>
                <Sort />
            {contacts !== null && !loading ? (
                <TransitionGroup className="grid-5">
                     {filtered !== null ? filtered.map(contact => (
                          <CSSTransition key={contact._id} timeout={500} classNames="item">

                                <BandItem contact={contact}/>
                                
                         </CSSTransition>  
                            )) 
                            : contacts.map(contact=>(
                         <CSSTransition key={contact._id} timeout={500} classNames="item">
                             <BandItem contact={contact}/>

                        </CSSTransition>
                            ))}
                    </TransitionGroup>
            ) : <Spinner />}
            </div>

    )
}

export default Bands