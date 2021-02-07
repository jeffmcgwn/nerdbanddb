import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import PublicContext from '../../context/public/publicContext'

const BandRoute = ({ component: Component, ...rest }) => {
    const publicContext = useContext(PublicContext);
    const { current } = publicContext;

    return (
        <Route { ...rest } render={props => !current ? (
            <Redirect to='/vgm' />
        ) : (
            <Component {...props} />
        )
    }
    />
    )
}

export default BandRoute
