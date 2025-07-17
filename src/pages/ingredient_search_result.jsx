import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReusableCard from "../components/reusable-card";
 
import './ingredients_search_result.css'

 
function IngredientsSearchResult() {
  const {ingredientquery } = useParams(); 
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);   
  const [error, setError] = useState("");         



 useEffect(() => {
    if (ingredientquery){
      fetchMeals(ingredientquery);
    }
  }, [ingredientquery]);


  
    const fetchMeals = async (ingredientquery) => {
      if (!ingredientquery.trim()) return;
      setLoading(true);
      setError("");
      setMeals([]);

      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientquery}`
        );
        const data = await res.json();
        console.log(data);
        if (data.meals) {
          console.log('API response for  meal', data.meals[0]);
          setMeals(data.meals);
        } else {
          setError("No meals found!");
        }
      } catch (err) {
        setError("Something went wrong while fetching data");
      } finally {
        setLoading(false);
      }
    };




  return (
<div className="ingredients width_95">
  <h2 className="ingredient_h2">Made from {ingredientquery} ingredient</h2>
  {loading && <p>Loading meals...</p>}
  {error && <p>{error}</p>}

  <div className="ingredients_flex">
    {!loading && !error && meals.length === 0 ? (
      <p>No meals found for this ingredient.</p>
    ) : (
      meals.map((meal) => (
        <ReusableCard key={meal.idMeal} meal={meal} />
      ))
    )}
  </div>
</div>

  );
}




export default IngredientsSearchResult;
