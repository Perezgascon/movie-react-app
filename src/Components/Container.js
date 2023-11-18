import Genre from "./Genre";
import Movie from "./Movie";

import React from 'react'

export default function Container() {
  return (
    <div>
        <Genre name={"Comedy"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ege"} movieTitle1={ <Movie title="Something About Mary" year="2001"/> } movieTitle2={ <Movie title="Life of Brian" year="1982"/> } />
        <Genre name={"Romance"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula ege"} movieTitle1={ <Movie title="Legends of the Fall" year="1987"/> } movieTitle2={ <Movie title="Love Actually" year="2002"/> } />
    </div>
  )
}
