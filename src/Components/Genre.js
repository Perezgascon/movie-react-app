import React from 'react'
import style from './Section.module.css'

export default function Genre( { name, description, movieTitle1, movieTitle2 }) {
  return (
    <div className={style.card}>
        <h2>{ name }</h2>
        <p>{ description } </p>
        <h3>Recommended Movies</h3>
        <h4>{ movieTitle1 }</h4>
        <h4>{ movieTitle2 }</h4>
    </div>
  )
}
