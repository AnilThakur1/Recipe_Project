import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReusableCard from "../components/reusable-card";
import './search.css';

const Search = () => {
  const { query } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query){
      fetchMeals(query);
    }
  }, [query]);



  const fetchMeals = async (query) => {
      if (!query.trim()) return;
      setLoading(true);
      setError("");
      setMeals([]);

      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
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
    <div  className="m_padding">
    <section className="width_95" style={{ margin: "0 auto" }}>

        <h2 className="search_h2" style={{ color:"var(--text-green)"}}>Meal search by: {query}</h2>

      {loading && <p className="width_95" style={{ marginTop: "20px" }}>Loading...</p>}
      {error && <p style={{ marginTop: "20px" }}>{error}</p>}

      <div className="reu_card_all">
     
      {/* <div className=""> */}
        {meals.map((meal, index) => (
          <ReusableCard meal={meal} key={index + 1} />
        ))}
      </div>

    </section>
    </div>
  );
};

export default Search;
