import React from "react"
import { Route, Switch } from "react-router-dom"
import Movies from "../movies/movies.component"
import Header from "../header/header.component"
import Series from "../series/series.component"
import Login from "../login/login.component"
import Register from "../register/register.component"
import Serie from "../serie/serie.component"
import Movie from "../movie/movie.component"
import { connect } from "react-redux"


const Main = ({ currentUser }) => {

    return <div>

        <Header />
        <Switch>

            <Route path="/main/movies" exact component={Movies} />
            <Route path="/main/movies/:id" exact component={Movie} />
            <Route path="/main/series" exact component={Series} />
            <Route path="/main/series/:id" exact component={Serie} />
            <Route path="/main/login" exact render={() => currentUser ? <Movies /> : <Login />} />
            <Route path="/main/register" exact render={() => currentUser ? <Movies /> : <Register />} />
        </Switch>
    </div>
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    }
}
export default connect(mapStateToProps)(Main)