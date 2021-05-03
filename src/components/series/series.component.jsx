import React from "react"
import Header from "../header/header.component"
import { Link } from "react-router-dom"


class Series extends React.Component {

    state = {
        data: [],
        page: 1
    }

    componentDidMount() {

        const url = `https://api.themoviedb.org/3/tv/popular?api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US&page=1`

        fetch(url).then(response => response.json()).then(result => {

            const { results: data } = result;

            this.setState({
                data
            })
        })
    }

    loadMore = () => {

        let { page } = this.state;

        page += 1;

        let url = `https://api.themoviedb.org/3/tv/popular?api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US&page=${page}`

        fetch(url).then(response => response.json()).then(result => {

            const { results: data } = result;

            this.setState({
                data,
                page
            })
        })
    }

    render() {

        const { data } = this.state;

        return <div>

            <Header />

            <div className="container">
                <div className="wrapper">
                    {
                        data.map(({ id, poster_path, name, ...rest }) => {


                            return <Link to={`/series/${id}`} key={id}>

                                <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt="" />
                                <h1>  {name} </h1>

                            </Link>
                        })
                    }
                </div>

                <div className="button-wrapper">
                    <button onClick={() => this.loadMore()}>Load More</button>
                </div>
            </div>

        </div>
    }
}

export default Series;