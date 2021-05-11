import React from "react"
import Header from "../header/header.component";
import { firestore } from "../../firebase/firebase.utils";
import { connect } from "react-redux"

class Movie extends React.Component {

    state = {
        movie: {}
    }

    componentDidMount() {

        const { id } = this.props.match.params;
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US`

        fetch(url).then(response => response.json()).then(result => {

            this.setState({
                movie: result
            })
        })

        // get movie details

    }

    handleSave = async e => {

        const { currentUser: { id: userId } } = this.props;

        const { movie: { id: movieId, poster_path, backdrop_path, title } } = this.state;


        const dataToSubmit = { movieId, poster_path, backdrop_path, userId }

        // check if item already exist
        const userMovies = await firestore.collection("userMovies").where("userId", "==", userId).get();

        if (!userMovies.empty) {

            let data = [];

            userMovies.forEach(movie => {

                data.push(movie.data())
            });

            const isExisting = data.find(item => item.movieId === movieId)

            if (!isExisting) {

                try {

                    await firestore.collection('userMovies').add(dataToSubmit);
                    console.log("movie added")
                } catch (error) {


                }
            } else {

                console.log("movie already added")
            }
        } else {

            await firestore.collection("userMovies").add(dataToSubmit)
        }








    }

    render() {

        const { movie: { title, poster_path, backdrop_path, overview } } = this.state;
        const { currentUser } = this.props;


        const posterUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`
        const backdropUrl = `https://image.tmdb.org/t/p/w1280${backdrop_path}`


        return <div className="item-unit" style={{
            backgroundImage: `url(${backdropUrl})`
        }}>

            <div className="overlay"></div>

            <div className="content-wrapper">


                <div className="text-wrapper">
                    <h1> {title}  </h1>
                    <p> {overview} </p>
                    <div className="button-wrapper">
                        <button className="play">Play</button>
                        <button className="save" onClick={this.handleSave} disabled={currentUser ? false : true}>  Save</button>
                    </div>
                </div>

            </div>
        </div>
    }
}


const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    }
}
export default connect(mapStateToProps)(Movie);