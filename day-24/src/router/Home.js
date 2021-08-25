import {useContext} from 'react'
import Context from '../context/AuthContext'

function Home(props) {
    const logger = useContext(Context)

    
    return (
        <div className="mid">
            <h1>Home</h1>
            <div>Login to access Dashboard and Profile</div>

            {
                 logger.loading?"Loading......":
                    logger.loggedIn?
                        <button onClick = {logger.logout}>Logout</button>:
                        <button onClick = {logger.login}>Login</button>
            }
        </div>
    )
}

export default Home