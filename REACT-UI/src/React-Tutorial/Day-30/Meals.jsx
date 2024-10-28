import React from 'react'
import './MealsStyle.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

const Meals = () => {
    const [items, setitems] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then(res => {
                //console.log(res.data.meals)
                setitems(res.data.meals)
            })
            .catch((err) => {
                console.log(err)
            });
    }, [])
    const itemList = items.map(({ strMeal, strMealThumb, idMeal }) => {
        return (
            <section className='card'>
                <img src={strMealThumb} alt={strMeal} />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    })
    return (
        <div className='items-container'>{itemList}</div>
    )
}

export default Meals