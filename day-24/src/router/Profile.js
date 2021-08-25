import React, {useContext} from 'react'
import Context from '../context/AuthContext'
import {Route, Redirect} from 'react-router-dom'



function Profile() {
    const logger = useContext(Context)

    return (
        <div className="mid">
            <h1>Profile</h1>
            <Route>
                {
                    logger.loggedIn?"Welcome to Profile" : <Redirect to="/" />
                }

            </Route>
        </div>
    )
}

export default Profile