import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./Mealsearch.css";


  const MealSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [ingredientquery, setIngredientquery] = useState("");

  const [showSearch, setShowSearch] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  // console.log("scrolling value down",lastScrollY);
 
  
  // console.log('effect of using onchange', query);



   useEffect(() => {
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // console.log("Current Scrolling", currentScrollY);



      // Only hide if scrolling down
      if (currentScrollY > lastScrollY) {
        setShowSearch(false);
        // console.log("scrolling down");
        
      } else{
        setShowSearch(true);
        // console.log("scrolling up");
        
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);






const handleSearch = () => {
  if (query.trim() !== "") {
    navigate(`/search/${query.trim()}`);
    setQuery("");   
  } 
  else if (ingredientquery.trim() !== "") {
    
   
    navigate(`/IngredientsSearchResult/${ingredientquery.trim()}`);
    setIngredientquery("");  
  } 
  else {
    alert("Please enter a meal name or ingredient!");
  }
};





  return (
 

 
    <div className="width_95" style={{ margin: "0 auto" }}>
      {/* <h1>Meal Search 🍽️</h1> */}
      

      <div className={`search-mobile ${showSearch ? "show" : "hide"}`}>

{/* this input for meal search */}
        <input
          className="search_bar"
          type="text"
          placeholder="Search by Meal"
          value={query}

          //  onChange={(e) => setQuery(e.target.value)}

         onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value !== "") {
              setIngredientquery(""); // Clear ingredient input
            }
          }}
          


          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />



{/* this input for Ingredient search */}
         <input
          className="search_bar"
          type="text"
          placeholder="Search by ingredient"
          value={ingredientquery}

            // onChange={(e) => setIngredientquery(e.target.value)}

          onChange={(e) => {
            setIngredientquery(e.target.value);
            if (e.target.value !== "") {
              setQuery(""); // Clear meal input
            }
          }}


          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />


        

        <button className="btn_main s_btn_main" onClick={handleSearch}>
          Search
        </button>

         <button className="btn_main mobile_btn" onClick={handleSearch}>
          < FaSearch />
        </button>


      </div>
    </div>
 
 

  );
};

export default MealSearch;
