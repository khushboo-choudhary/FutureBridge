import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import "./Cards.css"

export default function Cards() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:2000/products").then((res) => {
            setMovies(res.data);
        })
    }, []);
    return (
        <>
    <h1>Movies Collection</h1>
      <div className='main'>{movies.map((el)=>{
        return <div className="cont" key={el._id}>
                <Link to ={`/products/${el.id}`}>
                <h1 className='title'>Title: {el.title}</h1>
                <p className='rating'>Rating: {el.rating}</p>
                <p className='release_date'>Release Date: {el.release_date}</p>
                </Link>
        </div>
      })}</div>
      </>
    )
}
