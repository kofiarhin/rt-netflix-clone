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
import { auth, createUserProfile  } from "./firebase/firebase.utils"
import "./app.styles.scss"
import { connect } from "react-redux"
import { setCurrentUser } from "./redux/user/user.action"

class  App  extends React.Component {

 
    state = {
        user: null
    }

    unsubscribe = null;

    componentDidMount() {


        this.unsubscribe =  auth.onAuthStateChanged( async user => {
          
          if(user) {

            const { userRef } = await createUserProfile(user);

            const snapshot  = await userRef.get()


            if(snapshot.exists) {

              const {email, displayName} = snapshot.data();

              
              this.props.dispatch(setCurrentUser({
                email,
                displayName,
                id: snapshot.id
              }))
            }

              
          } else {

            this.props.dispatch(setCurrentUser())
          }

              
        })
    }

    componentWillUnmount() {
      this.unsubscribe()
    }


  render() {

    return <div>

        <Switch> 
          <Route path="/" exact component={Home}  />
          <Route path="/main" component={Main} />
        </Switch>

        <Footer /> 

  </div>
  }
  
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);