
import React, { useReducer } from 'react';
import axios from 'axios'
import UserContext from './userContext';
import userReducer from './userReducer';

import {
    GET_USER,
    USER_ERROR
} from '../types'

const UserState = props => {
    const initialState = {
        users: null
    };

    const [state, dispatch] = useReducer(userReducer, initialState);

        // Get Contacts
        const getUser = async () => {

            try {
                const res = await axios.get('/api/users')
                dispatch({ 
                    type: GET_USER, 
                    payload: res.data 
                })
            } catch (err) {
                dispatch({ 
                    type: USER_ERROR,
                    payload: err.response.msg
                })
            }
        }

        return (
            <UserContext.Provider
            value={{
                users: state.users,
                getUser
            }}>
                { props.children }
            </UserContext.Provider>
        )
    }

    export default UserState;