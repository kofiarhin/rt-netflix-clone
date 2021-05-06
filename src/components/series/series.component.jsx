import React from "react"
import Header from "../header/header.component"
import { Link } from "react-router-dom"

import SeriesList from "../series-list/series-list.component"
import Spinner from "../spinner/spinner.component"

import "./series.styles.scss"


class Series extends React.Component {

    state = {
        data: [],
        page: 1,
        isLoading: true,
        search: "",
        searchResult: []
    }

    componentDidMount() {

        const url = `https://api.themoviedb.org/3/tv/popular?api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US&page=1`

        fetch(url).then(response => response.json()).then(result => {

            const { results: data } = result;

            this.setState({
                data,
                isLoading: false,

            })
        })
    }

    loadMore = () => {

        let { page } = this.state;

        page += 1;

        let url = `https://api.themoviedb.org/3/tv/popular?api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US&page=${page}`

        fetch(url).then(response => response.json()).then(result => {

            const { results } = result;

            this.setState({
                data: [...this.state.data, ...results],
                page
            })
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { search } = this.state;

        let url = `https://api.themoviedb.org/3/search/tv?query=${search}&api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US&page=1&include_adult=false`;

        fetch(url).then(response => response.json()).then(result => {

            const { results } = result;

            this.setState({
                data: results,
                isLoading: false
            })

        })
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    render() {

        const { data, isLoading } = this.state;

        return <div className="series">



            <div className="container">

                <h1 className="title">All <span>Series</span> </h1>

                <form action="" onSubmit={this.handleSubmit}>

                    <input type="text" placeholder="Search Series" onChange={this.handleChange} name="search" value={this.state.search} />
                </form>
            </div>

            <div>
                {
                    isLoading ? <Spinner /> : <SeriesList data={this.state.data} />
                }

            </div>
        </div>
    }
}

export default Series;