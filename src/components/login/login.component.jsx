import React from "react"
import Header from "../header/header.component"
import { Link } from "react-router-dom"

import { signInWithGoogle } from "../../firebase/firebase.utils"

import "./login.styles.scss"
class Login extends React.Component {

    state = {
        email: "",
        password: ""
    }

    componentDidMount() {

        console.log("login page")
    }

    handleSubmit = e => {

        e.preventDefault();

        console.log("submit form")
    }


    handleChange = e => {

        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    render() {

        return <div className="login">

            <h1 className="title">Login</h1>

            <div className="form-wrapper">


                <form action="" onSubmit={this.handleSubmit}>

                    <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                    <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button>Login</button>
                    <button className="google" onClick={signInWithGoogle}>Login With Google</button>

                    <p> Dont have an account ?  <Link to='/main/register'> Register</Link>  </p>
                </form>

            </div>
        </div>
    }
}

export default Login