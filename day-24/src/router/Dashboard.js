import React, { useContext } from 'react'
import {
    Route,
    Redirect,
} from "react-router-dom"
import Context from '../context/AuthContext'



export default function Dashboard(props) {

    const logger = useContext(Context)

    return (
        <div className="mid">
            <h1>Dashboard</h1>
            <Route>
                {
                    logger.loggedIn?"Welcome to Dashboard" : <Redirect to="/" />
                }

            </Route>
        </div>
    )
}