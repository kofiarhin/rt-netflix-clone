import React from "react"
import Header from "../header/header.component"
import { Link } from "react-router-dom"

import "./login.styles.scss"
class Login extends React.Component {

    render() {

        return <div className="login">
            <Header />

            <h1 className="title">Login</h1>

            <div className="form-wrapper">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <button className="google">Login With Google</button>

                <p> Dont have an account ?  <Link to='/register'> Register</Link>  </p>

            </div>
        </div>
    }
}

export default Login