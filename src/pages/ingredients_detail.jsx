import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ingredient_detail.css';

import ReusableCard from "../components/reusable-card";

 

function Ingredients_Detail() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const { name } = useParams(); 


  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals || []);
        // console.log(`Meals using ingredient "${name}":`, data.meals);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meals:", error);
        setLoading(false);
      });
  }, [name]);

  if (loading) return <p className="width_95">Loading ingredients detail...</p>;



  return (
    <div className="ingredients width_95">
      <h2 className="i_name">Meals made with ingredient: {name}</h2>

<div className="ingredients_flex">
 
      {meals.length === 0 ? (
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







export default Ingredients_Detail;
