
import React from 'react'


const Meal = ({ meal }) => {  

  return (
    <>
        {meal ? (
            <article>
                <h2>{meal.strMeal}</h2>
            </article>
        ) : (
            <p> pas de recette</p>    
        )}
    </>  
  )
}

export default Meal

/*

*/