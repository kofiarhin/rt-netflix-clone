import React from "react"
import { connect } from "react-redux"
import { firestore } from "../../firebase/firebase.utils"
import { Link } from "react-router-dom"

class SavedSeries extends React.Component {


    state = {

        data: []
    }

    componentDidMount() {

        const { currentUser } = this.props;

        // console.log("???", currentUser)\

        // get saved series

        console.log("get data")

        firestore.collection("userSeries").where("userId", "==", currentUser.id).get().then(snapshot => {

            let data = []

            snapshot.docs.forEach(doc => {
                data.push(doc.data())
            });

            this.setState({
                data
            })
        })
    }

    render() {

        const { data } = this.state;

        return <div>

            {data.length > 0 ? <h1 className="title-small">Saved <span>Series</span> </h1> : null}

            <div className="user-list">
                {
                    data.map(({ poster_path, seriesId, ...rest }) => {

                        const posterUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`

                        return <Link to={`/main/series/${seriesId}`} key={seriesId}>

                            <img src={posterUrl} alt="" />
                        </Link>
                    })
                }
            </div>
        </div>
    }
}

const mapStateToprops = state => {

    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToprops)(SavedSeries)