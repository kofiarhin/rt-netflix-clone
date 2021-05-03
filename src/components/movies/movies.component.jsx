import React from "react"
import { Link } from "react-router-dom"
import Header from "../header/header.component"



class Movies extends React.Component {


    state = {
        data: [],
        page: 1
    }

    componentDidMount() {

        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=ca357c71903c409f2ce08d61e75700a6&page=1`

        fetch(url).then(response => response.json()).then(result => {

            const { results } = result;

            this.setState({
                data: results
            })
        })


    }

    loadMore = () => {

        let { page } = this.state;

        page += 1;

        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=ca357c71903c409f2ce08d61e75700a6&page=${page}`

        fetch(url).then(response => response.json()).then(result => {

            const { results } = result;

            this.setState({
                data: [...this.state.data, ...results],
                page
            })
        })
    }

    render() {

        const { data } = this.state;


        return <div>


            <div className="container">


                <h1 className="title">All Movies</h1>

                <div className="wrapper">
                    {
                        data.map(({ id, title, poster_path }) => {

                            const imgUrl = `https://image.tmdb.org/t/p/w1280${poster_path}`

                            return <Link to={`/main/movies/${id}`} key={id}>
                                <img src={imgUrl} alt="" />
                                <h1> {title} </h1>

                            </Link>
                        })
                    }
                </div>

                <div className="button-wrapper">
                    <button onClick={() => this.loadMore()}> Load More</button>
                </div>
            </div>
        </div>
    }
}

export default Movies;