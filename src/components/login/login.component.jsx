import React from "react"
import Header from "../header/header.component"
import { Link } from "react-router-dom"

import { signInWithGoogle, auth } from "../../firebase/firebase.utils"

import "./login.styles.scss"
class Login extends React.Component {

    state = {
        email: "",
        password: "",
        error: ""
    }


    handleSubmit = async e => {

        e.preventDefault();

        const { email, password } = this.state;

        try {

            const { user } = await auth.signInWithEmailAndPassword(email, password)


        } catch (error) {

            this.setState({
                error: error.message
            })
        }
    }


    handleChange = e => {

        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    render() {

        return <div className="main-form" style={{
            backgroundImage: `url(/img/landing-bg.jpeg)`
        }}>

            <div className="overlay"></div>

            <div className="content">

                <h1 className="title">Login</h1>

                <div className="form-wrapper">


                    <form action="" onSubmit={this.handleSubmit}>

                        <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />

                        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />

                        <p className="error"> {this.state.error} </p>

                        <button>Login</button>
                        <button className="google" onClick={signInWithGoogle}>Login With Google</button>

                        <p> Dont have an account ?  <Link to='/main/register'> Register</Link>  </p>
                    </form>

                </div>
            </div>
        </div>
    }
}

export default Login