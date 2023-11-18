import React from 'react'

const Movie = ({ title, year }) => {
    return (
        <div>
            <p key={title}> {title}, {year} </p>
        </div>
    )
}

export default Movie