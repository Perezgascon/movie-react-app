import React from 'react'
import style from './Section.module.css'

export default function Header() {
  return (
    <div className={style.header}>
        <h1>Movie App</h1>
        <p>Learn the latest information about your faviourite movies</p>
    </div>
  )
}
