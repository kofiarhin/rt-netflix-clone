import React from "react"
import { Link } from "react-router-dom"


import "./header.styles.scss"

const Header = (props) => {

    console.log(props)

    return <div className="header">

        <div className="container">
            <Link to="/">
                <img src="/img/logo.png" alt="" />
            </Link>

            <div>
                <Link to="/"> Home</Link>
                <Link to="/main/movies">Movies</Link>
                <Link to="/main/series">Series</Link>
                <Link to="/main/login" className="login">Login</Link>
            </div>
        </div>

    </div>
}

export default Header;