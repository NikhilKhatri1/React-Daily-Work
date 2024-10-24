import React from 'react'
import { useState } from 'react'

const Movie = () => {
    const initialValue = {
        title: "Terminator-1",
        rating: 8
    }
    const [movie, setMovie] = useState(initialValue)

    const HandleRating = () => {
        //     setMovie(prevMovie => ({ ...prevMovie, title: "Frozen", rating: 5 }))
        setMovie({ ...movie, title: "Aladin", rating: 5 })
    }
    const Reset = () => {
        setMovie(initialValue)
    }
    return (
        <div>
            <h1>Movie Title : {movie.title}</h1>
            <p>Movie Rating : {movie.rating}</p>
            <button className='btn btn-primary me-2' onClick={HandleRating}>Update Rating</button>
            <button className='btn btn-success' onClick={Reset}>Reset</button>
        </div>
    )
}

export default Movie