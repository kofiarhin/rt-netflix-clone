import React from "react"
import { Link } from "react-router-dom"

const SeriesList = ({ data }) => {

    return <div>

        <h1 className="title">All <span>Series</span> </h1>

        <div className="container">
            <div className="wrapper">
                {
                    data.map(({ id, poster_path, name, ...rest }) => {


                        return <Link to={`/main/series/${id}`} key={id}>

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

export default SeriesList;