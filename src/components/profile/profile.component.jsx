import React from "react"
import { connect } from "react-redux"
import { firestore } from "../../firebase/firebase.utils"
import { Link } from "react-router-dom"
import SavedMovies from "../savedMovies/savedMovies.component"
import SavedSeries from "../savedSeries/savedSeries.component"

class Profile extends React.Component {



    render() {

        const { currentUser } = this.props;



        return <div className="layout">

            <div className="container">
                <h1 className="title"> Hi! <span>{currentUser.displayName}</span> </h1>
            </div>


            {/* user movies */}
            <div className="container">

                <SavedMovies />
                <SavedSeries />

            </div>
        </div>
    }
}

const mapStateToProps = state => {

    return {
        currentUser: state.user.currentUser
    }
}
export default connect(mapStateToProps)(Profile);