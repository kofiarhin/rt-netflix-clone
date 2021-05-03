import React from "react"
import { Link } from "react-router-dom"
import Header from "../header/header.component"

import "./register.styles.scss"


class Register extends React.Component {

    render() {
        return <div className="register">


            <h1 className="title">Register</h1>

            <div className="form-wrapper">
                <input type="text" placeholder="Display Name" name="displayName" />
                <input type="text" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
                <button className="google">Sign up With Google</button>

                <p> Already have an accont ?  <Link to='/main/login'> Login</Link>  </p>

            </div>
        </div>
    }
}

export default Register;