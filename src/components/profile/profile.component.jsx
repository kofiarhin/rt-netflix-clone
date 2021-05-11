import React from "react"
import { connect } from "react-redux"
import { firestore } from "../../firebase/firebase.utils"
import { Link } from "react-router-dom"
import UserMovies from "../userMovies/userMovies.component"
import SavedSeries from "../savedSeries/savedSeries.component"

class Profile extends React.Component {

    state = {
        userMovies: []
    }


    componentDidMount() {

        const { currentUser: { id } } = this.props;

        firestore.collection("userMovies").where("userId", "==", id).get().then(docs => {

            let data = []
            docs.forEach(doc => {

                data.push(doc.data())

            });

            this.setState({
                userMovies: data
            })
        })
        // firestore.collection('userMovies').get().then(docs => {
        //     let savedMovies = []

        //     docs.forEach(doc => {

        //         savedMovies.push(doc.data())
        //     })

        //     let userMovies = savedMovies.filter(movie => movie.userId === id);

        //     this.setState({
        //         userMovies
        //     })
        // })

    }



    render() {

        const { currentUser } = this.props;

        const { userMovies } = this.state;


        return <div className="layout">

            <div className="container">
                <h1 className="title"> Hi! <span>{currentUser.displayName}</span> </h1>
            </div>


            {/* user movies */}
            <div className="container">

                <UserMovies />

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