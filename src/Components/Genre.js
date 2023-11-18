import React from 'react'
import style from './Section.module.css'

export default function Genre( { name, description, movieTitle1, movieTitle2 }) {
  return (
    <div className={style.card}>
        <h2>{ name }</h2>
        <p>{ description } </p>
        <hr />
        <h3>Recommended Movies</h3>
        <p>{ movieTitle1 }</p>
        <p>{ movieTitle2 }</p>
    </div>
  )
}
