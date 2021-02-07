import React, { useReducer } from 'react';
import axios from 'axios'

import PublicContext from './publicContext';
import publicReducer from './publicReducer';

import {
    GET_PUBLIC,
    PUBLIC_ERROR,
    CLEAR_CONTACTS,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CONTACT_ERROR,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    PICK_CONTACT,
    RANDOMIZE_CONTACTS,
    VGM_CONTACTS
} from '../types'

const PublicState = props => {
    const initialState = {
        contacts: null,
        current: null,
        randomized: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(publicReducer, initialState);

        // Get Contacts
        const getPublic = async () => {

            try {
                const res = await axios.get('/api/public')
                
                dispatch({ 
                    type: GET_PUBLIC, 
                    payload: res.data 
                })
            } catch (err) {
                dispatch({ 
                    type: PUBLIC_ERROR,
                    payload: err.response.msg
                })
            }
    
    
        }

    // Delete Contact
    const deleteContact = async id => {
        try {
            await axios.delete(`/api/public/${id}`)

            dispatch({ 
                type: DELETE_CONTACT, 
                payload: id
            })
        } catch (err) {
            dispatch({ 
                type: CONTACT_ERROR,
                payload: err.response.msg
            })
        }
    }

        // Clear Contacts
        const clearContacts = () => {
            dispatch({ type: CLEAR_CONTACTS })
        }
        // Set Current Contact
        const setCurrent = contact => {
            dispatch({ type: SET_CURRENT, payload: contact })
        }
        // Clear Current Contact
        const clearCurrent = () => {
            dispatch({ type: CLEAR_CURRENT })
        }
            // Filter Contacts
    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text })
    }
    // Pick Random Contact
    const pickContact = () =>{
        dispatch({ type: PICK_CONTACT })
    }
    const sortContacts = selection => {
        dispatch({ type: VGM_CONTACTS, payload: selection })
    }
    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER })
    }
    // Randomize Contacts
    const randomizeContacts = () => {
        dispatch({ type: RANDOMIZE_CONTACTS })
    }
        return (
            <PublicContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                randomized: state.randomized,
                error: state.error,
                getPublic,
                pickContact,
                deleteContact,
                clearContacts,
                filterContacts,
                sortContacts,
                clearFilter,
                randomizeContacts,
                clearCurrent,
                setCurrent
            }}>
                { props.children }
            </PublicContext.Provider>
        )
}

export default PublicState;