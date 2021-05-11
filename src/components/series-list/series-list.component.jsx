import React from "react"
import { Link } from "react-router-dom"

const SeriesList = ({ data }) => {

    return <div>



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


        </div>
    </div>
}

export default SeriesList;