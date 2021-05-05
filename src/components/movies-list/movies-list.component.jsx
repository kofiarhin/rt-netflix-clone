import React from "react"
import { Link } from "react-router-dom"

const MoviesList = ({ data }) => {

    return <div>
        <h1 className="title">All <span>Movies</span> </h1>

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
}

export default MoviesList;