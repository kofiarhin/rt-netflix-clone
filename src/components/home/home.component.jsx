import React from "react"
import Header from "../header/header.component"
import Movies from "../movies/movies.component"
import { Switch, Route } from "react-router-dom"
import { auth } from "../../firebase/firebase.utils"

import "./home.styles.scss"

class Home extends React.Component {



    render() {

        return <div className="home" style={{
            backgroundImage: `url(./img/landing-bg.jpeg)`
        }}>


            <Header />

            <div className="overlay"></div>
            <div className="content">

                <div className="text-wrapper">
                    <h1>Unlimited movies, TV shows, and more.
Watch anywhere. Cancel anytime.</h1>

                    <p>Ready to watch? Enter your email to create or restart your membership.
</p>
                </div>

                <div className="input-wrapper">
                    <input type="text" placeholder="Email Address" />
                    <button> Get Started</button>
                </div>
            </div>
        </div>
    }
}

export default Home;