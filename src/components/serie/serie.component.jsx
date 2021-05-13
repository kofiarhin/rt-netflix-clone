import React from "react"
import { connect } from "react-redux"
import { firestore } from "../../firebase/firebase.utils";


class Serie extends React.Component {

    state = {
        data: {}
    }

    componentDidMount() {

        const { id } = this.props.match.params;

        const url = `https://api.themoviedb.org/3/tv/${id}?api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US
`;

        fetch(url).then(response => response.json()).then(result => {

            this.setState({
                data: result
            })
        })



    }


    // handle save

    handleSave = async () => {

        const { currentUser } = this.props;
        const { data: { poster_path, backdrop_path, id: seriesId } } = this.state;


        //check database if item already exist

        firestore.collection("userSeries").where("userId", "==", currentUser.id).get().then(async snapshot => {

            let userSeries = []
            snapshot.docs.forEach(doc => {

                userSeries.push(doc.data())
            });

            // check if item already exist
            const existing = userSeries.find(item => item.seriesId === seriesId);

            if (!existing) {

                const dataToSubmit = {
                    poster_path,
                    userId: currentUser.id,
                    backdrop_path,
                    seriesId
                };

                try {
                    await firestore.collection('userSeries').add(dataToSubmit)
                    console.log("seires added")
                } catch (error) {

                    console.log(error)
                }
            } else {

                console.log("item alrady added")
            }

        })



    }

    render() {

        const { currentUser } = this.props;


        const { name: title, poster_path, backdrop_path, overview } = this.state.data;

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

                        {currentUser ? <button className="save" onClick={this.handleSave} >Save</button> : null}
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
export default connect(mapStateToProps)(Serie);