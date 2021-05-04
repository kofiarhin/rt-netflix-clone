import React from "react"
import Header from "../header/header.component"


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

    render() {

        const { name: title, poster_path, backdrop_path, overview } = this.state.data;

        const posterUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`
        const backdropUrl = `https://image.tmdb.org/t/p/w1280${backdrop_path}`


        return <div className="item-unit" style={{
            backgroundImage: `url(${backdropUrl})`
        }}>

            <div className="overlay"></div>

            <div className="content-wrapper">

                <div className="img-wrapper">
                    <img src={posterUrl} alt="" />
                </div>

                <div className="text-wrapper">
                    <h1> {title}  </h1>
                    <p> {overview} </p>
                    <div className="button-wrapper">
                        <button className="play">Play</button>
                        <button className="save">Save</button>
                    </div>
                </div>

            </div>
        </div>
    }
}

export default Serie;