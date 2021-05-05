import React from "react"
import { Link } from "react-router-dom"
import Header from "../header/header.component"
import { auth } from "../../firebase/firebase.utils"

import "./register.styles.scss"


class Register extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password, displayName } = this.state;

        try {
            await auth.createUserWithEmailAndPassword(email, password);

            console.log()

        } catch (error) {

            console.log(error.message)
        }



    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return <div className="register">


            <h1 className="title">Register</h1>

            <div className="form-wrapper">

                <form action="" onSubmit={this.handleSubmit}>

                    <input type="text" placeholder="Email" name="email" onChange={this.handleChange} value={this.state.email} />
                    <input type="password" placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} />
                    <button>Register</button>
                    <p> Already have an accont ?  <Link to='/main/login'> Login</Link>  </p>
                </form>

            </div>
        </div>
    }
}

export default Register;