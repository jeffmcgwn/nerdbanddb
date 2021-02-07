import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactForm = () => {
    const contactContext = useContext(ContactContext)
    const [contact, setContact] = useState({
        band: '',
        blurb: '',
        image: '',
        email: '',
        youtube: '',
        bandcamp: '',
        spotify: '',
        facebook: '',
        instagram: '',
        twitch: '',
        patreon: '',
        website: '',
        snapchat: '',
        twitter: '',
        type: 'vgm' 
    })

    const { addContact, updateContact, clearCurrent, current } = contactContext;

    const clearAll = () => {
        clearCurrent();
    }
    useEffect(() => {
        if(current !== null) {
            setContact(current)
        } else {
            setContact({
                band: '',
                blurb: '',
                image: '',
                email: '',
                youtube: '',
                bandcamp: '',
                spotify: '',
                facebook: '',
                instagram: '',
                twitch: '',
                patreon: '',
                website: '',
                snapchat: '',
                twitter: '',
                type: 'vgm' 
            })
        }
    }, [contactContext, current])

    const { band, email, youtube, image, type, spotify, instagram, facebook, bandcamp, twitter, blurb, twitch, website, patreon, snapchat } = contact

    const onChange = e => setContact({ ...contact , [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        if(current === null) { 
        addContact(contact)
     } else { 
        updateContact(contact)
    }
        clearAll()
    }
    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-light">{current ? 'Edit Band' : 'Add Band'}</h2>
            <input 
                type="text" 
                placeholder="Band" 
                name="band" 
                value={band} 
                className="input"
                onChange={onChange}
            />   
            <textarea 
                type="text" 
                placeholder="All about the band..." 
                name="blurb" 
                value={blurb} 
                className="input"
                onChange={onChange}
            /> 
            <input 
                type="text" 
                placeholder="Image URL" 
                name="image" 
                value={image} 
                className="input"
                onChange={onChange}
            /> 

            <input 
                type="email" 
                placeholder="Email" 
                name="email" 
                value={email}
                className="input" 
                onChange={onChange}
            /> 
            <input 
                type="text" 
                placeholder="Website URL" 
                name="website" 
                value={website} 
                className="input"
                onChange={onChange}
            />  
     
            <input 
                type="text" 
                placeholder="Youtube URL" 
                name="youtube" 
                value={youtube} 
                className="input"
                onChange={onChange}
            />   
            <input 
                type="text" 
                placeholder="Bandcamp URL" 
                name="bandcamp" 
                value={bandcamp} 
                className="input"
                onChange={onChange}
            />  
            <input 
                type="text" 
                placeholder="Spotify URL" 
                name="spotify" 
                value={spotify} 
                className="input"
                onChange={onChange}
            />  
            <input 
                type="text" 
                placeholder="Facebook URL" 
                name="facebook" 
                value={facebook} 
                className="input"
                onChange={onChange}
            />  
            <input 
                type="text" 
                placeholder="Instagram URL" 
                name="instagram" 
                value={instagram}
                className="input" 
                onChange={onChange}
            />  
            <input 
                type="text" 
                placeholder="Twitter URL" 
                name="twitter" 
                value={twitter} 
                className="input"
                onChange={onChange}
            />  
            <input 
                type="text" 
                placeholder="Twitch URL" 
                name="twitch" 
                value={twitch} 
                className="input"
                onChange={onChange}
            />  
             <input 
                type="text" 
                placeholder="Patreon URL" 
                name="patreon" 
                value={patreon} 
                className="input"
                onChange={onChange}
            />  
            <input 
                type="text" 
                placeholder="Snapchat URL" 
                name="snapchat" 
                value={snapchat} 
                className="input"
                onChange={onChange}
            />  



            <h5>Band Type</h5>
            <input type="radio" name="type" value="vgm" checked={type === 'vgm'} onChange={onChange}/>
            {' '} VGM {' '}  
            <input type="radio" name="type" value="chiptune" checked={type === 'chiptune'} onChange={onChange}/>
            {' '} Chiptune {' '}  
            <input type="radio" name="type" value="nerdband" checked={type === 'nerdband'} onChange={onChange}/>
            {' '} Nerd Culture Band
            <div>
                <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block"/>
            </div>
            {current && <div>
                <button className="btn-light btn-block" onClick={clearAll}>Clear</button>
                </div>}
        </form>
    )
}

export default ContactForm
