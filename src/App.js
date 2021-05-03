import React from "react"
import { Switch, Route } from "react-router-dom"
import Movies from "./components/movies/movies.component"
import Movie from "./components/movie/movie.component"
import Home from "./components/home/home.component"
import Header from "./components/header/header.component"
import Login from  "./components/login/login.component"
import Series from "./components/series/series.component"
import Serie from "./components/serie/serie.component"
import Footer from "./components/footer/footer.component"
import Register from "./components/register/register.component"
import Main from "./components/Main/main.component"

import "./app.styles.scss"

const App = () => {

  return <div>

        <Switch> 
          <Route path="/" exact component={Home}  />
          <Route path="/main" component={Main} />
        </Switch>

        <Footer /> 
  </div>
}

export default App;