import React from "react"
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase.utils"


import "./header.styles.scss"

const Header = ({ user }) => {


    return <div className="header">

        <div className="container">
            <Link to="/">
                <img src="/img/logo.png" alt="" />
            </Link>

            <div>
                <Link to="/"> Home</Link>
                {
                    user ? <span>

                        <Link to="/main/movies">Movies</Link>
                        <Link to="/main/series">Series</Link>
                    </span> : null
                }
                {user ? <span onClick={() => auth.signOut()}>SignOut</span> : <Link to="/main/login">Login</Link>}
            </div>
        </div>

    </div>
}

export default Header;