import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PublicContext from '../../context/public/publicContext'

const BandTest = ({ contact }) => {
    const publicContext = useContext(PublicContext)

    const { contacts, filtered, getPublic, loading, current } = publicContext;
    const { image, band, email, youtube, type, blurb, instagram, facebook, spotify, bandcamp, twitter } = current;
   
    useEffect(() => {
        getPublic();
        // eslint-disable-next-line
    }, [])

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
                        (type === 'nerdband' ? 'badge-success' : 'badge-primary')
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
                    {email && (<a href={`${email}`}><i className="text-primary fas fa-2x grow spin fa-envelope-open"></i></a>)}
                    {youtube ? (<a href={`${youtube}`} target='blank'><i className="fab fa-2x grow spin fa-youtube"></i> </a>) : ''}
                    {twitter ? (<a href={`${twitter}`} target='blank'><i className="fab fa-2x grow spin fa-twitter"></i> </a>) : ''}
                    {facebook ? (<a href={`${facebook}`} target='blank'><i className="fab fa-2x grow spin fa-facebook"></i> </a>) : ''}
                    {spotify ? (<a href={`${spotify}`} target='blank'><i className="fab fa-2x grow spin fa-spotify"></i> </a>) : ''}
                    {instagram ? (<a href={`${instagram}`} target='blank'><i className="fab fa-2x grow spin fa-instagram"></i> </a>) : ''}
                    {bandcamp ? (<a href={`${bandcamp}`} target='blank'><i className="fab fa-2x grow spin fa-bandcamp"></i> </a>) : ''}

                </div>
            </div>
            <Link to="/vgm">
            <i className="text-primary fas fa-3x fa-arrow-alt-circle-left grow"></i>
            </Link>
            </div>
            </div>
        </div>
    )
}

export default BandTest
