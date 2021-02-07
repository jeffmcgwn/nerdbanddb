import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import PublicContext from '../../context/public/publicContext'

const BandItem = ({ contact }) => {
    const publicContext = useContext(PublicContext)
    const { deleteContact, setCurrent, clearCurrent } = publicContext;
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
      }
      
    return (

      <Link to="/band">
        <div className='bandCard' style={styles.background} onClick={() => setCurrent(contact)}>
            <div className="overlay">
            <h2 className="text-light text-center bandText">
                {band}{' '} 
            </h2>

            </div>
        </div>
        </Link>
    )
}

BandItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default BandItem
