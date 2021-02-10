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

export default (state, action) => {
    switch(action.type){
        case GET_PUBLIC:
            return {
                ...state,
                contacts: action.payload,
                loading: false
            } 
            case PUBLIC_ERROR:
                return {
                     ...state,
                     error: action.payload
                }  
                case CLEAR_CONTACTS:
                    return {
                    ...state,
                    contacts: null,
                    filtered: null,
                    error: null,
                    current: null
                }
                case DELETE_CONTACT:
                    return {
                        ...state,
                        contacts: state.contacts.filter(contact => contact._id !== action.payload)
                    }
            case SET_CURRENT:
                return {
                    ...state,
                    current: action.payload
                }
            case CLEAR_CURRENT:
                    return {
                        ...state,
                        current: null
                    }    
            case FILTER_CONTACTS:
                        return {
                            ...state,
                            filtered: state.contacts.filter(contact => {
                                const regex = new RegExp(`${action.payload}`, 'gi')
                                return contact.band.match(regex) || contact.email.match(regex)
                            })
                        }  
            case RANDOMIZE_CONTACTS:
                    function shuffle(array) {
                        array.sort(() => Math.random() - 0.5);
                      }
                      if(state.contacts){
                      shuffle(state.contacts)
                      } else {
                          console.log('Not ready')
                      }
                        return {
                            ...state,
                            filtered: state.contacts
                            }
            case VGM_CONTACTS:
                if(state.contacts){
                    shuffle(state.contacts)
                    } else {
                        console.log('Not ready')
                    }
                return {
                    ...state,
                    filtered: state.contacts.filter(contact => {
                        const regex = new RegExp(`${action.payload}`, 'gi')
                        return contact.type.match(regex)            
                    })
                }
            case PICK_CONTACT:

                        return {
                            ...state,
                            filtered: state.filtered
                            }
                        
            case CLEAR_FILTER:
                        return {
                            ...state,
                            filtered: null
                            }   
            case CONTACT_ERROR:
                        return {
                             ...state,
                             error: action.payload
                        }             
        default: 
            return state;
    }
}