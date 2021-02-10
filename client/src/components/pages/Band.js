import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PublicContext from '../../context/public/publicContext'
import UserContext from '../../context/user/userContext'

import Spinner from '../layout/Spinner'

const Band = ({ contact }) => {
    const publicContext = useContext(PublicContext)
    const userContext = useContext(UserContext)

    const { getUser, users } = userContext;
    const { contacts, filtered, getContacts, loading, current, getPublic, clearCurrent } = publicContext;
    const { image, band, email, youtube, type, blurb, instagram, facebook, spotify, bandcamp, twitter, patreon, snapchat, twitch, website, user } = current;


    useEffect(() => {
        getUser()

        // eslint-disable-next-line
    }, [])

    const getName = () => {
    for(let i=0; i<users.length; i++){
        if(users[i]._id === user) {
            console.log(user)
            return users[i].name;
             }
        }
    }
    const getEmail = () => {
    for(let i=0; i<users.length; i++){
        if(users[i]._id === user) {
            console.log(user)
            return users[i].email;
             }
        }
    }

    if(contacts !== null && contacts.length === 0 && !loading) {
        return <h4>Please select a band</h4>
    }
    const styles = {
        background: {
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
        content: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            color: 'white',
            padding: '2rem'
          }
      }


    return (
        <div className='card'>
            <div  style={styles.background}>
            <div style={styles.content}>

            <h1 className="text-light text-center">
                
                {band.toUpperCase()}{' '} 
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
            </h1>
            <div className="container" style={{marginTop:'2rem'}}>
                        <div className="grid-2">
                            <div>
                        {image ? (<img src={`${image}`} alt={`${band}`} className="itemimg"></img>) : ''}
                        </div>
                        <div>

                        {blurb ? ( <p className="formatted text-light">{blurb}</p>): ''}
                        
                        </div>
                        </div>


                <div className="socialLinks text-center">
                    {email && (<a href={`mailto:${email}`}><i className="text-primary fas fa-2x grow spin fa-envelope-open"></i></a>)}
                    {youtube ? (<a href={`${youtube}`} target='blank'><i className="fab fa-2x grow spin fa-youtube"></i> </a>) : ''}
                    {twitter ? (<a href={`${twitter}`} target='blank'><i className="fab fa-2x grow spin fa-twitter"></i> </a>) : ''}
                    {facebook ? (<a href={`${facebook}`} target='blank'><i className="fab fa-2x grow spin fa-facebook"></i> </a>) : ''}
                    {spotify ? (<a href={`${spotify}`} target='blank'><i className="fab fa-2x grow spin fa-spotify"></i> </a>) : ''}
                    {instagram ? (<a href={`${instagram}`} target='blank'><i className="fab fa-2x grow spin fa-instagram"></i> </a>) : ''}
                    {bandcamp ? (<a href={`${bandcamp}`} target='blank'><i className="fab fa-2x grow spin fa-bandcamp"></i> </a>) : ''}
                    {patreon ? (<a href={`${patreon}`} target='blank'><i className="fab fa-2x grow spin fa-patreon"></i> </a>) : ''}
                    {snapchat ? (<a href={`${snapchat}`} target='blank'><i className="fab fa-2x grow spin fa-snapchat"></i> </a>) : ''}
                    {twitch ? (<a href={`${twitch}`} target='blank'><i className="fab fa-2x grow spin fa-twitch"></i> </a>) : ''}
                    {website ? (<a href={`${website}`} target='blank'><i className="fas fa-2x grow spin fa-globe"></i> </a>) : ''}
                   
                </div>
            </div>
            <Link to="/vgm">
            <i class="text-primary fas fa-3x fa-arrow-alt-circle-left grow"></i>
            </Link>
            {users ? <p className='credit' style={{ float:'right' }}>Submitted by  <a href={`mailto:${getEmail()}`}>{getName()} </a></p> : ''}
            </div>
            </div>
        </div>
    )
}

export default Band
