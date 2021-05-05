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
        isLoading: true
    }

    componentDidMount() {

        const url = `https://api.themoviedb.org/3/tv/popular?api_key=ca357c71903c409f2ce08d61e75700a6&language=en-US&page=1`

        fetch(url).then(response => response.json()).then(result => {

            const { results: data } = result;

            this.setState({
                data,
                isLoading: false
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

    render() {

        const { data, isLoading } = this.state;

        return <div className="series">

            {
                isLoading ? <Spinner /> : <SeriesList data={this.state.data} />
            }

        </div>
    }
}

export default Series;