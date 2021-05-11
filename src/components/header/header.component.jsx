import React from "react"
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase.utils"
import { connect } from "react-redux"


import "./header.styles.scss"

const Header = ({ currentUser }) => {



    return <div className="header">

        <div className="container">
            <Link to="/">
                <img src="/img/logo.png" alt="" />
            </Link>

            <div className="nav">
                <Link to="/"> Home</Link>
                <Link to="/main/movies">Movies</Link>
                <Link to="/main/series">Series</Link>


                {
                    currentUser ?
                        <div className="options">

                            <Link to="/main/profile"> {currentUser.displayName} </Link>
                            <span onClick={() => auth.signOut()}> Sign Out </span>
                        </div>
                        : <Link to="/main/login" className="cta">Login</Link>
                }


            </div>
        </div>

    </div>
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    }
}
export default connect(mapStateToProps)(Header);