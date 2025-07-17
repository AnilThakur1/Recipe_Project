 
import { useEffect, useState } from 'react';

import ReusableCard from './reusable-card';


import './responsive.css';


function TrendingCard({}) {


const [meals, setMeals] = useState([]);

    const fetchCard2 = async () => {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
            );
            const data = await response.json();
            setMeals(data.meals);
              console.log('API response for  trending meal', data.meals[0]);
        } catch (error) {
            console.log("Error fetching meals:", error);
        }
    };


    

    useEffect(() => {
        fetchCard2();
    }, []);
 




  return (

    //  style={{color:"#337179"}}
    

    <div className='width_95 mobile-tending' >
    <h1 className="trend_recipe" style={{color:"#337179"}}>Trending Recipe</h1>

    <div className="reu_card_all">

         {meals.map((meal, index) => (

          <ReusableCard meal={meal} key={index + 1}/> 

          // {meals.map((meal) => (
          // <ReusableCard meal={meal} key={meal.idMeal} />
 
           

        ))}
    </div>

    </div>


 
 
  )
}

export default TrendingCard
