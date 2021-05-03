import React from "react"
import { Link } from "react-router-dom"


import "./header.styles.scss"

const Header = () => {

    return <div className="header">

        <div className="container">
            <Link to="/">
                <img src="./img/logo.png" alt="" />
            </Link>

            <div>
                <Link to="/"> Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/series">Series</Link>
                <Link to="/login" className="login">Login</Link>
            </div>
        </div>

    </div>
}

export default Header;