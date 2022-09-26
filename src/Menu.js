import React, { useEffect, useState } from 'react'

const Menu = () => {
    const [categoriesFromApi, setCategoriesFromApi] = useState([])
    const [mealsByCategory, setMealsByCategory] = useState(null)

useEffect(() => { 
    (async function(){
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php" 
        const response = await fetch(url)
        const categoriesFromApi = await response.json()
        setCategoriesFromApi(categoriesFromApi.categories)

        //console.log(categoriesFromApi)
    }())
}, [])

/* 
- créer un event listener qui écoute le click du menu
- au click on execute une fonction
- utilise l'url qui recupere les recettes par categorie
- faire une requete ajax
- stocker les recettes
- afficher les recette
/*-*/

const getMealsByCategory = async (category) => {
    const categoryName = category.strCategory
    const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + categoryName
    const response = await fetch(url)
    const mealsFromApi = await response.json()
    setMealsByCategory(mealsFromApi.meals)
    console.log(mealsFromApi.meals)
}

return (
    <>
        <nav>
            <ul>
                {categoriesFromApi.map((category) => {
                    return (
                        <li key={category.idCategory}
                            onClick={() => getMealsByCategory(category)}
                        > 
                            {category.strCategory} 
                        </li>
                    )
                })}
            </ul>
        </nav>

        <section>
            {mealsByCategory.map((mealByCategory) => {
                return <p key={mealByCategory.idMeal}>
                            {mealByCategory.strMeal}
                        </p>
            })}
        </section>
    </>
    )
}

export default Menu
