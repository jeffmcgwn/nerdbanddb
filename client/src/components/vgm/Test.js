import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Vgm from '../../components/pages/Vgm'
import PrivateRoute from '../../components/routing/PrivateRoute'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'

const Test = ({ contact }) => {
    const contactContext = useContext(ContactContext)
    const { deleteContact, setCurrent, clearCurrent } = contactContext;
    const { _id, band, email, image, youtube, type } = contact;

    const onDelete = () => {
        deleteContact(_id);
        clearCurrent()
    }

    const styles = {
        background: {
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '20vh',
          height: '20vh'
        },
      
        overlay: {
          height: '100%',
          width: '100%',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,105,180, 0.75)',
        }
      }
      
    return (
        
        <Link to={`/${contact._id}`}>
        <div className='bandCard' style={styles.background}>
            <div style={styles.overlay}>
            <h2 className="text-light text-center bandText">
                {band}{' '} 
                
            </h2>
            <ul className="list">

            </ul>
            </div>
            <Switch>

                <Route exact path={`/${contact._id}`} component={Vgm} />
              </Switch>
        </div>
        </Link>
    )
}

Test.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default Test