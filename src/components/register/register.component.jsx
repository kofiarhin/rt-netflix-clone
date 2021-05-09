import React from "react"
import { Link } from "react-router-dom"
import Header from "../header/header.component"
import { auth, createUserProfile } from "../../firebase/firebase.utils"

import "./register.styles.scss"
import { setCurrentUser } from "../../redux/user/user.action"


class Register extends React.Component {

    state = {
        email: "",
        password: "",
        displayName: "",
        error: ""
    }

    handleSubmit = async e => {

        e.preventDefault();

        const { email, password, displayName } = this.state;


        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfile(user, { displayName })

            this.props.dispatch(setCurrentUser({
                email,
                displayName,
                id: user.uid
            }))

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

                <h1 className="title">Register</h1>

                <div className="form-wrapper">


                    <form action="" onSubmit={this.handleSubmit}>

                        <input type="text" placeholder="Display Name" name="displayName" value={this.state.displayName} onChange={this.handleChange} />
                        <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                        <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />

                        <p className="error"> {this.state.error} </p>

                        <button>Register</button>

                        <p className="error"> {this.state.error} </p>

                        <p> Already have an account ?  <Link to='/main/login'> Login</Link>  </p>
                    </form>

                </div>
            </div>
        </div>
    }
}

export default Register;