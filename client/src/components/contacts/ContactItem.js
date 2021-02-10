import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext)
    const { deleteContact, setCurrent, clearCurrent } = contactContext;
    let { _id, band, email, image, youtube, type, twitter, facebook, instagram, spotify, bandcamp, patreon, snapchat, twitch, website } = contact;

    const onDelete = () => {
        deleteContact(_id);
        clearCurrent()
    }
    



    return (

        <div className='card'>
            <h3 className="text-light text-center">
                {band}{' '} 
                <span style={{ float:'right' }}
                    className={
                        'badge ' + 
                        (() => {
                            switch (type) {
                              case "vgm":   return "badge-primary";
                              case "chiptune": return "badge-dark";
                              case "nerd culture band":  return "badge-success";
                              default:      return "badge-primary";
                            }
                          })()
                    }
                >
                    {type === 'nerdband' ? type.charAt(0).toUpperCase() + type.slice(1) : type.toUpperCase()}
                </span>
            </h3>
            <ul className="list">
            {image ? (<li>
                    <i className="fab fa-image"></i><img src={`${image}`} alt={`${band}`} className="itemimg"></img>
                </li>) : ''}
                <div className="socialLinks text-center">
                    {email && (<a href={`mailto:${email}`}><i className="text-primary fas fa-1x fa-envelope-open"></i></a>)}
                    {youtube ? (<a href={`${youtube}`} target='blank'><i className="fab fa-1x fa-youtube"></i> </a>) : ''}
                    {twitter ? (<a href={`${twitter}`} target='blank'><i className="fab fa-1x fa-twitter"></i> </a>) : ''}
                    {facebook ? (<a href={`${facebook}`} target='blank'><i className="fab fa-1x fa-facebook"></i> </a>) : ''}
                    {spotify ? (<a href={`${spotify}`} target='blank'><i className="fab fa-1x fa-spotify"></i> </a>) : ''}
                    {instagram ? (<a href={`${instagram}`} target='blank'><i className="fab fa-1x fa-instagram"></i> </a>) : ''}
                    {bandcamp ? (<a href={`${bandcamp}`} target='blank'><i className="fab fa-1x fa-bandcamp"></i> </a>) : ''}
                    {patreon ? (<a href={`${patreon}`} target='blank'><i className="fab fa-1x fa-patreon"></i> </a>) : ''}
                    {snapchat ? (<a href={`${snapchat}`} target='blank'><i className="fab fa-1x fa-snapchat"></i> </a>) : ''}
                    {twitch ? (<a href={`${twitch}`} target='blank'><i className="fab fa-1x fa-twitch"></i> </a>) : ''}
                    {website ? (<a href={`${website}`} target='blank'><i className="fab fa-1x fa-globe"></i> </a>) : ''}
                </div>

            </ul>
            <p>
                <a href="#bandForm"><button className="btn btn-dark btn-sm" onClick={() => setCurrent(contact)}>Edit</button></a>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>
        </div>

    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem
