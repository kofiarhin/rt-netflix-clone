import React from "react"
import { connect } from "react-redux"
import { firestore } from "../../firebase/firebase.utils"
import { Link } from "react-router-dom"

class UserMovies extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {

        const { currentUser: { id } } = this.props;

        firestore.collection("userMovies").where("userId", "==", id).get().then(docs => {

            let data = []
            docs.forEach(doc => {

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
                    data.map(({ movieId, poster_path }) => {

                        const imgUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`
                        return <Link to={`/main/movies/${movieId}`} key={movieId}>

                            <img src={imgUrl} alt="" />
                        </Link>
                    })
                }
            </div>


        </div>
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    }
}
export default connect(mapStateToProps)(UserMovies);