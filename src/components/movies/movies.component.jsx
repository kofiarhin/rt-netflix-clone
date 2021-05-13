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
        isLoading: true,
        searchResult: [],
        search: ""
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

    handleSubmit = e => {

        e.preventDefault();

        const { search } = this.state;

        if (search !== "") {

            const url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US&page=1&include_adult=false`


            fetch(url).then(response => response.json()).then(result => {

                const { results } = result;

                this.setState({
                    data: results,
                    isLoading: false
                })
            })


        }
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    render() {

        const { data, isLoading } = this.state;


        return <div className="movies">


            <div className="container">

                <h1 className="title">All <span>Movies</span> </h1>

                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Search Movies" name="search" onChange={this.handleChange} value={this.state.search} />
                </form>

                <MoviesList data={data} />



                {/* todo -  load current search */}
                <div className="button-wrapper">
                    <button onClick={() => this.loadMore()}> Load More</button>
                </div>


            </div>
        </div>
    }
}

export default Movies;