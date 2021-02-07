import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'
import PublicContext from '../../context/public/publicContext'
const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext)
    const contactContext = useContext(ContactContext)
    const publicContext = useContext(PublicContext)

    const { clearContacts, clearCurrent } = contactContext
    const { isAuthenticated, logout, user } = authContext;
    const { randomizeContacts, contacts } = publicContext

    const onLogout = () => {
        logout();
        clearContacts()
    }

    const clearAll = async () => {

        randomizeContacts(contacts)
        clearCurrent();
    }
    const authLinks = (
        <Fragment>
            <li>// Hello {user && user.name} // </li>
            <li onClick={clearAll}>
                    <Link to='/'>My Bands</Link>
                </li>
            <li onClick={randomizeContacts}>
                    <Link to='/vgm'>The List</Link>
                </li>
            <li>

                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
            <li onClick={clearAll}>
                    <Link to='/vgm'>The List</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/band'>Band</Link>
                </li>
        </Fragment>
    )
    return (
        <div className="navbar bg-opaque">
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Nerd Band Database',
    icon: 'fas fa-glasses'
}

export default Navbar