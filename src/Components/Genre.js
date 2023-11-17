import React from 'react'

export default function Genre( { name, description, movieTitle1, movieTitle2 }) {
  return (
    <div>
        <h2>{ name }</h2>
        <p>{ description } </p>
        <h3>Recommended Movies</h3>
        <ul>
            <li>{ movieTitle1 }</li>
            <li>{ movieTitle2 }</li>
        </ul>
    </div>
  )
}
