import { useNavigate } from "react-router-dom";
import "./reusable-card.css";

function ReusableCard({ meal }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/meal/${meal.idMeal}`);
  };

  return (
    <div className="">
         {/* {meals.map((meal) => ( */}

      <div className="reu_card1" onClick={handleClick}>
        <img className="reu_image" src={meal.strMealThumb} alt={meal.strMeal} />

        <h2>{meal.strMeal.length > 20 ? meal.strMeal.slice(0, 20) + "..." : meal.strMeal} </h2>

        <p> {meal.strInstructions ? meal.strInstructions.length > 50 ? meal.strInstructions.slice(0, 50) + "..." : meal.strInstructions
            : " "} </p>

      </div>

    </div>
  );
}

export default ReusableCard;
