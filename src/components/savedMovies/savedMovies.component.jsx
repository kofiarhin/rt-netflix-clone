import React from "react"
import { connect } from "react-redux"
import { firestore } from "../../firebase/firebase.utils"
import { Link } from "react-router-dom"

class SavedMovies extends React.Component {

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

        console.log(data)
        return <div>

            {data.length > 0 ? <h1 className="title-small">Saved <span>Movies</span> </h1> : null}

            {
                data.length > 0 ? <div className="user-list">
                    {
                        data.map(({ movieId, poster_path }) => {

                            const imgUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`

                            return <Link to={`/main/movies/${movieId}`} key={movieId} className="unit">

                                <img src={imgUrl} alt="" />
                            </Link>
                        })
                    }
                </div> : <h1>You dont have any saved movies</h1>
            }


        </div>
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    }
}
export default connect(mapStateToProps)(SavedMovies);