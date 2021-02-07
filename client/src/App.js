import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Band from './components/pages/Band'
import BandTest from './components/pages/BandTest'
import About from './components/pages/About'
import Vgm from './components/pages/Vgm'
import ContactItem from './components/contacts/ContactItem'
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Alerts from './components/layout/Alerts'
import PrivateRoute from './components/routing/PrivateRoute'
import BandRoute from './components/routing/BandRoute'

import ContactContext from './context/contact/contactContext'
import ContactState from './context/contact/ContactState';
import PublicState from './context/public/PublicState';
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utils/setAuthToken'

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  return(
    <AuthState>
    <ContactState>
      <PublicState>
    <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Alerts />
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <BandRoute exact path='/band' component={Band} />
                <Route exact path='/vgm' component={Vgm} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/about' component={About} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
      </PublicState>
  </ContactState>  
  </AuthState>
  )
}
App.propTypes = {
  contact: PropTypes.object.isRequired,
}
export default App;
