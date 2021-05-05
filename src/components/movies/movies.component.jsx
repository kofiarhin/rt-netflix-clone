import React from "react"
import { Link } from "react-router-dom"
import Header from "../header/header.component"

import Spinner from "../spinner/spinner.component"
import MoviesList from "../movies-list/movies-list.component"


import "./movies.styles.scss"

class Movies extends React.Component {


    state = {
        data: [],
        page: 1,
        isLoading: true
    }

    componentDidMount() {

        const url = `https://api.themoviedb.org/3/trending/all/day?api_key=ca357c71903c409f2ce08d61e75700a6&page=1`

        fetch(url).then(response => response.json()).then(result => {

            const { results } = result;


            this.setState({
                data: results,
                isLoading: false
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

        const { data, isLoading } = this.state;


        return <div className="movies">


            <div className="container">



                {
                    isLoading ? <Spinner /> : <MoviesList data={this.state.data} />
                }


            </div>
        </div>
    }
}

export default Movies;